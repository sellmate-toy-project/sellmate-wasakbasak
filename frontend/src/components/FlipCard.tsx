import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {IconButton} from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {pink} from "@mui/material/colors";
import {FavoriteBorder} from "@mui/icons-material";

type FlipCardProps = {
 frontLeftImage: string;
 isLike: boolean;
 frontTitleText: string;
 frontContentText: string;
 backContentText: string;
 backImage: string;
};

const FlipCard: React.FC<FlipCardProps> = ({
                                            frontLeftImage,
                                            isLike,
                                            frontTitleText,
                                            frontContentText,
                                            backContentText,
                                            backImage,
                                           }) => {
 return (
  <Card className='flip-panel'>
   <CardContent className='front card'>
    <div style={imageContainer}>
     <CardMedia
      component='img'
      sx={{width: 80, height: 80, display: 'unset'}}
      image={frontLeftImage}
      alt='Image Not found'
      style={leftImage}
     />
     <span style={spacer}/>
     <IconButton
      color="secondary"
      style={favIcon}
      sx={{position: 'absolute'}}
      onClick={toggleFav}
     >
      <FavoriteBorderIcon sx={{color: pink[500]}}/>
     </IconButton>
    </div>
    <div>
     <p style={textStyle.title}>{frontTitleText}</p>
     <p style={textStyle.content}>{frontContentText}</p>
    </div>
    <div
     style={bottomStyle}>
     <span>
      sang
     </span>
     <span>
      &gt;
     </span>
    </div>
   </CardContent>
   <CardContent className='back card'>
    <CardMedia
     component='img'
     sx={{width: 180, height: 180}}
     image={backImage}
     alt='Image Not found'
    />
    <span>{backContentText}</span>
   </CardContent>
  </Card>
 );
};
export default FlipCard;

const bottomStyle = {
 flex: 1,
 display: 'flex',
 justifyContent: 'space-between',
 size: 13,
 color: '#8c8c8c',
 marginBottom: 16,
 marginTop: 11
}

const textStyle = {
 title: {
  size: 13,
  color: '#c8c8c8',
  textAlign: 'left' as 'left',
  marginBottom: 12
 },
 content: {
  fontWeight: 600,
  size: 14,
  width: 190,
  height: 92,
  textAlign: 'left' as 'left',
  textOverflow: 'ellipsis',
  overflow: 'auto',
  margin: 0
 }
};

const imageContainer = {
 flex: 1,
 display: 'flex',
};

const leftImage = {
 borderRadius: '8px',
 flex: 1,
};
const spacer = {
 flex: 1,
};
const favIcon = {
 top: 0,
 right: 0,
 flex: 1
};

function toggleFav() {

}

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
