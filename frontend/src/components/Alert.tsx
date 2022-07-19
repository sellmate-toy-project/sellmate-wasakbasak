import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
	Box: {
		width: '410px',
		height: '160px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: '20px',
		padding: '20px',
		backgroundColor: '#3C3C3C',
		borderRadius: '16px',
	},
	Typography: {
		fontSize: '24px',
		fontWeight: 800,
		lineHeight: '140%',
		color: '#FFFFFF',
		left: '24px',
		top: '20px',
	},
	Button: {
		fontSize: '24px',
		fontWeight: 600,
		lineHeight: '160%',
		backgroundColor: '#C464FF',
		color: '#FFFFFF',
		right: '24px',
		top: '100px',
		width: '130px',
		height: '40px',
	},

}));

const Alert = () => {
	const classes = useStyles();
	return (
		<Box className={classes.Box}>
			<Typography className={classes.Typography} align="left">
				이런... <br/>
				간식이 동나버렸다면?
			</Typography>;
			<Button variant='contained' className={classes.Button}>
				주문 요청하기
			</Button>
		</Box>
	);
};
export default Alert;
