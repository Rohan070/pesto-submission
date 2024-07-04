import React, { useState, useRef, useEffect } from "react";
import crossBtn from "../assets/crossBtn.png";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setTodo } from "../Store/Reducers/TodoFilterSlice";
import { ToastContainer, toast } from "react-toastify";
import global from "../Components/Global";
function CreateTask({ taskEdit }) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.UserSlice);
  const [inputValue, setInputValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [dropDownValue, setDropDownValue] = useState("To Do");
  const [type, setType] = useState("new");
  const refElement = useRef();
  const apiUrl = global.REACT_APP_API_BASE_URL;

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleDescription(e) {
    setDescriptionValue(e.target.value);
  }

  function handleDropdown(e) {
    setDropDownValue(e.target.value);
  }

  function createTaskBtn(e) {
    e.preventDefault();
    if (inputValue.trim() !== "" && descriptionValue.trim() !== "") {
      if (type == "update")
        sendCreatedTask({ task: inputValue, description: descriptionValue, status: dropDownValue, _id: taskEdit["_id"]  });
      else sendCreatedTask({ task: inputValue, description: descriptionValue, status: dropDownValue });
      setInputValue("");
      setDescriptionValue("");
    } else {
      toast.error("Task & Description cannot be empty");
    }
  }

  function cancelBtn() {
    toast.info("Cancelling");
    setInputValue("");
    setType("new");
    setDescriptionValue("");
    setDropDownValue("To Do")
  }

  function closeCreateTask() {
    refElement.current.style.display = "none";
  }

  async function sendCreatedTask(payload) {
    try {
      const response = await axios.post(apiUrl + "todo/addTask", {
        task: payload.task,
        description: payload.description,
        status: payload.status,
        userId: userInfo.userId,
        id: payload.hasOwnProperty("_id") ? payload["_id"] : null
      });
      console.log(response);
      response.data.status
        ? toast.success(response.data.message)
        : toast.error(response.data.message);
      fetchTodos(userInfo.userId);
      closeCreateTask();
    } catch (error) {
      console.log(error.response ? error.response.data : "");
    }
  }

  const fetchTodos = async (userId) => {
    try {
      const response = await axios.post(apiUrl + "filters/all", {
        userId: userId,
      });
      if (response.data.status === false) {
        toast.info(response.data.message);
      } else {
        dispatch(setTodo(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (taskEdit.hasOwnProperty("userId")) {
      setType("update")
      setInputValue(taskEdit.task);
      setDescriptionValue(taskEdit.description);
      setDropDownValue(taskEdit.status);
    } else {
      setType("new")
    }
  }, [taskEdit])

  return (
    <div id="CT-main-container" ref={refElement}>
      <div>
        <div id="CT-head">
          <h3 id="CT-heading">{type == "new" ? "New List" : "Update List"}</h3>
          <img
            id="CT-cross-btn"
            src={crossBtn}
            alt="Cross Button/Close Button"
            onClick={closeCreateTask}
          />
        </div>
        <section id="CT-1">
          <input
            type="text"
            value={inputValue}
            placeholder="Enter task"
            onChange={handleInput}
          />
          <textarea
            type="text"
            value={descriptionValue}
            placeholder="Description"
            onChange={handleDescription}
            rows="4" cols="50"
          />
          <select defaultValue="To Do" onChange={handleDropdown} value={dropDownValue}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </section>
        <section id="CT-2">
          <button id="CT-create-btn" className="CT-btn" onClick={createTaskBtn}>
            {type == "new" ? "Create Task" : "Update Task"}
          </button>
          <button id="" className="CT-btn CT-cancel-btn" onClick={cancelBtn}>
            Cancel
          </button>
        </section>
      </div>
    </div>
  );
}

export default CreateTask;
