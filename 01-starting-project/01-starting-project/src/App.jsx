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


function handleChange(inputIdentifier, newValue){
  setUserInput(previousUserInput =>{
      return{
          ...previousUserInput,
          [inputIdentifier] : newValue
      };
  });
}

  return (
    <>
      <Header />
      <UserInput  userInput={userInput} onChange ={handleChange}/>
      <Results input = {userInput}/>
    </>
  )
}

export default App
