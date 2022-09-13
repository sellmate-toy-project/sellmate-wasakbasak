import { Button, makeStyles, Typography } from '@material-ui/core';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material';
import newIcon from '../icons/new.png';
const useStyles = makeStyles((theme) => ({
	paddingNone: {
		padding: 0,
	},
	stack: {
		width: '450px',
		boxSizing: 'border-box',
		backgroundColor: 'white',
		borderRadius: '16px',
		padding: '20px'
	},
	title: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between !important',
		marginBottom: '10px',
		width: '100%'
	},
	moreText: { // 더보기
		fontWeight: 400,
		fontSize: '14px',
	},
	mainText: { // 게시판
		fontWeight: 700,
		fontSize: '16px',
	},
	
	noticeSub: { // 공지사항 글자
		fontWeight: 600,
		fontSize: '14px',
		color: '#8C8C8C'
	},
	noticeTitle: { // 공지사항 글자
		fontWeight: 700,
		fontSize: '13px',
		color: '#FF6B00'
	},
	noticeTitleText: {
		fontWeight: 600,
		fontSize: '14px',
		color: '#181818'
	},
	noticeSubText: {
		fontWeight: 400,
		fontSize: '14px',
		color: '#181818'
	},
	black: {
		color: '#181818'
	},
	gray: {
		color: '#8C8C8C'
	},
	listItem : {
		padding: '16px',
		marginBottom: '10px',
		flexDirection: 'column',
		border: '1px solid #EEEEEE',
		borderRadius: '12px'
	}
}));

const Board = () => {
	const classes = useStyles();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const BoardData = [
		{
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
			newFlag: false,
			boardType: 'notice',
			userId: 'admin',
			createDate: '2022-09-13',
		},
		{
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
			newFlag: false,
			boardType: 'notice',
			userId: 'admin',
			createDate: '2022-09-13',
		},
		{
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
			newFlag: true,
			boardType: 'board',
			userId: 'namnahyun',
			createDate: '2022-09-13',
		},
    {
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
			newFlag: false,
			boardType: 'board',
			userId: 'dana',
			createDate: '2022-09-13',
		},
	];

	return (
		<Stack direction='column' className={classes.stack}>
			<Box className={classes.title}>
				<Typography display='block' variant='button' component='div' className={[classes.mainText, classes.black].join(' ')}>
					게시판
				</Typography>
				<div>
					<Button variant='text' size='small' className={[classes.moreText, classes.gray].join(' ')}>
						더보기
					</Button>
				</div>
			</Box>
			<List dense disablePadding sx={{ marginBottom: '20px' }}>
				{BoardData.map((post, key) => (
					<ListItem 
						className={classes.listItem}
						key={key}
						disablePadding
						>
						<ListItemAvatar className={classes.title}>
							<span className={post.boardType == 'notice' ? classes.noticeTitle : classes.noticeSub}>{post.boardType == 'notice' ? '공지' : post.userId}</span>
							{
								post.newFlag == true 
								? <Avatar sx={{ width: 40, height: 20 }} src={newIcon} variant="square"/> 
								: <span className={[classes.moreText, classes.gray].join(' ')}>{post.createDate}</span>
							}
								
						</ListItemAvatar>
						<ListItemText
              				className={post.boardType == 'notice' ? classes.noticeTitleText : classes.noticeSubText}
							primary={post.text}
						/>
					</ListItem>
				))}
			</List>
		</Stack>
	);
};
export default Board;
