import React, {useState} from "react";
type Props = {
  onAddTask: (text: string) => void;
};

export default function AddTask({onAddTask}: Props) {
  const [text, setText] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (text.trim() !== "") {
      onAddTask(text);
      setText("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
