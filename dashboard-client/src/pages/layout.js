import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <header>
                <h1>Dashboard</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/page1">Page 1</Link>
                    </li>
                    <li>
                        <Link to="/page2]">Page 2</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>

            <hr />
            <Outlet />
        </div>
    );
}

export default Layout;
