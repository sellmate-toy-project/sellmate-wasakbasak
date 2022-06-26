import Avatar from '@material-ui/core/Avatar';
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
    marginBottom: '20px'
	},
}));
interface PropsData {
  name: string; 
  img: string; 
  text: string;
}

const Item = ({name, img, text}: PropsData) => {
	const classes = useStyles();
  console.log(name);
	return (
    <ListItem
      key={name}
      disableGutters={true}
      className={classes.paddingNone}
      style={{marginBottom : '12px'}}
    >
      <ListItemAvatar className={classes.listImg}>
        <Avatar
          alt={name}
          src={img}
          className={classes.itemImg}
        />
      </ListItemAvatar>
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
}
export default Item