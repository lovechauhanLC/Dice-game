import styled from 'styled-components';
import { Button } from '../styled/button';

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
