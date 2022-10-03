import styled from 'styled-components';
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";

const AllSnack = () => {
	return <AllSnackWrapper>
		<span>
			찾는 간식이 있나요?
		</span>
		<TextField
			variant='outlined'
			placeholder='당신이 찾고 싶은 간식의 이름은~?'
		/>
		<Button>
			간식 전체보기
		</Button>
	</AllSnackWrapper>;
};
export default AllSnack;

const AllSnackWrapper = styled.div`
	width: 830px;
	height: 125px;
	margin-bottom: 20px;
`;
