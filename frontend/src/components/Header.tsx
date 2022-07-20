import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import logo from '../logo.png';
import FormControl from '@mui/material/FormControl';
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: '50px',
		height: '50px',
	},
	select: {
		width: '100px',
		height: '40px',
	},
}));

const Header = () => {
	const classes = useStyles();
	const [floor, setFloor] = React.useState("");

  	const handleChange = (event: SelectChangeEvent) => {
    	setFloor(event.target.value as string);
	};
	return (
		<Container>
			<Avatar sx={{ width: 156, height: 18 }} src={logo} variant="square">
			</Avatar>
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={2}
			>
				<Avatar variant="rounded" className={classes.avatar}>
				</Avatar>
				<Avatar variant="rounded" className={classes.avatar}>
				</Avatar>
				<Avatar variant="rounded" className={classes.avatar}>
				</Avatar>
				<FormControl fullWidth>
					<Select 
						value={floor}
						onChange={handleChange} 
						className={classes.select}
					>
						<MenuItem value={3}>3F</MenuItem>
						<MenuItem value={5}>5F</MenuItem>
						<MenuItem value={11}>11F</MenuItem>
					</Select>
				</FormControl>
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