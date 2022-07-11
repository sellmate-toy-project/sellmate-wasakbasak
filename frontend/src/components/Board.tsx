import { Button, makeStyles, Typography } from '@material-ui/core';
import FiberNewSharpIcon from '@mui/icons-material/FiberNewSharp';
import { Avatar, Box, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material';
const useStyles = makeStyles((theme) => ({
	paddingNone: {
		padding: 0,
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '20px',
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
		},
		{
			img: '/static/images/avatar/2.jpg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
		},
		{
			img: '/static/images/avatar/3.jpg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
			icon: true,
		},
    {
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
		},
	];

	return (
		<Stack direction='column' p='20px' height='442px' boxSizing='border-box'>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginBottom: '20px',
				}}>
				<Typography display='block' variant='button' component='div'>
					Board
				</Typography>
				<div>
					<Button variant='text' size='small' className={classes.paddingNone}>
						View all
					</Button>
					<Button variant='text' size='small' className={classes.paddingNone}>
						write
					</Button>
				</div>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}>
				<Typography variant='body2' component='div'>
					notice
				</Typography>
				<Typography variant='body2' component='div'>
					YYYY / MM / DD
				</Typography>
			</Box>
			<List dense disablePadding sx={{ marginBottom: '20px' }}>
				{BoardData.map((post, key) => (
					<ListItem
						key={key}
						sx={{ padding: 0, marginBottom: '20px' }}
						disableGutters
						disablePadding
						secondaryAction={
							post.icon ? (
								<IconButton
									edge='end'
									aria-label='new'
									disableRipple
									disableFocusRipple
									sx={{ width: 46, height: 20, padding: 0, marginRight: 0 }}>
									<FiberNewSharpIcon
										fontSize='large'
										viewBox='0 0 32 32'
										htmlColor='#FF5B00'
									/>
								</IconButton>
							) : (
								''
							)
						}>
						{post.img ? (
							<ListItemAvatar>
								<Avatar
									variant='square'
									src={post.img}
									sx={{ width: 46, height: 46, marginRight: '16px' }}
								/>
							</ListItemAvatar>
						) : (
							''
						)}
						<ListItemText
              className={classes.text}
							primaryTypographyProps={
								post.img && post.icon
									? { width: 260 }
									: post.icon
									? { width: 320 }
									: post.img
									? { width: 300 }
									: { width: 365 }
							}
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
