import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
const useStyles = makeStyles((theme) => ({
	list: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		padding: '0 20px',
		boxSizing: 'border-box',
	},
	inline: {
		display: 'inline',
	},
	listItems: {},
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
	},
}));

export default function RankingList() {
	const classes = useStyles();
	const rankingData = [
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
			{rankingData.map((items) => (
				<ListItem
					alignItems='flex-start'
					key={items.name}
          disableGutters={true}
					className={classes.paddingNone + classes.listItems}>
					<ListItemAvatar className={classes.listImg}>
						<Avatar
							alt={items.name}
							src={items.img}
							className={classes.itemImg}
						/>
					</ListItemAvatar>
					<ListItemText
						primary={items.name}
						secondary={
							<React.Fragment>
								<Typography
									component='span'
									variant='body2'
									className={classes.inline}
									color='textPrimary'>
									{items.text}
								</Typography>
							</React.Fragment>
						}
					/>
				</ListItem>
			))}
		</List>
	);
}
