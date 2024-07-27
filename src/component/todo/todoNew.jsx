import { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props;

    const [inputValue, setInputValue] = useState("Eric");

    const handleClick = () => {
        addNewTodo(inputValue);
        setInputValue("");
    };

    const handleOnChange = (name) => {
        setInputValue(name);
    };

    return (
        <div className="todo__form">
            <input
                type="text"
                className="todo__input"
                placeholder="Enter Please...."
                onChange={(event) => handleOnChange(event.target.value)}
                value={inputValue}
            />
            <button className="btn todo__btn" onClick={handleClick}>
                Add
            </button>
            <p className="todo__text">My new todo is = {inputValue}</p>
        </div>
    );
};

export default TodoNew;
