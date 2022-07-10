import styled from "styled-components";
import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";
import Main from "./components/Main";
import RightContainer from "./components/RightContainer";

const App = () => {
    return (
        <DashBoard className='App'>
            <Header/>
            <Werapper>
                <LeftContainer/>
                <Main/>
                <RightContainer/>
            </Werapper>
        </DashBoard>
    );
};

export default App;
<style lang='scss'></style>;
const DashBoard = styled.div`
	text-align: center;
`;
const Werapper = styled.div`
	margin: 0 auto;
	width: 1680px;
  padding: 22px 0 40px 0;
  display: flex;
  justify-contant: center
`;
