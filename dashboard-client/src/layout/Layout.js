import { Outlet } from "react-router-dom"

import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <div>
            <Sidebar />
            <div className="wrapper d-flex flex-column min-vh-100">
                <div className="content flex-grow-1 p-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
