import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography
} from '@material-ui/core';
import Badge from '@mui/material/Badge';
import { Fragment } from 'react';
import rank1 from '../icons/rank1.png';
import rank2 from '../icons/rank2.png';
import rank3 from '../icons/rank3.png';

interface PropsData {
	title: string;
	img: {
		src: string;
		style: object;
	};
	text?: {
		display: boolean;
		content?: string;
		class?: string;
	};
	onClick?: () => void;
	rank: {
		display: boolean;
		content?: number;
	};
	itemsClass?: string;
}
const useStyles = makeStyles((theme) => ({
	list: {
		width: '100%',
		boxSizing: 'border-box',
	},
	inline: {
		display: 'inline',
	},
	listImg: {
		width: 'auto',
		height: 'auto',
		marginTop: 0,
    '& .rank-img': {
      position: 'absolute',
    left: '-6px',
    top: '-6px',
    },
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
		'& .MuiBadge-badge': {
			width: '36px',
			height: '36px',
			borderRadius: '100%',
			top: '10px',
			left: '10px',
		},
	},
	listItem: {
		height: 'auto',
		marginBottom: '12px',
		// '&:last-of-type': {
		// 	marginBottom: 0,
		// },
	},
}));

const Item = ({
	title,
	img,
	text,
	rank,
	onClick,
	itemsClass,
}: PropsData) => {
	const classes = useStyles();
	return (
		<ListItem
			key={title}
			onClick={onClick}
			className={[classes.paddingNone, classes.listItem, itemsClass].join(' ')}>
			{rank.display ? (
				<Badge
					className={classes.badge}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}>
					<ListItemAvatar className={classes.listImg}>
            <div>
              <Avatar src={img.src} style={img.style}></Avatar>
              {rank.content === 1 
              ? <img src={rank1} alt='rank1' className='rank-img' /> 
              : rank.content === 2 
              ? <img src={rank2} alt='rank2' className='rank-img' /> 
              : <img src={rank3} alt='rank3' className='rank-img' />}
            </div>
					</ListItemAvatar>
				</Badge>
			) : (
				<ListItemAvatar className={classes.listImg}>
					<Avatar variant='rounded' src={img.src} style={img.style}></Avatar>
				</ListItemAvatar>
			)}
			<ListItemText
				style={{
					margin: '0 16px',
					width: '100px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'start',
				}}
				className=''
				primary={
					<Fragment>
						<Typography
							component='span'
							variant='body2'
							className={
								classes.inline + 'MuiTypography-gutterBottom title-text'
							}
							gutterBottom={false}
							color='textPrimary'>
							{title}
						</Typography>
					</Fragment>
				}
				secondary={
					text?.display ? (
						<Fragment>
							<Typography
								component='b'
								variant='body2'
								className={classes.inline + 'MuiTypography-gutterBottom'}
								gutterBottom={false}
								color='textPrimary'>
								{text?.content}
							</Typography>
						</Fragment>
					) : (
						''
					)
				}
			/>
		</ListItem>
	);
};
export default Item;
