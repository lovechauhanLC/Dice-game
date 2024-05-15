import { useState } from 'react';
import styled from 'styled-components';

const NumberSelect = () => {
    const boxNumber = [1, 2, 3, 4, 5, 6];
    const [selectedNumber, setSelectedNumber] = useState();
    console.log(selectedNumber);
    return (
        <NumberSelector>
                <div className='boxes'>
                    {
                        boxNumber.map((value, i) => (
                            <Box
                                isSelected={value === selectedNumber}
                                key={i}
                                onClick={() => setSelectedNumber(value)}
                            >
                                {value}
                            </Box>
                        ))

                    }

                    { /*
                        <Box>1</Box>
                        <Box>2</Box>
                        <Box>3</Box>
                        <Box>4</Box>
                        <Box>5</Box>
                        <Box>6</Box>
                    */ }
                </div>
                <p>Select Number</p>
            
        </NumberSelector>
    )
}

export default NumberSelect;

const NumberSelector = styled.div`
    display: flex;
    flex-direction: column;
    text-align: end;
    gap: 20px;
    .boxes{
        display: flex;
        gap:20px;
    }
    p{
        font-size:24px;
        font-weight: 700;
    }
`;

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 2px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color:${(props) => (props.isSelected ? "black" : "white")} ;
    color:${(props) => (props.isSelected ? "white" : "black")} ;
`;
