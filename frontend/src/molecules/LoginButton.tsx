import { Button } from '@mui/material';
import api from 'api';
import { AxiosResponse } from 'axios';
import { JoinRequest, JoinResponse, LoginRequest, LoginResponse } from 'domain/auth/dto';
import jwtDecode from 'jwt-decode';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
interface User {
	email: string;
	name: string;
	nick_name: string;
	picture: string;
	uid: string;
	floor: string;
	type: string;
	access_token: string;
}

const LoginButton = () => {
	const [user, setUser] = useState<User>({
		email: '',
		name: '',
		nick_name: '',
		picture: '',
		uid: '',
		floor: '3',
		type: 'basic',
		access_token: '',
	});

	const getLoginData = (userInfo: User = user) =>
		api
			.post<LoginResponse, AxiosResponse<LoginResponse>, LoginRequest>(
				'auth/login',
				{ email: userInfo.email, uid: userInfo.uid }
			)
			.then((res) => {
				console.log(res.data);
        // store user info in localstorage
			});
const pathname = useLocation()
console.log(pathname)
	const getJoinData = (userInfo: User = user) =>
		api
			.post<JoinResponse, AxiosResponse<JoinResponse>, JoinRequest>('auth/join', userInfo)
			.then((res) => {
				setUser(() => ({ ...userInfo, ...res.data }));
			})
			.catch((error) => {
				if (
					!error.response.data.message.includes('이미 가입된 회원정보입니다.')
				) {
					const alreadyExistsUserInfo = JSON.parse(error.response.config.data);
					setUser((val:User) => ({ ...val, ...alreadyExistsUserInfo }));
          getLoginData(user);
					return;
				}
			})

	const onClickLogin = async () => {
		// 구글 로그인
		const googleLoginUrl = 'https://accounts.google.com/o/oauth2/v2/auth?';
		const payload = {
			client_id:
				'613413749609-rd34eq6q0irj1fjpqsp8m6b5ekd3d9v4.apps.googleusercontent.com',
			scope: 'openid profile email',
			// TODO: env 파일 분리 필요
			redirect_uri: window.location.href,
			response_type: 'id_token',
			nonce:
				Math.random().toString(36).substring(2, 15) +
				Math.random().toString(36).substring(2, 15),
		};
		const queryString = new URLSearchParams(payload).toString();
		window.location.assign(googleLoginUrl + queryString);
	};

	const checkRedirectUrl = useCallback(() => {
		const hashedParam: any = new URLSearchParams(
			window.location.hash.substring(1)
		);
		const idToken = hashedParam.get('id_token');
		if (idToken) {
			// 구글 로그인 되면 입장으로 바꾸고 닉 + 층수 선택 후 입장 클릭 시 메인 이동
			// TODO: 먼저 로그인 정보가 있는지 확인 필요
			// 로그인 정보 있을 때 > input에 기존 닉네임
			// 로그인 정보 없을 때 input 비었을 때 > error
			// 로그인 정보 없을 때 input 값이 있을 때 > 다시 로그인 api
			const { email, name, sub, picture }: any = jwtDecode(idToken);
			setUser((val: any) => ({ ...val, email, name, picture, uid: sub }));
			getJoinData({ ...user, email, name, picture, uid: sub });
		}
	}, []);

	useEffect(() => {
		checkRedirectUrl();
	}, []);

	return (
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
			Login with sellmate
		</Button>
	);
};

export default LoginButton;
