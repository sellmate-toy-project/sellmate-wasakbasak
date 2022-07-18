import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import loginLogo from '../icons/loginLogo.png';

const Login = () => {
	const [btnText, setBtnText] = useState('Login with sellmate');
	const [inputVal, setInputVal] = useState('');
	const [error, setError] = useState(false);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputVal(event.target.value);
	}
	const onClickLogin = () => {
		setBtnText('입장');
		if (btnText === '입장') {
			if (!inputVal) {
				setError(true);
			} else {
				// 로그인 api
				console.log('login id', inputVal);
			}
		}
	}
	return (
		<Container
			sx={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}>
			<Box
				sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Avatar
					src={loginLogo}
					variant='rounded'
					sx={{
						width: '192px',
						height: '26px',
						margin:
							btnText === '입장'
								? '411px auto 80px auto'
								: '411px auto 60px auto',
					}}
				/>
				{btnText === '입장' ? (
					<TextField
						variant='outlined'
						placeholder='닉네임을 입력해주세요!'
						error={error}
						defaultValue={inputVal}
						onChange={handleInputChange}
						sx={{
							mb: '24px',
							width: '368px',
							height: '66px',
							justifyContent: 'center',
							'& > .MuiOutlinedInput-root': {
								height: '100%',
								borderRadius: '16px',
								borderColor: '#E0E0E0',
								p: '20px 24px',
								'& > .MuiOutlinedInput-input': {
									height: '24px',
									p: '0',
								},
							},
						}}
					/>
				) : (
					''
				)}
				<Button
					variant='contained'
					onClick={onClickLogin}
					disableElevation
					sx={{
						color: 'white',
						backgroundColor: '#00BAF4',
						fontSize: '16px',
						fontWeight: 600,
						width: '368px',
						height: '66px',
						borderRadius: '16px',
						textTransform: 'none',
						'&:hover': {
							backgroundColor: '#9CE2F8',
						},
					}}>
					{btnText}
				</Button>
			</Box>
			<Typography
				variant='caption'
				display='block'
				align='center'
				noWrap
				sx={{ color: '#C8C8C8', marginBottom: '85px' }}>
				Copyright © Since 2022 Sellmate Ltd. All right reserved.
			</Typography>
		</Container>
	);
};
export default Login;
