import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  //const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("");
  const [idnum, setIdnum] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleIdnumChange = (e) => setIdnum(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 리프레시 막음
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: "미실천" });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 항목 추가 */}
      <div className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="항목을 추가하세요~"
          value={text}
          onChange={handleChange}
        />
        <button className={styles.button}>Add</button>
      </div>
      {/* 날짜 */}
      <div className={styles.form2}>
        <label className={styles.label} htmlFor="date">
          {"날짜"}
        </label>
        <DatePicker
          id="date"
          className={styles.date_picker}
          dateFormat="yyyy년 MM월 dd일"
          selected={date}
          onChange={handleDateChange}
        />
      </div>
      {/* 성명 */}
      <div className={styles.form2}>
        <label className={styles.label} htmlFor="name">
          {"성명"}
        </label>
        <input
          id="name"
          className={styles.input2}
          type="text"
          placeholder="이름을 입력하세요."
          value={name}
          onChange={handleNameChange}
        />
      </div>
      {/* 사번 */}
      <div className={styles.form2}>
        <label className={styles.label} htmlFor="idnum">
          {"사번"}
        </label>
        <input
          id="idnum"
          className={styles.input2}
          type="text"
          placeholder="사번을 입력하세요."
          value={idnum}
          onChange={handleIdnumChange}
        />
      </div>
      {/* 저장버튼 */}
      <div className={styles.form2}>
        <button className={styles.button_save}>저장</button>
      </div>
    </form>
  );
}
