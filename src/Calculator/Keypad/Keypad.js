import React from 'react';
import KeypadRow from './KeypadRow/KeypadRow';
import AmazingNumberButton from '../AmazingNumberButton/AmazingNumberButton';
import GreatOperationButton from '../GreatOperationButton/GreatOperationButton';
import MagnificentEqualButton from '../MagnificientEqualButton/MagnificientEqualButton';

const keypad = (props) => (
    <section className="keypad">

            <KeypadRow>
                <GreatOperationButton type="primary" onButtonPress={props.onButtonPress}>C</GreatOperationButton>
                <GreatOperationButton type="primary" onButtonPress={props.onButtonPress}>DEL</GreatOperationButton>
                <GreatOperationButton type="operator" onButtonPress={props.onButtonPress}>%</GreatOperationButton>
                <GreatOperationButton type="operator" onButtonPress={props.onButtonPress}>/</GreatOperationButton>
            </KeypadRow>

            <KeypadRow>
                <AmazingNumberButton onButtonPress={props.onButtonPress}>9</AmazingNumberButton>
                <AmazingNumberButton onButtonPress={props.onButtonPress}>8</AmazingNumberButton>
                <AmazingNumberButton onButtonPress={props.onButtonPress}>7</AmazingNumberButton>
                <GreatOperationButton type="operator" onButtonPress={props.onButtonPress}>*</GreatOperationButton>
            </KeypadRow>

            <KeypadRow>
                <AmazingNumberButton onButtonPress={props.onButtonPress}>6</AmazingNumberButton>
                <AmazingNumberButton onButtonPress={props.onButtonPress}>5</AmazingNumberButton>
                <AmazingNumberButton onButtonPress={props.onButtonPress}>4</AmazingNumberButton>
                <GreatOperationButton type="operator" onButtonPress={props.onButtonPress}>-</GreatOperationButton>
            </KeypadRow>

            <KeypadRow>
                <AmazingNumberButton onButtonPress={props.onButtonPress}>3</AmazingNumberButton>
                <AmazingNumberButton onButtonPress={props.onButtonPress}>2</AmazingNumberButton>
                <AmazingNumberButton onButtonPress={props.onButtonPress}>1</AmazingNumberButton>
                <GreatOperationButton type="operator" onButtonPress={props.onButtonPress}>+</GreatOperationButton>
            </KeypadRow>

            <KeypadRow>
                <AmazingNumberButton onButtonPress={props.onButtonPress}>0</AmazingNumberButton>
                <AmazingNumberButton onButtonPress={props.onButtonPress}>.</AmazingNumberButton>
                <MagnificentEqualButton onButtonPress={props.onButtonPress}>=</MagnificentEqualButton>
            </KeypadRow>

    </section>
);
export default keypad;