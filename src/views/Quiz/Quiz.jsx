import React, {useState} from 'react'
import AnswerItem from "./AnswerItem.jsx"
import { Complete } from '../index.js'
import "./Quiz.css"

const Quiz = ({quizItems}) => {
  const [counter,setCounter] = useState(7)
  const [quizItemOptions,setQuizItemOptions] = useState(()=>quizItems[counter].options.map((option,idx)=>({id:idx+1,optionItem:option,isHighlighted:false,isCorrect:null})))
  const [hasSelected,setHasSelected] = useState(false);
  const [answered, setAnswered] = useState(false);
  console.log("Quiz",quizItemOptions)


  const handleSelectItem=(answer)=>{
    console.log('answer',answer);
    if(!hasSelected)setHasSelected(true);
    setQuizItemOptions((quizItemOptions)=>quizItemOptions.map(item=>item.optionItem == answer.optionItem ? {...item,isHighlighted:true} : {...item,isHighlighted:false}))
  }


  const submitAnswer = ()=>{
    let answer = quizItemOptions.filter(item=>item.isHighlighted)[0]
    console.log(answer)
    // setQuizItemOptions((quizItemOptions)=>quizItemOptions.map(item=> ({...item,isHighlighted:false})));

    if(answer.optionItem == quizItems[counter].answer){
      console.log("Correct!!")
      setQuizItemOptions((quizItemOptions)=>quizItemOptions.map(item=>item.optionItem == answer.optionItem ? {...item,isHighlighted:false,isCorrect:true} : {...item,isHighlighted:false}))

    }
    else{
      console.log("WRONG");
      setQuizItemOptions((quizItemOptions)=>quizItemOptions.map(item=>item.optionItem == answer.optionItem ? {...item,isHighlighted:false,isCorrect:false} : {...item,isHighlighted:false}))

    }
    setAnswered(true)
    // if(counter < 10){
    // setCounter((counter)=>counter = counter+1);
    // setQuizItemOptions(()=>quizItems[counter+1].options.map((option,idx)=>({id:idx+1,optionItem:option,isHighlighted:false})))
    // }

    

  }


  function nextQuestion(){
    setAnswered(false);
    setHasSelected(false);
         setCounter((counter)=>counter = counter+1);
     setQuizItemOptions(()=>quizItems[counter+1].options.map((option,idx)=>({id:idx+1,optionItem:option,isHighlighted:false})))
  }


  return (quizItems[counter]?.question ? counter < 9 ?  (
    <div className="view-container quiz-screen-parent">
      {/* <!-- mb-6 offsets the column height to end at quiz questions bottom --> */}
      <div className="quiz-column mb-6">
        <div>
          <h4 className="italic thin mb-3">Question {counter+1} of {quizItems.length}</h4>
         <h3>{quizItems[counter]?.question}</h3> 
         </div>
         <div className="progress-bar-parent">
           <div className="progress-bar">
             <div style={{width:`${counter/10 * 100}%`}} className="progress"></div>
           </div>
          </div>  
      </div>
      <div className="quiz-column">
        <ul className="question-items">
          {quizItemOptions.map((optionItem,idx)=>(
            // <li className="selection-item answer-option-item">
            //   <button className="answer-btn"><h5>{idx == 0 ? "A" : idx == 1 ? "B" : idx == 2 ? "C" : "D"}</h5> </button>
            //   <h5>{optionItem}</h5>
            // </li>
            <AnswerItem handleSelectItem={handleSelectItem} idx={idx} key={optionItem.id} optionItem={optionItem} answered={answered} correct={quizItems[counter].answer}/>
          ))}
        </ul>
        <button onClick={()=>{
          if(!answered)submitAnswer()
        else nextQuestion()}} className={hasSelected ?  "btn primary-btn" : "btn primary-btn disabled"}>{answered ? "Next Question" : hasSelected ? "Submit Answer" : "Select Answer"}</button>
      </div>
    </div>
  ) : <Complete correct={8}/> : "Loading..."
  )
}

export default Quiz