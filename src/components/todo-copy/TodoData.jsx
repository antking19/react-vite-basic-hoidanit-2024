const TodoData = () => {
    return (
        <ul className="todo__list">
            <li className="todo-item">
                <p className="todo-item__text">doing homework</p>
                <button className="todo-item__delete">Delete</button>
                <button className="todo-item__edit">Edit</button>
            </li>

            <li className="todo-item">
                <p className="todo-item__text">watching youtube</p>
                <button className="todo-item__delete">Delete</button>
                <button className="todo-item__edit">Edit</button>
            </li>

            <li className="todo-item">
                <p className="todo-item__text">learning English</p>
                <button className="todo-item__delete">Delete</button>
                <button className="todo-item__edit">Edit</button>
            </li>
        </ul>
    );
};

export default TodoData;
