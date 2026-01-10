 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import initGame from './initGame';
import App from './App.jsx'
import ReactUI from './ReactUI.jsx';

createRoot(document.getElementById('ui')).render(
  <StrictMode>
    {/* <App/> */}
    <ReactUI/>
</StrictMode>,
);

initGame();