import { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props;

    const [valueInput, setValueInput] = useState("");

    const handleClick = () => {
        console.log(">>>> handleClick");
        addNewTodo(valueInput);
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

            <div>My name is = {valueInput}</div>
        </div>
    );
};

export default TodoNew;
