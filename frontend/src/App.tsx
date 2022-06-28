import Button from "@mui/material/Button";
import styled from "styled-components"
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
	return (
		<DashBoard className='App'>
			<Header />
			<Werapper>
				<RightContainer />
				<Main />
        <LeftContainer />
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
