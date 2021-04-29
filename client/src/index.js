import React from 'react';
import ReactDOM from 'react-dom';
import './Stylesheets/index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        {/*<Fragment>*/}
            <App />
        {/*</Fragment>*/}
    </React.StrictMode>,
    document.getElementById('root')
);

// reportWebVitals();