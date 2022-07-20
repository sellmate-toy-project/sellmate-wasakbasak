import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Image } from '@mui/icons-material';
import { flexbox } from '@mui/system';

const useStyles = makeStyles((theme) => ({
	Box: {
		width: '410px',
		height: '280px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		marginBottom: '20px',
		padding: '20px',
	},
	newText: {
		fontSize: '16px',
		fontWeight: 700,
		lineHeight: '165%',
		color: '#181818',
		width: '90px',
		height: '52px'
	},
	snackImg: {
		width: '197px',
		height: '197px',
		borderRadius: '18px',
	},
	snackText: {
		fontSize: '14px',
		fontWeight: 500,
		lineHeight: '165%',
		color: '#181818',
	},
	priceText: {
		fontSize: '14px',
		fontWeight: 500,
		lineHeight: '165%',
		color: '#181818',
	},
}));

const NewArrival = () => {
	const classes = useStyles();
	const SnackData = [
        {
            image: 'http://m.jjmall.shop/web/product/big/202202/d0af34ffd687a0a4ffc312fac82e9c84.jpg',
            name: '크라운 콘칩 초당옥수수맛 148g',
            price: '2380',
        },
    ];
	return (
		<Box className={classes.Box}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Typography className={classes.newText} align="left">
					새로운 간식이 출시되었어요!
				</Typography>
				<img src={SnackData[0].image} alt='snack-img' className={classes.snackImg} /> 
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Typography className={classes.snackText}>
					{SnackData[0].name}
				</Typography>
				<Typography className={classes.priceText}>
				{SnackData[0].price}원
				</Typography>
			</Box>
		</Box>

	);
};
export default NewArrival;
