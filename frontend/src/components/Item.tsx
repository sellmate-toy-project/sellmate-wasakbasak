import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography
} from '@material-ui/core';
import { Fragment } from 'react';
import { Crown } from '../icons/Crown';

interface PropsData {
	title: string;
	img: {
		src: string;
		style: object;
	};
	text: {
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
  iconColor?: string;
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
		marginRight: '18px',
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

const Item = ({ title, img, text, rank, onClick, itemsClass, iconColor }: PropsData) => {
	const classes = useStyles();
	return (
		<ListItem
			key={title}
			onClick={onClick}
			className={[classes.paddingNone, classes.listItem, itemsClass].join(' ')}
    >
			<ListItemAvatar className={classes.listImg}>
				<Avatar variant='rounded' src={img.src} style={img.style}></Avatar>
			</ListItemAvatar>
			<ListItemText
				style={{ margin: 0, width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'start', }}
				primary={
					<Fragment>
						{rank.display ? (
							<Typography
                component='div'
								variant='body2'
								className={'MuiTypography-gutterBottom'}
								gutterBottom={false}
                style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
								>
								<Crown style={{fontSize: '20px'}} color={iconColor}/>
								<span style={{backgroundColor : iconColor}} className='ranking-text'>랭킹 {rank.content}위</span>
							</Typography>
						) : (
							''
						)}
						<Typography
							component='span'
							variant='body2'
							className={classes.inline + 'MuiTypography-gutterBottom title-text'}
							gutterBottom={false}
							color='textPrimary'
            >
							{title}
						</Typography>
					</Fragment>
				}
				secondary={
					text.display ? (
						<Fragment>
							<Typography
								component='b'
								variant='body2'
								className={classes.inline + 'MuiTypography-gutterBottom'}
								gutterBottom={false}
								color='textPrimary'>
								{text.content}
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
