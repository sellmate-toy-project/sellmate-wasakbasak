import styled from 'styled-components';
import Button from "@mui/material/Button";
import {Box, Dialog, DialogContent, DialogTitle, TextField} from "@mui/material";
import ReviewItem from "./ReviewItem";
import {useState} from "react";
import AllSnackCard from "./AllSnackCard";

const AllSnack = () => {
 const [open,  setOpen] = useState(false);

 const handleClickOpen = () => {
  setOpen(true);
 };

 const handleClose = () => {
  setOpen(false);
 };

	return <AllSnackWrapper>
  <TopWrapper>
   <span>
    찾는 간식이 있나요?
   </span>
   <Button onClick={handleClickOpen}>
    간식 전체보기
   </Button>
  </TopWrapper>
  <div>
   <TextField
    variant='outlined'
    placeholder='당신이 찾고 싶은 간식의 이름은~?'
   />
  </div>
  <Dialog
   maxWidth={'md'}
   PaperProps={{sx: {width: "1260px", height: "3472px"}}}
   open={open}
   onClose={handleClose}
   aria-labelledby="alert-dialog-title"
   aria-describedby="alert-dialog-description"
  >
   <DialogTitle id="alert-dialog-title">
    <b>All Snack</b>
   </DialogTitle>
   <DialogContent>
    <AllSnackCard frontImage={'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220613_1095%2Fupload_1655099079990EKeR0.jpg%22&type=nf464_260'} frontTitleText={"dd"}/>
   </DialogContent>
  </Dialog>
	</AllSnackWrapper>

};
export default AllSnack;

const TopWrapper = styled.div `
 display: 'flex',
 justifyContent: 'space-between',
`

const AllSnackWrapper = styled.div`
	width: 830px;
	height: 128px;
	margin-bottom: 20px;
	background: #FFFFFF;
`;
