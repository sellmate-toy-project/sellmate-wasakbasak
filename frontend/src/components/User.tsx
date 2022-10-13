import { Paper, Avatar, Button, } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	Paper: {
		marginBottom: '20px',
		borderRadius: '16px !important',
	},
	botton: {
		width: '120px !important',
		height: '38px !important',
		border: '1px solid #E0E0E0 !important',
		borderRadius: '8px !important',
		color: '#484848 !important',
		fontWeight: 400,
		fontSize: '12px !important',
		lineHeight: '160% !important',
	},
	mainDiv: {
		display: 'flex',
		height: '110px',
		width: '400px',
		alignItems: 'center',
	},
	avaDiv: {
		marginLeft: '24px',
	},
	subDiv: {
		marginLeft: '24px',
		height: '110px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'flex-start',
	},
	userName: {
		aligeItem: 'left',
		color: '#181818',
		fontWeight: 700,
		fontSize: '16px'
	},
	userEmail: {
		aligeItem: 'left',
		color: '#8C8C8C',
		fontWeight: 400,
		fontSize: '14px'
	},
}));

const onClickLogout = () => {
	localStorage.removeItem('user');
	window.location.href = 'http://localhost:3000/login';
};

const User = () => {
	const classes = useStyles();
	const UserData = JSON.parse(localStorage.getItem("user") || '{}');
	return (
		<Paper elevation={0} className={classes.Paper}>
			<div className={classes.mainDiv}>
				<div className={classes.avaDiv}>
					<Avatar
						sx={{
							width: '80px',
							height: '80px',
						}}
						src={UserData.picture}
					></Avatar>
				</div>
				<div className={classes.subDiv}>
					<div>
						<span className={classes.userName}>
							{UserData.name || ""}
						</span>
					</div>
					<div>
						<span className={classes.userEmail}>
							{UserData.email || ""}
						</span>
					</div>
					<div>
						<Button className={classes.botton} sx={{marginRight:'10px'}}>프로필 수정</Button>
						<Button className={classes.botton} onClick={onClickLogout}>로그아웃</Button>
					</div>
				</div>
			</div>
		</Paper>
	);
};
export default User;
