import React from 'react';
import ReactDOM from 'react-dom/client';

const container1 = document.getElementById('header1');
const container2 = document.getElementById('header2');

const root1 = ReactDOM.createRoot(container1);
const root2 = ReactDOM.createRoot(container2);

root1.render(<h1>Test app_1</h1>);
root2.render(<h1>Test app_2</h1>);
