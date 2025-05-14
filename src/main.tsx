
import * as React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Добавление шрифтов с поддержкой кириллицы
const fontLinks = document.createElement('link');
fontLinks.rel = 'stylesheet';
fontLinks.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap&subset=cyrillic';
document.head.appendChild(fontLinks);

createRoot(document.getElementById("root")!).render(<App />);
