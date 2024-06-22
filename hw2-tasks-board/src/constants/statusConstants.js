export const STATUS_TODO = {
  name: "To Do",
  status: 0,
  buttonName: { action: "In progress" },
};

export const STATUS_IN_PROGRESS = {
  name: "In Progress",
  status: 1,
  buttonName: { action: "To do", done: "Done" },
};

export const STATUS_DONE = {
  name: "Done",
  status: 2,
  buttonName: { action: "To archive" },
};
