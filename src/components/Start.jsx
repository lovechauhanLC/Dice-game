import styled from 'styled-components';

const Start = ({toggle}) => {
  return (
    <Container>
    <div>
    <img src='/images/dices.png' alt='dices'/>
    </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle} >Play Game</Button>
      </div>
    </Container>
  )
}

export default Start;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content{
        padding:0px 30px;
        display: flex;
        flex-direction: column;
        align-items: end;

        h1{
            font-size:96px;
            white-space: nowrap;
        }
    }
`;
const Button = styled.button`
    color: white;
    background: black;
    border: none;
    border-radius: 5px;
    width: 220px;
    height: 44px;
    padding:10px 18px;
    font-size: 16px;
    transition: 0.5s background ease-in;
    cursor: pointer;

    &:hover{
        background: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
`;