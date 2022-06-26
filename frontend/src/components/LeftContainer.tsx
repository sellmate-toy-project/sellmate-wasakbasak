import styled from 'styled-components';
import RecentOrder from './RecentOrder';
import User from './User';

const LeftContainer = () => {
	return (
		<LeftList>
			<User />
			<RecentOrder />
		</LeftList>
	);
};
export default LeftContainer;

const LeftList = styled.div`
	width: 405px;
	margin: 0 auto;
`;
