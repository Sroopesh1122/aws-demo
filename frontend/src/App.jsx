import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [val,setVal] = useState(null);

  const [res,setRes] = useState("Default");

  const request = async ()=>{
    const response = await axios.get("http://localhost:8080/api/hello",{
      params:{
        name : val
      }
    })
    
    if(response.data)
    {
      setRes(response.data)
    }

  }

  const handleCLick =()=>{
   
     request();


  }

  return (
    <div>
       <input type="text" name="" value={val} onChange={(e)=>setVal(e.target.value)} id="" />

       <button onClick={handleCLick}>Click</button>

       {
        res && <p>{res}</p>
       }
    </div>
  )
}

export default App
