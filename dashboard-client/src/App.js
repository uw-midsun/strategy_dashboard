import './scss/style.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './components/Home';
import Page1 from'./components/Page1';
import Page2 from './components/Page2';
import Graph from './components/Graph';
import NoPage from './components/NoPage';

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
