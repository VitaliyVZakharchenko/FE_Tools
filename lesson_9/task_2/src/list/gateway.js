const serverUrl = 'https://crudcrud.com/api/5e3b473782ff4ab7b1d7929dfdb212ca';

const mapTasks = (tasks) => tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));

export const getTasksList = () => fetch(serverUrl)
  .then((response) => response.json())
  .then((tasks) => mapTasks(tasks));

export const createTask = (taskData) => fetch(serverUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});

export const updateTask = (taskId, updatedTaskData) => fetch(`${serverUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updatedTaskData),
});

export const deleteTask = (taskId) => fetch(`${serverUrl}/${taskId}`, {
  method: 'DELETE',
});
