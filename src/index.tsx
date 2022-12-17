import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalProvider from '../src/context/MovieState';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <GlobalProvider>
        <App />
    </GlobalProvider>,
);

reportWebVitals();
