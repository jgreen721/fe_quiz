import { useState } from 'react'
import {MenuRow} from "./components"
import {Quiz,TitleScreen} from "./views"
import {accessibilityIcon, cssIcon,jsIcon,htmlIcon} from "./const"
import './App.css'

function App() {
  const [appTheme,setAppTheme] = useState("light")
  const [category,setCategory] = useState(null)
  const categories = [
    {id:1,icon:htmlIcon,name:"HTML"},
    {id:2,icon:cssIcon,name:"CSS"},
    {id:3,icon:jsIcon,name:"JavaScript"},
    {id:4,icon:accessibilityIcon,name:"Accessibility"},
  ]
  const [quizItems,setQuizItems] = useState([]);



  const selectCategory=async(category)=>{

    let response = await fetch('data.json');
    let data = await response.json();
    let questions = data.quizzes.find(d=>d.title == category.name)
      console.log(questions)
     setQuizItems(questions.questions);
     setCategory(category);
  }

  const handleRestart = ()=>{
    setQuizItems([])
    setCategory(null);
  }

  return (
    <div data-theme={appTheme} className="app">
      <MenuRow category={category} appTheme={appTheme} setAppTheme={setAppTheme}/>
      {category ? <Quiz handleRestart={handleRestart} quizItems={quizItems} category={category}/> : <TitleScreen selectCategory={selectCategory} categories={categories}/>}
    </div>
  )
}

export default App
