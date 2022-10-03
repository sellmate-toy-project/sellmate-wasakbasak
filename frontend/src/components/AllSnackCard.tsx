import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

type AllSnackCardProps = {
	frontImage: string;
	frontTitleText: string;
};

const AllSnackCard: React.FC<AllSnackCardProps> = ({
	frontImage,
	frontTitleText,
}) => {
	return (
		<Card className='flip-panel'>
			<CardContent className='front card'>
				<div style={imageContainer}>
					<CardMedia
						component='img'
						sx={{ width: 180, height: 180, display: 'unset' }}
						image={frontImage}
						alt='Image Not found'
						style={leftImage}
					/>
				</div>
				<div>
					<p style={textStyle.title}>{frontTitleText}</p>
				</div>
				<div style={bottomStyle}>
					<span>+1</span>
					<span>+ add cart</span>
				</div>
			</CardContent>
		</Card>
	);
};
export default AllSnackCard;

const bottomStyle = {
	flex: 1,
	display: 'flex',
	justifyContent: 'space-between',
	size: 13,
	color: '#8c8c8c',
	marginBottom: 16,
	marginTop: 11,
};

const textStyle = {
	title: {
		size: 13,
		color: '#c8c8c8',
		textAlign: 'left' as 'left',
		marginBottom: 12,
	},
	content: {
		fontWeight: 600,
		size: 14,
		width: 190,
		height: 92,
		textAlign: 'left' as 'left',
		textOverflow: 'ellipsis',
		overflow: 'auto',
		margin: 0,
	},
};

const imageContainer = {
	flex: 1,
	display: 'flex',
};

const leftImage = {
	borderRadius: '8px',
	flex: 1,
};
