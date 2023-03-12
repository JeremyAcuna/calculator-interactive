import { evaluate } from 'mathjs';
import { useState } from 'react';
import './App.css';
import Button from './Components/Button.jsx';
import ClearButton from './Components/Clear';
import Input from './Components/Input.jsx';
import FreecodecampLogo from './Images/freecodecamp-logo.png';

function App() {

  const [input, setInput] = useState('');

  const handleInputChange = (val) => {
    setInput(input + val);
  }

  function handleClear(){
    setInput('');
  }
  const Calculate = () => {
    if(input!==''){
    setInput(evaluate(input));
    }
    else{
      alert('Not possible');
    }
  }

  return (
    <div className="App">
      <div className='Freecodecamp-logo-container'>
        <img
        className='Freecodecamp-logo'
        src={FreecodecampLogo}
        alt='Freecodecamp logo' />
      </div>
      <div className='Calculator-container'>

        <Input input={input} />

        <div className='Row'>
          <Button manageClick={handleInputChange}>1</Button>
          <Button manageClick={handleInputChange}>2</Button>
          <Button manageClick={handleInputChange}>3</Button>
          <Button manageClick={handleInputChange}>+</Button>
        </div>
        <div className='Row'>
          <Button manageClick={handleInputChange}>4</Button>
          <Button manageClick={handleInputChange}>5</Button>
          <Button manageClick={handleInputChange}>6</Button>
          <Button manageClick={handleInputChange}>-</Button>
        </div>
        <div className='Row'>
          <Button manageClick={handleInputChange}>7</Button>
          <Button manageClick={handleInputChange}>8</Button>
          <Button manageClick={handleInputChange}>9</Button>
          <Button manageClick={handleInputChange}>*</Button>
        </div>
        <div className='Row'>
          <Button manageClick={Calculate}>=</Button>
          <Button manageClick={handleInputChange}>0</Button>
          <Button manageClick={handleInputChange}>.</Button>
          <Button manageClick={handleInputChange}>/</Button>
        </div>
        <div className='Row'>
          <ClearButton manageClear={handleClear}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
