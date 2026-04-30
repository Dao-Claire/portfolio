const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");

function updateCounter() {
  const total = document.querySelectorAll("#taskList li").length;
  counter.textContent = total + " tâche(s)";
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  createTaskElement(taskText);

  input.value = "";
  saveTasks();
  updateCounter();
}

function createTaskElement(taskText, completed = false) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  if (completed) {
    span.classList.add("completed");
  }

  span.onclick = function () {
    span.classList.toggle("completed");
    saveTasks();
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.onclick = function () {
    li.remove();
    saveTasks();
    updateCounter();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);

  li.style.opacity = "0";
  setTimeout(() => {
    li.style.opacity = "1";
  }, 100);

  taskList.appendChild(li);
}

function saveTasks() {
  const tasks = [];

  document.querySelectorAll("#taskList li").forEach(li => {
    const text = li.querySelector("span").textContent;
    const completed = li.querySelector("span").classList.contains("completed");

    tasks.push({ text, completed });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(task => {
    createTaskElement(task.text, task.completed);
  });

  updateCounter();
}

function filterTasks(type) {
  const tasks = document.querySelectorAll("#taskList li");

  tasks.forEach(li => {
    const isCompleted = li.querySelector("span").classList.contains("completed");

    if (type === "all") {
      li.style.display = "flex";
    } else if (type === "active") {
      li.style.display = isCompleted ? "none" : "flex";
    } else if (type === "completed") {
      li.style.display = isCompleted ? "flex" : "none";
    }
  });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark);
}

function loadDarkMode() {
  const darkMode = localStorage.getItem("darkMode") === "true";

  if (darkMode) {
    document.body.classList.add("dark");
  }
}

window.onload = function () {
  loadTasks();
  loadDarkMode();
};

document.getElementById("taskInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});
