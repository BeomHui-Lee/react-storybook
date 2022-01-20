import React, {useState} from 'react';
import {NewButton} from "../stories/NewButton";
import day3txt from "../aoc2020/day3.txt";

export const Day3Q = () => {
    const [question, setQuestion] = useState("");
    const [qArray, setQArray] = useState([]);
    const [move, changeMove] = useState({x: 3, y: 1});
    const [num, changeNum] = useState(11);
    const [answer, setAnswer] = useState(0);

    const handleOnClick = () => {
        fetch(day3txt)
            .then(r => r.text())
            .then(text => {
                setQuestion(text);
                // setQArray()
                let tempArray = [];
                text = text.replaceAll("\n", "");
                let lengthCount = text.length;
                for(let i = 0; i < lengthCount; i++){
                    tempArray.push(text.substr(0,num));
                    text = text.substr(num, text.length);
                }
                setQArray(tempArray);
            });
    }

    const handleOnClick2 = () => {
        let tempX = 0; //우측으로 이동하는 값을 체크하는 변수
        let tempArray = [...qArray];
        let totalString = tempArray[0] + "\n";
        let count = 0; // X개수가 몇개인지 카운트
        // console.log(qArray.length);
        for(let i = 1; i <qArray.length; i++){
            if(((i % move.y) === 0)){ //아래쪽으로 몇칸 갈때마다 체크할지
                tempX += move.x;
                tempX = tempX > (num-1) ? tempX - num : tempX;
                let s = tempArray[i];
                if(s[tempX] === "#") {
                    s = s.substring(0,tempX) + "X" + s.substring(tempX+1,num);
                    count++;
                }else{
                    s = s.substring(0,tempX) + "O" + s.substring(tempX+1,num);
                }
                tempArray[i] = s;
            }
            totalString += tempArray[i] + "\n";
        }
        // console.log(tempArray, count);
        setQuestion(totalString);
        setAnswer(count);
    }

    return (
        <div>
            <div style={{display: "block"}}>
                <NewButton style={{display: "inline-block", margin:"10px"}} label={"Day3 문제보기"} onClick={() => { handleOnClick() }}/>
                <NewButton primary={true} style={{display: "inline-block", margin:"10px"}} label={"Day3 문제풀기"} onClick={() => { handleOnClick2() }}/>
            </div>
            <div>
                오른쪽으로
                <input
                    type={"text"}
                    style={{display: "inline-block", textAlign: "center", width: "40px", margin: "10px"}}
                    value={move.x}
                    onChange={
                        (e) => {
                            changeMove({x: Number(e.target.value), y: move.y})
                        }}/>
                칸, 아래쪽으로
                <input
                    type={"text"}
                    style={{display: "inline-block",  textAlign: "center", width: "40px", margin: "10px"}}
                    value={move.y}
                    onChange={
                        (e) => {
                            changeMove({x: move.x, y: Number(e.target.value)})
                        }}/>
                칸씩 이동
            </div>
            <div>
                * 문제에서 한 줄에 몇개의 문자가 표기 되어있나요?
                <input
                    type={"text"}
                    style={{display: "inline-block",  textAlign: "center", width: "40px", margin: "10px"}}
                    value={num}
                    onChange={
                        (e) => {
                            changeNum(Number(e.target.value))
                        }}/>
                개
            </div>
            <textarea style={{height: "700px", width: "260px"}} readOnly={true} value={question} />
            <div>
                답은
                <input
                    type={"text"}
                    readOnly={true}
                    style={{display: "inline-block",  textAlign: "center", width: "40px", margin: "10px"}}
                    value={answer}/>
                개 입니다.
            </div>
        </div>)
}

export default Day3Q;
