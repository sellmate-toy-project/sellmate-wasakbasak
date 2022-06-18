import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

type FlipCardProps = {
    frontLeftImage: string,
    frontRightImage: string
}

const FlipCard: React.FC<FlipCardProps> = ({frontLeftImage, frontRightImage}) => {
    return (
        <Card className='flip-panel'>
            <CardContent className='front card'>
                <CardMedia
                    component="img"
                    sx={{ width: 60, height: 60, display: 'unset' }}
                    image={frontLeftImage}
                    alt="Image Not found"
                />
                <CardMedia
                    component="img"
                    sx={{ width: 60, height: 60, display: 'unset'}}
                    image={frontRightImage}
                    alt="Image Not found"
                />
                <p style={textStyle}>
                    Lorem ipsum dolor sit amet,consectetur ipiscing
                    Comment Quis diam nulla sit dictum vulputate. Consequat mauris, diam urna risus. Nibh faucibus mi urna malesuada feugiat
                </p>
            </CardContent>
            <CardContent className='back card'>
                <CardMedia
                    component="img"
                    sx={{ width: 180, height: 180 }}
                    image={frontRightImage}
                    alt="Image Not found"
                />
            </CardContent>
        </Card>
    );
};
export default FlipCard;

const Container = styled.div`
font-size: 20px;
font-weight: 700;
`;

const textStyle = {
    size: 14,
    width: 185,
    height: 180,
    textAlign: 'left' as 'left'
}

const img = {
    smallSize: {
        width: '60px',
        height: '60px',
    },
    bigSize: {
        width: '180px',
        height: '180px',
    }
};