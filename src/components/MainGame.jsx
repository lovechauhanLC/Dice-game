import styled from "styled-components"
import NumberSelect from "./NumberSelect"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"

import { useState } from 'react';
import { Button, OutLineButton } from "../styled/button";
import Rules from "./Rules";

const MainGame = () => {
    const [score,setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice,setCurrentDice] = useState(1);
    const [error,setError] = useState("");
    const [showRules,setShowRules] = useState(false);
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random()*(max-min)+min);
    };

    const rollDice = () =>{
        if(!selectedNumber){
            setError("You have not selected any number")
            return
        } ;
        
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber);
        if(selectedNumber === randomNumber){
            setScore((prev)=> prev+randomNumber);
        }
        else{
            setScore((prev)=>prev-1);
        }

        setSelectedNumber(undefined);
    }
    const resetScore = () =>{
        setScore(0);
    }
    return (
        <Main>
            <div className="top-section">
                <TotalScore score={score}/>
                <NumberSelect selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError} />
            </div>
            <RollDice currentDice={currentDice} rollDice={rollDice}/>
            <div className="btn">
                <OutLineButton onClick={resetScore}>Reset Score</OutLineButton>
                <Button onClick={()=>setShowRules(prev => !prev)} >{showRules?"Hide ": "Show "}Show Rules</Button>
            </div>
            {showRules && <Rules/>}
        </Main>
    )
}

export default MainGame

const Main = styled.div`
.top-section{
    display: flex;
    justify-content: space-between;
    margin: 70px 140px;
}

.btn{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size:20px;
}
`;