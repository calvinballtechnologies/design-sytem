import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import {
  Overview,
  Colors,
  Typography,
  Spacing,
  Buttons,
  Forms,
  Borders,
  Toggles,
  Cards,
  Components,
  Utilities
} from './pages';
import './styles/index.css';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />}>
          <Route index element={<Overview />} />
          <Route path="colors" element={<Colors />} />
          <Route path="typography" element={<Typography />} />
          <Route path="spacing" element={<Spacing />} />
          <Route path="borders" element={<Borders />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="forms" element={<Forms />} />
          <Route path="toggles" element={<Toggles />} />
          <Route path="cards" element={<Cards />} />
          <Route path="components" element={<Components />} />
          <Route path="utilities" element={<Utilities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;