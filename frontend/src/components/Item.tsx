import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Badge from '@mui/material/Badge';
import React from 'react';

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
	badge: {},
}));
interface PropsData {
	name: string;
	img: string;
	text: string;
	badge: {
		display: boolean;
    content?: number;
	};
}

const Item = ({ name, img, text, badge }: PropsData) => {
	const classes = useStyles();
	return (
		<ListItem
			key={name}
			disableGutters={true}
			className={classes.paddingNone}
			style={{ marginBottom: '12px' }}>
			{badge.display ? (
				<Badge
					badgeContent={badge.content}
					color='success'
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}>
					<ListItemAvatar className={classes.listImg}>
						<Avatar alt={name} src={img} className={classes.itemImg}></Avatar>
					</ListItemAvatar>
				</Badge>
			) : (
				<ListItemAvatar className={classes.listImg}>
					<Avatar alt={name} src={img} className={classes.itemImg}></Avatar>
				</ListItemAvatar>
			)}
			<ListItemText
				primary={name}
				secondary={
					<React.Fragment>
						<Typography
							component='span'
							variant='body2'
							className={classes.inline}
							color='textPrimary'>
							{text}
						</Typography>
					</React.Fragment>
				}
			/>
		</ListItem>
	);
};
export default Item;
