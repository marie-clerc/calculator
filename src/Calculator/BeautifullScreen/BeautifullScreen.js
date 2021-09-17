import React from 'react';
import ResultScreen from './ResultScreen/ResultScreen';
import ComputationScreen from './ComputationScreen/ComputationScreen';
const beautifullscreen = (props) => (
    <section className="beautifullscreen">
        <ResultScreen>{props.result}</ResultScreen>
        <ComputationScreen>{props.equation}</ComputationScreen>
    </section>
);
export default beautifullscreen;