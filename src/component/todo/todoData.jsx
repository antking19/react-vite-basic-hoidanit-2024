const TodoData = (props) => {
    const { todoList, deleteTodo } = props;

    const handleDelete = (id) => {
        deleteTodo(id);
    };

    return (
        <ul className="todo__list">
            {todoList.map((item, index) => {
                return (
                    <li className="todo-item" key={item.id}>
                        <span className="todo-item__text">{item.name}</span>
                        <button
                            className="todo-item__delete"
                            onClick={() => handleDelete(item.id)}
                        >
                            Delete
                        </button>
                    </li>
                );
            })}
            {/* <li className="todo-item">
                <span className="todo-item__text">Watching Youtube</span>
                <button className="todo-item__delete">Delete</button>
            </li>

            <li className="todo-item">
                <span className="todo-item__text">Learning English</span>
                <button className="todo-item__delete">Delete</button>
            </li>

            <li className="todo-item">
                <span className="todo-item__text">Playing Piano</span>
                <button className="todo-item__delete">Delete</button>
            </li>

            <li className="todo-item">{JSON.stringify(todoList)}</li> */}
        </ul>
    );
};

export default TodoData;
