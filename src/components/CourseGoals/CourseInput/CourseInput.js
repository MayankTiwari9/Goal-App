import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  const goalInputChangeHandler = (event) => {
    const inputValue = event.target.value;
    setEnteredValue(inputValue);
    setIsTouched(true);

    setIsValid(inputValue.trim().length > 0);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      setIsTouched(true);
      return;
    }

    props.onAddGoal(enteredValue);
    setEnteredValue("");
    setIsValid(true);
    setIsTouched(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid && isTouched ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button
        type="submit"
        style={{
          backgroundColor:
            !isValid && isTouched
              ? "lightcoral"
              : enteredValue.length === 1
              ? "red"
              : "darkred",
        }}
      >
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
