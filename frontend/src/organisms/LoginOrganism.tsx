import { Avatar, Typography } from '@mui/material';
import LoginButton from 'molecules/LoginButton';
import loginLogo from "../icons/loginLogo.svg";

const LoginOrganism = () => {
	return (
		<>
				<Avatar
					src={loginLogo}
					variant='rounded'
					sx={{
						width: '348px',
						height: '47px',
						marginBottom: '60px',
					}}
				/>
        <LoginButton/>
			<Typography
				variant='caption'
				display='block'
				align='center'
				noWrap
				sx={{ color: '#C8C8C8', marginBottom: '85px' }}>
				Copyright © Since 2022 Sellmate Ltd. All right reserved.
			</Typography>
		</>
	);
};

export default LoginOrganism;
