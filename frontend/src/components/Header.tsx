import styled from 'styled-components';

const Header = () => {
	return (
		<Container>
			<b>WASAKBASAK</b>
			<b>user</b>
		</Container>
	);
};
export default Header;

const Container = styled.div`
	font-size: 20px;
	font-weight: 700;
  height: 56px;
  width: 100vw;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;