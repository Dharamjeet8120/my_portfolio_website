import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Add Bootstrap CSS here
import 'bootstrap/dist/css/bootstrap.min.css'; 
// (Optional) Add Bootstrap JS bundle if using dropdowns or modals
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/my_portfolio_website">
  <App />
</BrowserRouter>
);