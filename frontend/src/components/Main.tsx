import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AllSnack from './AllSnack';
import BestReview from './BestReview';
import Ranking from './Ranking';

const Main = () => {
	const navigate = useNavigate();
  useEffect(() => {
    const localData:string|null = localStorage.getItem('user')
    if(!Object.values(JSON.parse(localData || '{}')).length) {
      navigate('/login')
    }
  })
	return (
		<div>
			<MainContainer>
        <Ranking />
        <BestReview />
        <AllSnack />
      </MainContainer>
		</div>
	);
};
export default Main;

const MainContainer = styled.div`
	width: 830PX;
	height: 100vh;
	margin: 0 20px;
`;
