import React from 'react';
import KeypadRow from './KeypadRow/KeypadRow';
import AmazingNumberButton from '../AmazingNumberButton/AmazingNumberButton';
import GreatOperationButton from '../GreatOperationButton/GreatOperationButton';
import MagnificentEqualButton from '../MagnificientEqualButton/MagnificientEqualButton';
const keypad = () => (
    <section className="keypad">

            <KeypadRow>
                <GreatOperationButton>C</GreatOperationButton>
                <GreatOperationButton>&larr;</GreatOperationButton>
                <AmazingNumberButton>%</AmazingNumberButton>
                <GreatOperationButton>/</GreatOperationButton>
            </KeypadRow>

            <KeypadRow>
                <AmazingNumberButton>9</AmazingNumberButton>
                <AmazingNumberButton>8</AmazingNumberButton>
                <AmazingNumberButton>7</AmazingNumberButton>
                <GreatOperationButton>*</GreatOperationButton>
            </KeypadRow>

            <KeypadRow>
                <AmazingNumberButton>6</AmazingNumberButton>
                <AmazingNumberButton>5</AmazingNumberButton>
                <AmazingNumberButton>4</AmazingNumberButton>
                <GreatOperationButton>-</GreatOperationButton>
            </KeypadRow>

            <KeypadRow>
                <AmazingNumberButton>3</AmazingNumberButton>
                <AmazingNumberButton>2</AmazingNumberButton>
                <AmazingNumberButton>1</AmazingNumberButton>
                <GreatOperationButton>+</GreatOperationButton>
            </KeypadRow>

            <KeypadRow>
                <AmazingNumberButton>0</AmazingNumberButton>
                <AmazingNumberButton>.</AmazingNumberButton>
                <MagnificentEqualButton>=</MagnificentEqualButton>
            </KeypadRow>

    </section>
);
export default keypad;