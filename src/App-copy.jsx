import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";

const App = () => {
    const [todoList, setTodoList] = useState([
        // { id: 1, name: "Learning English" },
        // { id: 2, name: "Watching Youtube" },
    ]);

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 1000000),
            name,
        };

        setTodoList([...todoList, newTodo]);
    };

    const deleteTodo = (id) => {
        const newTodo = todoList.filter((item) => item.id !== id);
        setTodoList(newTodo);
    };

    function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div className="todo">
            <div className="todo__container">
                <div className="todo__inner">
                    <h2 className="todo__heading">Todo List</h2>

                    <TodoNew addNewTodo={addNewTodo} />
                    {todoList.length > 0 ? (
                        <TodoData todoList={todoList} deleteTodo={deleteTodo} />
                    ) : (
                        <img
                            src={reactLogo}
                            alt="Logo"
                            className="todo__image logo"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
