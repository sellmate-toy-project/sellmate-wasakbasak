import styled from 'styled-components';
import AllSnack from './AllSnack';
import BestReview from './BestReview';
import Ranking from './Ranking';

const Main = () => {
	return (
		<div>
			<MainContainer>
        <Ranking />
        <BestReview />
        <AllSnack />
      </MainContainer>
		</div>
	);
};
export default Main;

const MainContainer = styled.div`
	width: 830PX;
	height: 100vh;
	margin: 0 20px;
`;
