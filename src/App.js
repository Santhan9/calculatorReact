import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let title = 'calculator app'
  const [input, setInput] = useState('')
  const num= [1,2,3,4,5,6,7,8,9]
  const oper = ['+','-','*','/']

const handleNumber = (e)=>{
  console.log(e.target.innerText)
  
  const val = e.target.innerText
  setInput(input+val)
}

const handleClear = ()=>{
  setInput('')
}

const handleResult = ()=>{
  const vals = input.split(/[^0-9]+/)
  console.log(vals)
  if (input.includes('+')) {
    const res = Number(vals[0]) + Number(vals[1])
    console.log('result '+res)
    setInput(res);
    
  } else if (input.includes('-')) {
    
    setInput(Number(vals[0]) - Number(vals[1]));
  }else if(input.includes('*')){
    setInput(Number(vals[0]) * Number(vals[1]))
  }else if(input.includes('/')){
    setInput(Number(vals[0]) / Number(vals[1]))
  }
  
}
  
  return (
    <div className='main'>
      <h1>{title}</h1>
      <div className='cal-box'>
        <textarea id='result' value={input} readOnly></textarea>
        <div className='control-area'>
          <ul className='numbers'>
            {
              num.map((e,index)=>(
<li><button id={index} onClick={handleNumber}>{e}</button></li>
              ))
            }
            
            {/* <li><button>2</button></li>
            <li><button>3</button></li>
            <li><button>4</button></li>
            <li><button>5</button></li>
            <li><button>6</button></li>
            <li><button>7</button></li>
            <li><button>8</button></li>
            <li><button>9</button></li> */}
            </ul>
            <ul className='operators'>
            {
              oper.map((e,index)=>(
                <li><button id={index} onClick={handleNumber}>{e}</button></li>
              ))
            }
            <li><button onClick={handleResult}>result</button></li>
            <li><button onClick={handleClear}>clear</button></li>
          </ul>

        </div>

      </div>
    </div>
  );
}

export default App;
