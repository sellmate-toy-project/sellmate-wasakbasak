import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';

type FlipCardProps = {
	frontLeftImage: string;
	frontRightImage: string;
	frontContentText: string;
	backContentText: string;
	backImage: string;
};

const FlipCard: React.FC<FlipCardProps> = ({
	frontLeftImage,
	frontRightImage,
	frontContentText,
	backContentText,
	backImage,
}) => {
	return (
		<Card className='flip-panel'>
			<CardContent className='front card'>
				<view style={imageContainer}>
					<CardMedia
						component='img'
						sx={{ width: 60, height: 60, display: 'unset' }}
						image={frontLeftImage}
						alt='Image Not found'
						style={leftImage}
					/>
					<span style={spacer} />
					<CardMedia
						component='img'
						sx={{ width: 60, height: 60, display: 'unset' }}
						image={frontRightImage}
						alt='Image Not found'
						style={rightImage}
					/>
				</view>
				<span style={textStyle}>{frontContentText}</span>
			</CardContent>
			<CardContent className='back card'>
				<CardMedia
					component='img'
					sx={{ width: 180, height: 180 }}
					image={backImage}
					alt='Image Not found'
				/>
				<span>{backContentText}</span>
			</CardContent>
		</Card>
	);
};
export default FlipCard;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Container = styled.div`
	font-size: 20px;
	font-weight: 700;
`;

const textStyle = {
	size: 14,
	width: 185,
	height: 180,
	textAlign: 'left' as 'left',
};

const imageContainer = {
	flex: 1,
	display: 'flex',
};

const leftImage = {
	flex: 1,
};
const spacer = {
	flex: 1,
};
const rightImage = {
	flex: 1,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const img = {
	smallSize: {
		width: '60px',
		height: '60px',
	},
	bigSize: {
		width: '180px',
		height: '180px',
	},
};
