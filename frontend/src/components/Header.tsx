import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../logo.png';

const useStyles = makeStyles((theme) => ({
	select: {
		width: '100px',
		height: '40px',
	},
}));

const Header = () => {
	const classes = useStyles();
  const localData:string|null = JSON.parse(String(localStorage.getItem('user'))).floor
	const [floor, setFloor] = useState<string>('3');
  useEffect(()=> {
    setFloor(localData ||'');
  }, [])
  const handleChange = (event: SelectChangeEvent) => {
    setFloor(event.target.value as string);
	};
	return (
		<Container style={{backgroundColor: 'white'}}>
			<Avatar sx={{ width: '156px !important', height: '18px !important' }} src={logo} variant="square" />
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={2}
			>
        {/* TODO: 뱃지 변경 필요*/}
				<Avatar variant="rounded" sx={{ width: '32px', height: '32px', borderRadius: '8px' }}>
				</Avatar>
        <Avatar variant="rounded" sx={{ width: '32px', height: '32px', borderRadius: '8px' }}>
				</Avatar>
				<FormControl fullWidth>
					<Select 
						value={floor}
						onChange={handleChange} 
						className={classes.select}
					>
						<MenuItem value={'3'}>3F</MenuItem>
						<MenuItem value={'5'}>5F</MenuItem>
						<MenuItem value={'11'}>11F</MenuItem>
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
  width: calc(1920px - 240px);
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;