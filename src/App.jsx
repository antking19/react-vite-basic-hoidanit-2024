import Footer from "./layout/footer";
import Header from "./layout/header";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
