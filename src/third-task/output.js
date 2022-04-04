const Output = (props) => {
    return (
        <div>
            <div>Open: {props.open}</div>
            <div>High: {props.high}</div>
            <div>Low: {props.low}</div>
            <div>Close: {props.close}</div>
        </div>
    )
}

export default Output;
