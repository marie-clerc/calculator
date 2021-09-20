import React from 'react';
import './styles/style.css';
import Calculator from './Calculator/Calculator';
import TheTitle from "./TheTitle";
import ItSOverNineThousand from "./ItSOverNineThousand/ItSOverNineThousand";

const app = () => (
    <div className="app">
        <TheTitle /> &nbsp;
        <ItSOverNineThousand text=""/> &nbsp;
        <Calculator />
    </div>
);

export default app;