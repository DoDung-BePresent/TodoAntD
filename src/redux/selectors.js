export const todoListSelector = (state) => {
  const { todoList, filters } = state;
  const { status, search, priorities } = filters;

  return todoList.filter((todo) => {
    const nameLowerCase = todo.name.toLowerCase();
    const searchLowerCase = search.toLowerCase();

    if (status === "All") {
      return priorities.length
        ? nameLowerCase.includes(searchLowerCase) &&
            priorities.includes(todo.priority)
        : nameLowerCase.includes(searchLowerCase);
    }

    return (
      nameLowerCase.includes(searchLowerCase) &&
      (status === "Completed" ? todo.completed : !todo.completed) &&
      (priorities.length ? priorities.includes(todo.priority) : true)
    );
  });
};
