import reactLogo from "../../assets/react.svg";
import "./todoApp.css";
import TodoNew from "./todoNew";
import TodoData from "./todoData";
import { useState } from "react";

const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 1000000),
            name,
        };

        setTodoList([...todoList, newTodo]);
    };

    function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const deleteTodo = (id) => {
        const newTodo = todoList.filter((item) => item.id !== id);
        setTodoList(newTodo);
    };
    return (
        <div>
            <div className="todo">
                <div className="container">
                    <div className="todo__inner">
                        <h1 className="todo__heading">Todo List</h1>
                        <TodoNew addNewTodo={addNewTodo} />
                        {todoList.length > 0 ? (
                            <TodoData
                                todoList={todoList}
                                deleteTodo={deleteTodo}
                            />
                        ) : (
                            <div className="todo__image">
                                <img
                                    src={reactLogo}
                                    alt=""
                                    className="todo__img"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
