import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const [question, setQuestion] = useState("");
const[answer,setAnswer]=useState("");
  async function generateAnswer(){
    setAnswer("Loading..")
const response=await  axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAG0QK-ika0qGI4kI5Ch5Zi1LoBGL6vEr8",
      method: 'post',
      data:{"contents":[{"parts":[{"text":question}]}]}
    });
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }

  return (
    <>
     <h1>Demo App for odoo combat</h1>
     <textarea value={question} onChange={(e)=>setQuestion(e.target.value)} cols="30" rows="10"></textarea>
     <button onClick={generateAnswer}>Generate answer</button>
     <pre>{answer}</pre>
    </>
  )
}

export default App
