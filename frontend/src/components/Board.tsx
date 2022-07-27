import { Button, makeStyles, Typography } from '@material-ui/core';
import FiberNewSharpIcon from '@mui/icons-material/FiberNewSharp';
import { Avatar, Box, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack, SvgIcon} from '@mui/material';
import { fontSize } from '@mui/system';
import newIcon from '../icons/new.png';
const useStyles = makeStyles((theme) => ({
	paddingNone: {
		padding: 0,
	},
	title: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between !important',
		marginBottom: '20px',
	},
	noticeText: {
		fontWeight: 700,
		fontSize: '13px',
	},
  text: {
    '& .MuiListItemText-primary': {
      height: '46px', 
      overflow: 'hidden',
      lineHeight: '23px',
    }
  }
}));

const Board = () => {
	const classes = useStyles();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const BoardData = [
		{
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
			icon: true,
			boardType: 'notice',
		},
		{
			img: '/static/images/avatar/2.jpg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
			boardType: 'notice',
		},
		{
			img: '/static/images/avatar/3.jpg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
			icon: true,
			boardType: 'board',
			userId: 'namnahyun',
		},
    {
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
			boardType: 'board',
			userId: 'dana',
		},
	];

	return (
		<Stack direction='column' p='20px' height='442px' boxSizing='border-box'>
			<Box className={classes.title}>
				<Typography display='block' variant='button' component='div'>
					게시판
				</Typography>
				<div>
					<Button variant='text' size='small' className={classes.paddingNone}>
						더보기
					</Button>
				</div>
			</Box>
			<List dense disablePadding sx={{ marginBottom: '20px' }}>
				{BoardData.map((post, key) => (
					<ListItem 
						key={key}
						sx={{ padding: 0, marginBottom: '20px', flexDirection: 'column' }}
						disablePadding
						>
						<ListItemAvatar className={classes.title}>
							<span className={classes.title}>{post.boardType == 'notice' ? '공지' : post.userId}</span>
							<Avatar sx={{ width: 40, height: 20 }} src={newIcon} variant="square"/>
						</ListItemAvatar>
						<ListItemText
              				className={classes.text}
							primary={post.text}
							sx={{ height: 46, margin: 0 }}
						/>
					</ListItem>
				))}
			</List>
		</Stack>
	);
};
export default Board;
