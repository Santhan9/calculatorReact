import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let title = 'calculator app'
  const [input, setInput] = useState('')

const one = ()=>{
  console.log('one')
  setInput(input+'1')
}
  
  return (
    <div className='main'>
      <h1>{title}</h1>
      <div className='cal-box'>
        <textarea id='result' value={input} readOnly></textarea>
        <div className='control-area'>
          <ul className='numbers'>
            <li><button onClick={one}>1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
            <li><button>4</button></li>
            <li><button>5</button></li>
            <li><button>6</button></li>
            <li><button>7</button></li>
            <li><button>8</button></li>
            <li><button>9</button></li>
            </ul>
            <ul className='operators'>
            <li><button>Add +</button></li>
            <li><button>sub -</button></li>
            <li><button>mul *</button></li>
            <li><button>div %</button></li>
            <li><button>result</button></li>
          </ul>

        </div>

      </div>
    </div>
  );
}

export default App;
