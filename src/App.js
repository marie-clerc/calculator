import React from 'react';
import './styles/style.css';
import Calculator from './Calculator/Calculator';
import TheTitle from "./TheTitle";

const app = () => (
    <div className="app">
        <TheTitle /> &nbsp;
        <Calculator />
    </div>
);

export default app;