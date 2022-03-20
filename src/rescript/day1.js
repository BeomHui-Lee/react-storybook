import React, {useState} from 'react';
import {NewButton} from "../stories/NewButton";
import day1txt from "../aoc2020/day1.txt";

const Day1Q = () => {
    const [question, setQuestion] = useState("");
    const [qArray, setQArray] = useState([]);
    const [answer, setAnswer] = useState(0);

    const handleOnClick = () => {
        fetch(day1txt)
            .then(r => r.text())
            .then(text => {
                setQuestion(text);
                let tempArray = [];
                tempArray = text.split("\n");
                setQArray(tempArray);
            });
    }

    const handleOnClick2 = () => {
        for(let i = 0; i < qArray.length; i++){
            for(let j = 0; j< qArray.length; j++) {
                if(Number(qArray[i]) + Number(qArray[j]) === 2020){
                    setAnswer(Number(qArray[i]) * Number(qArray[j]));
                    return;
                }
            }
        }
    }

    const handleOnClick3 = () => {
        for(let i = 0; i < qArray.length; i++){
            for(let j = 0; j< qArray.length; j++) {
                for (let k = 0; k < qArray.length; k++) {
                    if (Number(qArray[i]) + Number(qArray[j]) + Number(qArray[k]) === 2020) {
                        setAnswer(Number(qArray[i]) * Number(qArray[j]) * Number(qArray[k]));
                        return;
                    }
                }
            }
        }
    }

    return (
        <div>
            <div style={{display: "block"}}>
                <NewButton style={{display: "inline-block", margin:"10px"}} label={"Day1 문제보기"} onClick={() => { handleOnClick() }}/>
                <NewButton primary={true} style={{display: "inline-block", margin:"10px"}} label={"Day1 문제풀기 (파트1)"} onClick={() => { handleOnClick2() }}/>
                <NewButton primary={true} style={{display: "inline-block", margin:"10px"}} label={"Day1 문제풀기 (파트2)"} onClick={() => { handleOnClick3() }}/>
            </div>
            <textarea style={{height: "700px", width: "260px"}} readOnly={true} value={question} />
            <div>
                답은
                <input
                    type={"text"}
                    readOnly={true}
                    style={{display: "inline-block",  textAlign: "center", width: "200px", margin: "10px"}}
                    value={answer}/>
                입니다.
            </div>
        </div>)
}

export default Day1Q;
