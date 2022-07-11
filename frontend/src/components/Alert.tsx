import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	Box: {
		width: '405px',
		height: '160px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: '20px',
		padding: '20px',
	},
}));

const Alert = () => {
	const classes = useStyles();
	return (
		<Box className={classes.Box}>
				<Typography variant='button' component='div'>
					Alert 
				</Typography>
			</Box>
	);
};
export default Alert;
