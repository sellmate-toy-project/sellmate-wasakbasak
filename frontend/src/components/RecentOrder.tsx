import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Item from './Item';
const useStyles = makeStyles((theme) => ({
	list: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		padding: ' 20px',
		boxSizing: 'border-box',
	},
	inline: {
		display: 'inline',
	},
	listImg: {
		width: '80px',
		height: '80px',
		marginTop: 0,
		marginRight: '16px',
	},
	itemImg: {
		width: '100%',
		height: '100%',
		borderRadius: 0,
	},
	paddingNone: {
		padding: 0,
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '20px',
	},
}));

const RecentOrder = () => {
	const classes = useStyles();
	const recentOrderData = [
		{
			img: '/static/images/avatar/1.jpg',
			name: 'Ali Connors',
			text: "I'll be in your neighborhood doing errands this…",
		},
		{
			img: '/static/images/avatar/2.jpg',
			name: 'Jennifer',
			text: "Wish I could come, but I'm out of town this…",
		},
		{
			img: '/static/images/avatar/3.jpg',
			name: 'Alex',
			text: 'Do you have Paris recommendations? Have you ever…',
		},
	];

	return (
		<List className={classes.list} disablePadding={true}>
			<div className={classes.title}>
				<Button variant='text' size='small' className={classes.paddingNone}>
					Recent Order
				</Button>
				<Button variant='text' size='small' className={classes.paddingNone}>
					View all
				</Button>
			</div>
			{recentOrderData.map((items) => (
				<Item
					name={items.name}
					img={items.img}
					text={items.text}
					badge={{ display: false }}
          key={items.name}
				/>
			))}
		</List>
	);
}
export default RecentOrder;
