import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/layout';
import Home from './pages/home';
import Page1 from'./pages/page1';
import Page2 from './pages/page2';
import Graph from './pages/graph';
import NoPage from './pages/nopage';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='page1' element={<Page1 />} />
                <Route path='page2' element={<Page2 />} />
                <Route path='graph' element={<Graph />} />
                {/* Add new routes here */}
                <Route path='*' element={<NoPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
