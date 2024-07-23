import { useState } from "react";

const TodoNew = (props) => {
    const { newAddTodo, deleteTodo } = props;

    const [valueInput, setValueInput] = useState("");

    const handleClick = () => {
        newAddTodo(valueInput);
        setValueInput("");
    };

    const handleOnChange = (name) => {
        setValueInput(name);
    };

    return (
        <div className="todo__input-wrap">
            <input
                type="text"
                className="todo__input"
                placeholder="Enter your task"
                onChange={(event) => {
                    handleOnChange(event.target.value);
                }}
                value={valueInput}
            />
            <button className="todo__cta-btn" onClick={handleClick}>
                Add
            </button>
            <div style={{ marginLeft: "10px" }}>
                My Input is a = {valueInput}
            </div>
        </div>
    );
};

export default TodoNew;
