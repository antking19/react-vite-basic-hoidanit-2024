import Header from "./layout/header";
import Footer from "./layout/footer";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <>
            <Header />

            <Outlet />
            <Footer />
        </>
    );
};

export default App;
