import styled from 'styled-components';
import RecentOrder from './RecentOrder';
import User from './User';

const RightContainer = () => {
	return (
		<RightList>
			<User />
			<RecentOrder />
		</RightList>
	);
};
export default RightContainer;

const RightList = styled.div`
	width: 405px;
	margin: 0 auto;
`;
