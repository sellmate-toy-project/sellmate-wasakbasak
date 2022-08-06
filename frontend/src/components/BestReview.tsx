import Button from "@material-ui/core/Button";
import { Box, Dialog, DialogContent, DialogTitle, Tab, Tabs, Typography } from '@mui/material';
import { useState } from "react";
import styled from 'styled-components';
import FlipCard from "./FlipCard";
import ReviewItem from "./ReviewItem";

const BestReview = () => {
 const CardData = [
  {
   leftImage:
    'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220613_1095%2Fupload_1655099079990EKeR0.jpg%22&type=nf464_260',
   isLike: false,
   backImage:
    'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
   frontTitle:
    '노브랜드 고르곤졸라치즈스포트콘 225g',
   frontText:
    '“ 팝콘은 언제먹어도 맛있지.\n' +
    '바삭바삭 와삭바삭 다들 먹어보세요. 한번 먹으면 멈출 수 없음 헤헤 리뷰리뷰 내용 최대 4줄표시가능...',
   backText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
  },
  {
   leftImage:
    'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220613_1095%2Fupload_1655099079990EKeR0.jpg%22&type=nf464_260',
   isLike: false,
   backImage:
    'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
   frontTitle:
    '노브랜드 고르곤졸라치즈스포트콘 225g',
   frontText:
    '“ 팝콘은 언제먹어도 맛있지.\n' +
    '바삭바삭 와삭바삭 다들 먹어보세요. 한번 먹으면 멈출 수 없음 헤헤 리뷰리뷰 내용 최대 4줄표시가능...',
   backText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
  },
  {
   leftImage:
    'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220613_1095%2Fupload_1655099079990EKeR0.jpg%22&type=nf464_260',
   isLike: false,
   backImage:
    'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
   frontTitle:
    '노브랜드 고르곤졸라치즈스포트콘 225g',
   frontText:
    '“ 팝콘은 언제먹어도 맛있지.\n' +
    '바삭바삭 와삭바삭 다들 먹어보세요. 한번 먹으면 멈출 수 없음 헤헤 리뷰리뷰 내용 최대 4줄표시가능...',
   backText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
  },
  {
   leftImage:
    'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220613_1095%2Fupload_1655099079990EKeR0.jpg%22&type=nf464_260',
   isLike: false,
   backImage:
    'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
   frontTitle:
    '노브랜드 고르곤졸라치즈스포트콘 225g',
   frontText:
    '“ 팝콘은 언제먹어도 맛있지.\n' +
    '바삭바삭 와삭바삭 다들 먹어보세요. 한번 먹으면 멈출 수 없음 헤헤 리뷰리뷰 내용 최대 4줄표시가능...',
   backText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
  },
  {
   leftImage:
    'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220613_1095%2Fupload_1655099079990EKeR0.jpg%22&type=nf464_260',
   isLike: false,
   backImage:
    'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
   frontTitle:
    '노브랜드 고르곤졸라치즈스포트콘 225g',
   frontText:
    '“ 팝콘은 언제먹어도 맛있지.\n' +
    '바삭바삭 와삭바삭 다들 먹어보세요. 한번 먹으면 멈출 수 없음 헤헤 리뷰리뷰 내용 최대 4줄표시가능...',
   backText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
  },
  {
   leftImage:
    'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220613_1095%2Fupload_1655099079990EKeR0.jpg%22&type=nf464_260',
   isLike: false,
   backImage:
    'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
   frontTitle:
    '노브랜드 고르곤졸라치즈스포트콘 225g',
   frontText:
    '“ 팝콘은 언제먹어도 맛있지.\n' +
    '바삭바삭 와삭바삭 다들 먹어보세요. 한번 먹으면 멈출 수 없음 헤헤 리뷰리뷰 내용 최대 4줄표시가능...',
   backText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
  },

 ];

 const ReviewData = [
  {
   image: '',
   title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est eu eu morbi curabitur.',
   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, ac phasellus vitae metus, risus in urna, faucibus amet. Viverra amet a tristique augue quis gravida ipsum. Netus arcu risus eu est suspendisse dapibus nisi scelerisque.',
   like: '4',
  },
  {
   image: '',
   title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est eu eu morbi curabitur.',
   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, ac phasellus vitae metus, risus in urna, faucibus amet. Viverra amet a tristique augue quis gravida ipsum. Netus arcu risus eu est suspendisse dapibus nisi scelerisque.',
   like: '3',
  }
 ];

 interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
 }

 function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
   <div
    role='tabpanel'
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}>
    {value === index && (
     <Box sx={{p: 3}}>
      <Typography component="span">{children}</Typography>
     </Box>
    )}
   </div>
  );
 }

 function a11yProps(index: number) {
  return {
   id: `simple-tab-${index}`,
   'aria-controls': `simple-tabpanel-${index}`,
  };
 }

 const [open, setOpen] = useState(false);

 const handleClickOpen = () => {
  setOpen(true);
 };

 const handleClose = () => {
  setOpen(false);
 };

 const [value, setValue] = useState(0);
 const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  setValue(newValue);
 };

 return (
  <BestReviewWrapper>
   <Box sx={{width: '100%'}}>
    <Box sx={{
     borderBottom: 1,
     borderColor: 'divider',
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-between'
    }}>
     <div style={topStyle}>
      <span
       style={{
        fontWeight: 700,
        fontSize: '16px',
        marginRight: '24px',
        alignSelf: 'center'
       }}>
       베스트 리뷰
      </span>
      <Tabs
       variant='standard'
       value={value}
       onChange={handleChange}
       style={{minHeight: 0}}
       sx={{
        fontSize: '16px',
        '& .MuiTabs-indicator': {
         display: 'none',
        },
       }}>
       <Tab
        disableFocusRipple
        disableRipple
        style={tabStyle}
        label="과자" {...a11yProps(0)}
        sx={{fontSize: '16px !important', fontWeight: '700'}}
       />
       <Tab
        disableFocusRipple
        disableRipple
        style={tabStyle}
        label="음료" {...a11yProps(1)}
        sx={{fontSize: '16px !important', fontWeight: '700'}}
       />
      </Tabs>
     </div>
     <div>
      <Button
       disableFocusRipple
       disableRipple
       size='small'
       variant="contained"
       component="label"
       color={"primary"}
      >
       리뷰 작성
      </Button>

      <Button
       disableFocusRipple
       disableRipple
       variant='text'
       size='small'
       onClick={handleClickOpen}
      >
       더 보기
      </Button>
     </div>
    </Box>

    <Dialog
     maxWidth={'md'}
     PaperProps={{sx: {width: "800px", height: "940px"}}}
     open={open}
     onClose={handleClose}
     aria-labelledby="alert-dialog-title"
     aria-describedby="alert-dialog-description"
    >
     <DialogTitle id="alert-dialog-title">
      <b>{"Best review"}</b>

      <span>snack</span>
      /
      <span>drink</span>
     </DialogTitle>
     <div>
      <span style={dateRange}>all</span>
      <span style={dateRange}>this month</span>
      <span style={dateRange}>last month</span>
     </div>
     <DialogContent>
      {
       ReviewData.map((data, index) => (
         <ReviewItem
          image={data.image}
          title={data.title}
          content={data.content}
          like={data.like}
          key={index}
         />
        )
       )
      }
     </DialogContent>
    </Dialog>
    <TabPanel
     value={value}
     index={0}
     >
     <ul style={ulStyle}>
      {
       CardData.map((data, index) => (
         <li style={{float: 'left'}} key={index}>
          <FlipCard
           frontLeftImage={data.leftImage}
           isLike={data.isLike}
           backContentText={data.backText}
           frontTitleText={data.frontTitle}
           frontContentText={data.frontText}
           backImage={data.backImage}
           key={index}
          />
         </li>
        )
       )
      }
     </ul>
    </TabPanel>
   </Box>
  </BestReviewWrapper>
 );
};
export default BestReview;

const BestReviewWrapper = styled.div`
	width: 830px;
	height: 392px;
	margin-bottom: 20px;
	background: #FFFFFF;
`;

const ulStyle = {
 margin: 0,
 padding: 0,
 listStyle: 'none',
 display: 'flex',
 overflow: 'auto',
}

const tabStyle = {
 padding: '0 !important',
 width: '30px !important',
 height: '26px !important',
 minHeight: '0 !important',
 minWidth: '0 !important',
 marginRight: '20px !important',
 '&:last-of-type': {
  marginRight: '0 !important',
 },
}

const topStyle = {
 display: 'flex'
}

const dateRange = {
 marginLeft: '24px'
}
