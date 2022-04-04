import {useState} from "react";
import Output from "./output";

const ThirdTask = () => {

    const [userInputText, setUserInputText] = useState("");
    const [stockData, setStockData] = useState([]);

    const getStockInformation = (dateInput) => {
        fetch('https://jsonmock.hackerrank.com/api/stocks?date=' + dateInput)
            .then(data => data.json())
            .then(data => {
                setStockData(data.data);
            })
    }

    const inputTextChangeHandler = (event) => {
        setUserInputText(event.target.value);
    };

    const submitFormHandler = (event) => {
        event.preventDefault();
        getStockInformation(userInputText.trim());
    }


    return (
        <div>
            <h3>Third Task:</h3>

            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="inputText">Date</label>
                    <input type="text" id="inputText" value={userInputText} onChange={inputTextChangeHandler}/>
                </div>
                <button type="submit">Fetch Stock Information</button>
            </form>
            {stockData.length > 0 ? <Output open={stockData[0].open} high={stockData[0].high} low={stockData[0].low}
                                            close={stockData[0].close}/> : ''}
        </div>
    );
}

export default ThirdTask;