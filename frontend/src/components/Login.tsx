import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@mui/material';
import jwtDecode from 'jwt-decode';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginLogo from '../icons/loginLogo.png';
const Login = () => {
	const [btnText, setBtnText] = useState('Login with sellmate');
	const [inputVal, setInputVal] = useState('');
	const [error, setError] = useState(false);

	useEffect(() => {
		checkRedirectUrl();
	}, []);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputVal(event.target.value);
    setUser({ ...user, name: event.target.value });

	};
	const navigate = useNavigate();
	const [user, setUser] = useState({
		email: '',
		g_name: '',
		name: '',
		picture: '',
    sub: '',
	});
	const onClickLogin = () => {
		if (btnText !== '입장') {
			// 구글 로그인
			// TODO: env 파일로 분리 필요
			const googleLoginUrl = 'https://accounts.google.com/o/oauth2/v2/auth?';
			const payload = {
				client_id:
					'613413749609-rd34eq6q0irj1fjpqsp8m6b5ekd3d9v4.apps.googleusercontent.com',
				scope: 'openid profile email',
				redirect_uri: 'http://localhost:3000/login',
				response_type: 'id_token',
				nonce:
					Math.random().toString(36).substring(2, 15) +
					Math.random().toString(36).substring(2, 15),
			};
			const queryString = new URLSearchParams(payload).toString();
			window.location.assign(googleLoginUrl + queryString);
			return;
		}
		// 구글 로그인 되면 입장으로 바꾸고 닉 + 층수 선택 후 입장 클릭 시 메인 이동
		if (!inputVal) {
			setError(true);
		} else {
			// TODO: redux 사용 필요
      localStorage.setItem('user', JSON.stringify(user))
			navigate('/');
		}
	};

	const checkRedirectUrl = () => {
		const hashedParam = new URLSearchParams(window.location.hash.substr(1));
		const idToken = hashedParam.get('id_token');

		if (idToken) {
			const { email, name, sub, picture }: any = jwtDecode(idToken);
			setUser({ ...user, email, g_name: name, picture, sub });
			setBtnText('입장');
		}
	};

	const onEnterLogin = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			onClickLogin();
		}
	};
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
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					height: '100%',
					justifyContent: 'center',
				}}>
				<Avatar
					src={loginLogo}
					variant='rounded'
					sx={{
						width: '348px',
						height: '47px',
						marginBottom: btnText === '입장' ? '80px' : '60px',
					}}
				/>
				{btnText === '입장' ? (
					<TextField
						variant='outlined'
						placeholder='닉네임을 입력해주세요!'
						error={error}
						defaultValue={inputVal}
						onChange={handleInputChange}
						onKeyPress={onEnterLogin}
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
					id='loginBtn'
					sx={{
						color: 'white',
						backgroundColor: '#00BAF4',
						fontSize: '16px',
						fontWeight: 600,
						width: '368px',
						height: '66px',
						borderRadius: '16px',
						textTransform: 'none',
						p: '20px 24px',
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
