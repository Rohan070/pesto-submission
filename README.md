# To-Do

Welcome to To-Do, a feature-rich task management application built using the MERN stack! With To-Do, you can organize your tasks efficiently, mark them as complete, star important ones, and much more.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

To-Do offers a comprehensive set of features to streamline your task management experience:

- **Create Task**: Easily add new tasks to your list.
- **Mark as Complete**: Keep track of your progress by marking tasks as complete.
- **Starred Tasks**: Highlight important tasks by starring them.
- **Delete Task**: Remove unwanted tasks from your list.
- **Filtering Options**: Customize your task view with various filtering options:
  - Show all tasks (default).
  - Show only completed tasks.
  - Show only starred tasks.
  - Show tasks created today.
  - Show tasks created a week ago.
  - Show deleted tasks (available for 15 days after deletion).
- **Smart Task Creation**: New tasks are created based on conditions:
  - Tasks are created only if 50% of the previous tasks have been completed.
  - This condition applies after every 10 tasks.
- **Staus Based Filtering**: Customize your task view with various status:
  - To Do
  - In Progress
  - Done

## Getting Started

To get started with To-Do, follow these steps:

<ol start="1">
<li>Clone the repository:
  <pre><code class="language-bash"> git clone https://github.com/Rohan070/pesto-submission.git</code></pre>
</li>
  
<li>Navigate to the project directory:
  <pre><code class="language-bash">cd To-Do</code></pre>
</li>

<li>Install dependencies for both frontend and backend:<pre><code class="language-bash">
      cd frontend &amp;&amp; npm install &amp;&amp; cd ..
      cd backend &amp;&amp; npm install &amp;&amp; cd .. </code></pre>
</li>

<li>Start the frontend development server:<pre><code class="language-bash"> npm run dev</code></pre>
</li>
<li>Start the backend server:<pre><code class="language-bash"> node index.js</code></pre>
</li>

<li>Run test cases on backend:<pre><code class="language-bash">cd backend
npm run test</code></pre>
</li>
</ol>

<h2 id="usage">Usage</h2>
<p>Once the development server is running, you can access To-Do by visiting <code>http://localhost:5173/</code> in your web browser. Sign up or log in to begin managing your tasks!</p>

<h2 id="usage">Pre-Created Users to test the todo app</h2>
<p>Username: rohanpesto</p>
<p>Password: Password@123</p>

<h2 id="project-structure">Project Structure</h2>
<p>The project follows a standard MERN stack structure:</p>
<ul>
<li><code>frontend/</code>: Contains the frontend codebase.</li>
<li><code>backend/</code>: Contains the backend codebase.</li>
<li><code>.gitignore</code>: Specifies intentionally untracked files to ignore.</li>
<li><code>README.md</code>: You&#39;re reading it right now!</li>
</ul>

<p>This is a submission for pesto-tech</p>
