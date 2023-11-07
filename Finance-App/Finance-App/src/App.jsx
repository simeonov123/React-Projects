import Header from "./component/Header.jsx";
import Results from "./component/Results.jsx";
import UserInput from "./component/UserInput.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(
    {
        initialInvestment: 1000,
        anualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    }
);

const inputIsValid = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue){
  setUserInput(previousUserInput =>{
      return{
          ...previousUserInput,
          [inputIdentifier] : +newValue /*when I add a + sign I convert from string to number */
      };
  });
}

  return (
    <>
      <Header />
      <UserInput  userInput={userInput} onChange ={handleChange}/>
      {!inputIsValid && <p className = "center">Please enter a duration greater than zero.</p>}
      {inputIsValid &&<Results input = {userInput}/>} 
    </>
  )
}

export default App
