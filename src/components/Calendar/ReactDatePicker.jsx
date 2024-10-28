import React, { useState } from "react";
import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
//import CustomInput from "../../Input/CustomInput";
//import Border from "../../border";

const ReactDatePicker = () => {
  const [startDate, setStartDate] = useState < Date > new Date();

  return (
    <div color={"#F0F8FF"}>
      <DatePicker
        fixedHeight
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default ReactDatePicker;
