import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import logo from '../logo.png';
const Header = () => {
	return (
		<Container>
			<Avatar sx={{ width: 156, height: 18 }} src={logo} variant="square">
			</Avatar>
			<Stack direction="row" spacing={2}>
				<Avatar variant="square">
				</Avatar>
				<Avatar variant="square">
				</Avatar>
				<Typography gutterBottom variant="body2" component="div">
					floor
				</Typography>
			</Stack>
		</Container>
	);
};
export default Header;

const Container = styled.div`
	font-size: 20px;
	font-weight: 700;
  height: 56px;
  width: 1680px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;