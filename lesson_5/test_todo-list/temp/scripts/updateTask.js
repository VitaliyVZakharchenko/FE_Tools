import "core-js/modules/es.array.find";
import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { updateTask, getTasksList } from "./gateway.js";
export var onToggleTask = function onToggleTask(e) {
  var isCheckbox = e.target.classList.contains("list-item__checkbox");
  if (!isCheckbox) return;
  var done = e.target.checked;
  var tasksList = getItem("tasksList");
  var taskId = e.target.dataset.id;

  var _tasksList$find = tasksList.find(function (task) {
    return task.id === taskId;
  }),
      text = _tasksList$find.text,
      createDate = _tasksList$find.createDate;

  var updatedTask = {
    text: text,
    createDate: createDate,
    done: done,
    doneDate: done ? new Date().toISOString() : null
  };
  updateTask(taskId, updatedTask).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem("tasksList", newTasksList);
    renderTasks();
  });
};