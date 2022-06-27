import styled from 'styled-components';
import Ranking from './Ranking';

const Main = () => {
	return (
		<div>
			<MainContainer><Ranking /></MainContainer>
		</div>
	);
};
export default Main;

const MainContainer = styled.div`
	width: 830PX;
	height: 100vh;
	margin: 0 20px;
`;
