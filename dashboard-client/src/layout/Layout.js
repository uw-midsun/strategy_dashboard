import { Outlet } from "react-router-dom"

import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <div>
            <Sidebar />
            <div className="wrapper d-flex flex-column">
                <div className="body flex-grow-1 px-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
