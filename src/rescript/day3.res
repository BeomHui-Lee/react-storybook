module Day3Q = {
  let question = () => {
    let input = Node.Fs.readFileAsUtf8Sync("aoc2020/day3.txt")
    input->Js.log
  }
}
@genType @react.component
let default = () => {
  //  let (question, setQuestion) = React.useState(_ => "")
  //  let (answer, setAnswer) = React.useState(_ => 0)

  //  let handleOnClick = () => {
  //    Fetch.fetch(day3txt)
  //                   |> then_(r => r.text())
  //  }

  <>
    <div>
      {"답은"->React.string}
      {
        //      <input type_={"text"} readOnly={true} value={Belt.Int.toString(answer)} />
        "개 입니다."->React.string
      }
    </div>
  </>
}
