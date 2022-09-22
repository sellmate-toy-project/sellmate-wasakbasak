import { Paper, Typography, Avatar, Button, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	Paper: {
		height: '120px',
		width: '400px',
		marginBottom: '20px',
		borderRadius: '16px !important',
	},
	// Avatar: {
	// 	width: '80px',
	// 	height: '80px',
	// },
	botton: {
		width: '120px',
		height: '38px',
		border: '1px solid #E0E0E0',
		borderRadius: '8px',
		color: '#484848',
		fontWeight: 400,
		fontSize: '12px',
		lineHeight: '160%',
	},
}));

const User = () => {
	const classes = useStyles();
	const UserData = [
		{
			username: 'NamNaHyun',
			email: 'namnahyun@sellmate.co.kr',
			text: "I'll be in your neighborhood doing errands this…",
		},
	];
	return (
		<Paper elevation={0} className={classes.Paper}>
			<Grid>
				<Grid xs={5}>
					<Avatar
						sx={{
							width: '80px',
							height: '80px',
						}}
					></Avatar>
				</Grid>
				<Grid xs={7}>
					<Grid>
						<Typography>{UserData[0].username}</Typography>
						<Typography>{UserData[0].email}</Typography>
					</Grid>
					<Grid>
						<Button className={classes.botton}>프로필 수정</Button>
						<Button className={classes.botton}>로그아웃</Button>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};
export default User;
