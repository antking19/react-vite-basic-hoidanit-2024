const TodoNew = () => {
    return (
        <div className="todo__input-wrap">
            <input
                type="text"
                className="todo__input"
                placeholder="Enter your task"
            />
            <button className="todo__cta-btn">Add</button>
        </div>
    );
};

export default TodoNew;
