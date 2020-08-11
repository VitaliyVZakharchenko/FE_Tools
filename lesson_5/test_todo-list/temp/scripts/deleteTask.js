import { setItem } from "./storage.js";
import { deleteTask } from "./gateway.js";
import { getTasksList } from "./gateway.js";
import { renderTasks } from "./renderer.js";
export var onDeleteTask = function onDeleteTask(e) {
  var isDeleteBtn = e.target.classList.contains("list-item__delete-btn");
  if (!isDeleteBtn) return;
  var taskId = e.target.closest(".list-item").querySelector(".list-item__checkbox").dataset.id;
  deleteTask(taskId).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem("tasksList", newTasksList);
    renderTasks();
  });
};