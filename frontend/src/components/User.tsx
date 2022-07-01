import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	list: {
		width: '100%',
		height: '120px',
		padding: '20px',
		boxSizing: 'border-box',
	},
	listItem:{
		height: '120px',
	},
	ListItemAvatar: {
		width: '80px',
		height: '80px',
		marginRight: '22px',
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
		<List className={classes.list}>
		<ListItem className={classes.listItem}>
		  <ListItemAvatar className={classes.ListItemAvatar}>
			<Avatar
				sx={{
					width: '100%',
					height: '100%',
				}}
			>
			</Avatar>
		  </ListItemAvatar>
		  <ListItemText primary={UserData[0].username} secondary={UserData[0].email} />
		  <Button size='small' >
					logout
		  </Button>	
		</ListItem>
	  </List>
	  );
}
export default User;
