import UserForm from "../component/user/user.form";
import UserTable from "../component/user/user.table";
import "./user.css";

const UsersPage = () => {
    return (
        <div className="user">
            <UserForm />
            <UserTable />
        </div>
    );
};

export default UsersPage;
