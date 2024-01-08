import React, {useState} from 'react'
import { correctIcon,errorIcon } from '../../const'

const AnswerItem = ({optionItem,handleSelectItem,answered,idx,correct}) => {
    // const [selected,setSelected] = useState(false)
  return (
    <li onClick={()=>{
        handleSelectItem(optionItem)}}
        // className="selection-item answer-option-item">
           className={optionItem.isCorrect ? "answer-option-item correct" : optionItem.isCorrect == false ? "answer-option-item incorrect" : answered ? "answer-option-item disabled" : optionItem.isHighlighted ? "answer-option-item highlighted" : "answer-option-item"}> 
           <div className="flex align-center">
    <button className={optionItem.isCorrect ? "answer-btn correct-btn" : optionItem.isCorrect == false ? "answer-btn incorrect-btn" : optionItem.isHighlighted ? "answer-btn highlighted-btn" : "answer-btn"}>
         <h5>{idx == 0 ? "A" : idx == 1 ? "B" : idx == 2 ? "C" : "D"}</h5> 
    </button>
    <h5>{optionItem.optionItem}</h5>
    </div>
    {optionItem.isCorrect == false && 
    <div className="float-right">
        <img src={errorIcon} alt="" />
    </div>
}
     {answered && correct == optionItem.optionItem &&
        <div>
            <img src={correctIcon} alt="correct-img" />
        </div>
     
}
  </li>
  )
}

export default AnswerItem