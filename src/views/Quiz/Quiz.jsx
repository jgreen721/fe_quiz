import React, {useState, useRef} from 'react'
import AnswerItem from "./AnswerItem.jsx"
import { Complete } from '../index.js'
import "./Quiz.css"

const Quiz = ({quizItems,category,handleRestart}) => {
  const parentRowRef = useRef();
  const [counter,setCounter] = useState(0)
  const [quizItemOptions,setQuizItemOptions] = useState(()=>quizItems[counter].options.map((option,idx)=>({id:idx+1,optionItem:option,isHighlighted:false,isCorrect:null})))
  const [hasSelected,setHasSelected] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [correct,setCorrect] = useState(0)
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
      setCorrect((correct)=>correct+1)
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


  const nextQuestion=()=>{
    setAnswered(false);
    setHasSelected(false);
     if(counter < 9){
      toggleClassAnimations();
      setQuizItemOptions(()=>quizItems[counter+1].options.map((option,idx)=>({id:idx+1,optionItem:option,isHighlighted:false})))
      setTimeout(()=>{setCounter((counter)=>counter = counter+1)},1000)
     }
     else setCounter(counter+1)

  }

  const toggleClassAnimations=()=>{
    
    parentRowRef.current.classList.remove("slide")
    parentRowRef.current.style.opacity = 0;
    parentRowRef.current.style.transform = `translateX(100vw)`;
    setTimeout(()=>{
      parentRowRef.current.classList.add("slide")
    },250);

  }

  const restartGame=()=>{
    setCorrect(0);
    setCounter(0);
    setAnswered(false);
    setHasSelected(false);
    handleRestart();
  }

  // if(!quizItems[counter]?.question)return "Loading..."
  return (counter < 10 ?  (
    <div ref={parentRowRef} className="parent-row align-start slide">
      <div className="quiz-column content-column">
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
      <div className="quiz-column content-column">
        <ul className="question-items">
          {quizItemOptions.map((optionItem,idx)=>(
            <AnswerItem handleSelectItem={handleSelectItem} idx={idx} key={optionItem.id} optionItem={optionItem} answered={answered} correct={quizItems[counter].answer}/>
          ))}
        </ul>
        <button onClick={()=>{
          if(!answered)submitAnswer()
          else nextQuestion()
        }} 
        className={hasSelected ?  "btn primary-btn" : "btn primary-btn disabled"}>{counter == 9 && answered ? "Get Score" : answered ? "Next Question" : hasSelected ? "Submit Answer" :  "Select Answer"}</button>
      </div>
    </div>
  ) : <Complete category={category} restartGame={restartGame} correct={correct}/>
  )
}

export default Quiz