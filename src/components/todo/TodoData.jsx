const TodoData = (props) => {
    const { todoList, deleteTodo } = props;

    const handleDeleteClick = (id) => {
        deleteTodo(id);
    };

    return (
        <ul className="todo__list">
            {todoList.map((item, index) => {
                return (
                    <li className="todo-item" key={item.id}>
                        <p className="todo-item__text">{item.name}</p>
                        <button
                            className="todo-item__delete"
                            onClick={() => {
                                handleDeleteClick(item.id);
                            }}
                        >
                            Delete
                        </button>
                        <button className="todo-item__edit">Edit</button>
                    </li>
                );
            })}
            {/* <li className="todo-item">
                <p className="todo-item__text">watching youtube</p>
                <button className="todo-item__delete">Delete</button>
                <button className="todo-item__edit">Edit</button>
            </li>

            <li className="todo-item">
                <p className="todo-item__text">learning English</p>
                <button className="todo-item__delete">Delete</button>
                <button className="todo-item__edit">Edit</button>
            </li> */}

            {/* <li className="todo-item">{JSON.stringify(todoList)}</li> */}
        </ul>
    );
};

export default TodoData;
