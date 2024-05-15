import styled from "styled-components"
import NumberSelect from "./NumberSelect"
import TotalScore from "./TotalScore"

const MainGame = () => {
    return (
        <Main>
            <div className="top-section">
                <TotalScore />
                <NumberSelect />
            </div>
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
`;