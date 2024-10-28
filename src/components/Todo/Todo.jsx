import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    let status = e.target.checked ? "실천" : "미실천";
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <li className={styles.todo}>
      <input
        className={styles.check}
        type="checkbox"
        id={id}
        checked={status === "실천"}
        onChange={handleChange}
      />
      <label className={styles.label} htmlFor={id}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
