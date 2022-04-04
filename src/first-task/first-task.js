import {useState} from "react";

const FirstTask = () => {

    const [userInputText, setUserInputText] = useState("");
    const [outputText, setOutputText] = useState("");

    const submitFormHandler = (event) => {
        event.preventDefault();
        let inputArray = userInputText.split("");
        let output = "";
        for (let i = 0; i < inputArray.length; i++) {
            const nextIndex = i + 1;
            output += inputArray[i] + "-" + nextIndex;
            if (i !== inputArray.length - 1) {
                output += ",";
            }
        }
        setOutputText(output)
    }

    const inputTextChangeHandler = (event) => {
        setUserInputText(event.target.value);
    };

    return (
        <>
            <h3>
                First Task:
            </h3>
            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="inputText">Username</label>
                    <input type="text" id="inputText" value={userInputText} onChange={inputTextChangeHandler}></input>
                </div>
                <button type="submit">Display Output</button>

                <div>Output:</div>
                <div>{outputText}</div>
            </form>
        </>
    );

}

export default FirstTask;