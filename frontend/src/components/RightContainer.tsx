import styled from 'styled-components';
import RankingWrapper from './Ranking';
import User from './User';

const RightContainer = () => {
	return (
		<RightList>
			<User />
			<RankingWrapper />
		</RightList>
	);
};
export default RightContainer;

const RightList = styled.div`
	width: 405px;
	margin: 0 auto;
`;
