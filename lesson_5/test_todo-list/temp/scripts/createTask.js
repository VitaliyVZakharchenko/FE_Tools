import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { createTask, getTasksList } from "./gateway.js";
export var onCreateTask = function onCreateTask() {
  var taskTitleInputElem = document.querySelector(".task-input");
  var text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = "";
  var newTask = {
    text: text,
    done: false,
    createDate: new Date().toISOString(),
    doneDate: null
  };
  createTask(newTask).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem("tasksList", newTasksList);
    renderTasks();
  });
};