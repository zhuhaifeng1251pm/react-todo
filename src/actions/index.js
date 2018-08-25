export const deleteEvent = id => ({
  type: "DELETE_EVENT",
  id
});

export const changeIsCompleted = id => ({
  type: 'CHANGE_ISCOMPLETED',
  id
});
