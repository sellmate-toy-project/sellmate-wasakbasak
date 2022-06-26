import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Badge from '@mui/material/Badge';
import React from 'react';
interface PropsData {
	name: string;
	img: string;
	text: string;
	badge: {
		display: boolean;
    content?: number;
	};
}
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
	badge: {
    // width: '36px',
    // height: '36px'
  },
  listItem:{
    height: '80px',
    marginBottom: '12px',
    '&:last-of-type': {
      marginBottom: 0
    }
  },
}));

const Item = ({ name, img, text, badge }: PropsData) => {
  const classes = useStyles();
	return (
		<ListItem
			key={name}
			disableGutters={true}
			className={[classes.paddingNone, classes.listItem].join(' ')}
      >
			{badge.display ? (
				<Badge
					badgeContent={badge.content}
					color='success'
          className={classes.badge}
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
			  style={{ marginBottom: 0 }}
				secondary={
					<React.Fragment>
						<Typography
							component='span'
              variant='body2'
							className={classes.inline + 'MuiTypography-gutterBottom'}
              gutterBottom={false}
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
