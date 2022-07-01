import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	Box: {
		width: '405px',
		height: '320px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: '20px',
		padding: '20px',
	},
	Paper:{
		width: '260px',
		height: '280px',
	},
}));

const NewArrival = () => {
	const classes = useStyles();
	return (
		<Box className={classes.Box}>
				<Typography variant='button' component='div'>
					New arrival
				</Typography>
				 <Paper variant="outlined" square className={classes.Paper} />
			</Box>
	);
};
export default NewArrival;
