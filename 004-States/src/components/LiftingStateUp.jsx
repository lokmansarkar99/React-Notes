// Lifting State Up is a technique in React where you move the state of a component to a higher level in the component hierarchy. This is done to share the state between multiple components. In this example, we have an InputComponent and a DisplayComponent. The InputComponent has an input field where the user can enter some text. The DisplayComponent displays the text entered by the user. The text entered by the user is stored in the state of the InputComponent. We need to lift this state up to the parent component so that the DisplayComponent can access it. Let's see how to do this.

import React, { useState } from 'react'
const LiftingStateUp = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </div>
  );
}

export default LiftingStateUp

const InputComponent = ({inputValue, setInputValue}) => {
  
  return (
    <>
      <input
        type='text'
        value={inputValue}
       onChange={(e) => setInputValue(e.target.value)}
        placeholder='Enter some text'
        style={{padding: '10px', fontSize: '16px' , width: '60%', margin: '10px auto', display: 'block', borderRadius: '10px', border: 'none', outline: 'none'}}
      />
    </>
  )
}

const DisplayComponent = ({inputValue}) => {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>The current input value is: {inputValue}  </h2>
    </div>
  )
}


// Summary: If we need to a child components state to an another child components , We need to lift up the the to the parent component. And parent component will pass the state to the child components as props.

//In the above example we have two child components InputComponent and DisplayComponent. The state inputValue is in the InputComponent. We need to pass this state to the DisplayComponent. So we lift up the state to the parent component LiftingStateUp. The parent component passes the state inputValue to the child components InputComponent and DisplayComponent as props. The InputComponent updates the state inputValue using the setInputValue function. The DisplayComponent displays the state inputValue. This is how we can lift state up in React.