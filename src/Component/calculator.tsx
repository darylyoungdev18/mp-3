import{CalculatorSection, NumEntrySection, BtnCmd, CalcButton, Result} from "./calculator-style.tsx";
import {useState} from "react";
export default function Calculator() {
    const [num1, setNum1] =useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");

    const checkInput = () => {
        if (num1 == "" || num2 == "") {
            alert("Please enter number");
            return false;
        }
        return true;
    };

    const clearInput = () => {
        setNum1("");
        setNum2("");
        setResult("");
    };

    const handleAddition = (e) => {
        e.preventDefault();
        if (!checkInput()) return;

        const firstNum = parseFloat(num1);
        const secondNum = parseFloat(num2);

        if (isNaN(firstNum) || isNaN(secondNum)) {
            alert("Invalid input. Please enter valid numbers.");
            return;
        }

        setResult(firstNum + secondNum);
    }

    const handleSubtraction = (e) => {
        e.preventDefault();
        if (!checkInput()) return;

        const firstNum = parseFloat(num1);
        const secondNum = parseFloat(num2);

        if (isNaN(firstNum) || isNaN(secondNum)) {
            alert("Invalid input. Please enter valid numbers.");
            return;
        }

        setResult(firstNum - secondNum);
    };


    const handleMultiplication = (e) => {
        e.preventDefault();
        if (!checkInput()) return;

        const firstNum = parseFloat(num1);
        const secondNum = parseFloat(num2);

        if (isNaN(firstNum) || isNaN(secondNum)) {
            alert("Invalid input. Please enter valid numbers.");
            return;
        }

        setResult(firstNum * secondNum);
    };

    const handleDivision = (e) => {
        e.preventDefault();
        if (!checkInput()) return;

        const firstNum = parseFloat(num1);
        const secondNum = parseFloat(num2);

        if (isNaN(firstNum) || isNaN(secondNum)) {
            alert("Invalid input. Please enter valid numbers.");
            return;
        }

        setResult(firstNum / secondNum);
    };

    const handleExponential = (e) => {
        e.preventDefault();
        if (!checkInput()) return;

        const firstNum = parseFloat(num1);
        const secondNum = parseFloat(num2);

        if (isNaN(firstNum) || isNaN(secondNum)) {
            alert("Invalid input. Please enter valid numbers.");
            return;
        }

        let resultNumber = firstNum ;
        for (let i = 0; i < secondNum; i++) {
            resultNumber *= parseFloat(num1);
        }
        setResult(resultNumber);
    };


    return (
        <CalculatorSection>
            <h3>Quick Calculator Project</h3>
            <form onSubmit={(e) => e.preventDefault()}>
                <NumEntrySection>
                    <div>
                        <label>Enter a number</label>
                        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
                    </div>
                    <div>
                        <label>Enter a number</label>
                        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
                    </div>
                </NumEntrySection>

                <BtnCmd>
                    <CalcButton onClick={handleAddition}>Add</CalcButton>
                    <CalcButton onClick={handleSubtraction}>Subtract</CalcButton>
                    <CalcButton onClick={handleMultiplication}>Multiply</CalcButton>
                    <CalcButton onClick={handleDivision}>Divide</CalcButton>
                    <CalcButton onClick={handleExponential}>Exponential</CalcButton>
                    <CalcButton onClick={clearInput}>Clear</CalcButton>
                </BtnCmd>
            </form>

            <Result>
                <p>Result:</p>
                <p id="result">{result}</p>
            </Result>
        </CalculatorSection>
    );
}
