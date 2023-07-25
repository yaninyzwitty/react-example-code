import React from "react";

type Props = {
  tasks: any[];
  onChangeTask: (task: any) => void;
  onDeleteTask: (id: number) => void;
};
export default function TaskList({tasks, onChangeTask, onDeleteTask}: Props) {
  return (
    <div>
      <h2>Tasks:</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onChangeTask({...task, done: !task.done})}
          />
          <span
            style={{
              textDecoration: task.done ? "line-through" : "none",
              marginLeft: "8px",
            }}
          >
            {task.text}
          </span>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
