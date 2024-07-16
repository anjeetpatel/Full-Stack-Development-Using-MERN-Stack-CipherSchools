import { createContext, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasklist, setTasklist] = useState([]);
  const addTask = (task) => {
    setTasklist([...tasklist, { ...task, create_date: new Date() }]);
  };

  return (
    <TaskContext.Provider value={{ tasklist, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
export { TaskProvider };
export default TaskContext;
