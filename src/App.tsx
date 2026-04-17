import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PageLoader } from './components/PageLoader';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Guestbook } from './pages/Guestbook';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Projects } from './pages/Projects';
import { Terms } from './pages/Terms';
import { Uses } from './pages/Uses';

export default function App() {
  return (
    <>
      <PageLoader />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/guestbook" element={<Guestbook />} />
            <Route path="/uses" element={<Uses />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
