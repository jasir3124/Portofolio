import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';  // adjust path if needed
import Home from './Pages/Home.jsx';
import Projects from './Pages/Projects.jsx';
import About from './Pages/About.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    {/* 404 fallback */}
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
