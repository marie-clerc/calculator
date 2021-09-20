import React from 'react';
import BeautifullScreen from './BeautifullScreen/BeautifullScreen';
import Keypad from './Keypad/Keypad';
import ItSOverNineThousand from "../ItSOverNineThousand/ItSOverNineThousand";



class Calculator extends React.Component {
    state = {
        equation: '',
        result: 0
    }

    onButtonPress = event => {
        let equation = this.state.equation;
        const pressedButton = event.target.innerHTML;

        const ops = ['/', '*', '+', '-', '.', '%'];

        if (pressedButton === 'C') return this.clear();
        else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') equation += pressedButton; //affiche les chiffres à la suite
        else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) equation += ' ' + pressedButton + ' '; // met des espaces entre les opérations et les chiffres
        else if (ops.includes(pressedButton) && ops.includes(equation.slice(-1))) equation += ''; // n'affiche pas 2 opérateurs à la suite, CA MARCHE PAS
        else if (pressedButton === '=') {
            try {
                const evalResult = eval(equation); //resultat
                const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2); //2 chiffres après la virgule
                this.setState({result});
                equation = equation.trim();
                if (result > 9000){
                    return (
                        <div className="Nine">
                            <ItSOverNineThousand text="It's over 9000 !!!" />
                        </div>
                    );
                }
            } catch (error) {
                alert('Equation Invalide');
            }
        }
        else { //button DEL
            equation = equation.trim();
            equation = equation.substr(0, equation.length - 1);
        }

        this.setState({equation: equation});
    }

    clear() {
        this.setState({equation: '', result: 0});
    }

    render() {
        return (
            <main className="calculator">
                <BeautifullScreen equation={this.state.equation} result={this.state.result} />
                <Keypad onButtonPress={this.onButtonPress} />
            </main>
        );
    }
}


export default Calculator;