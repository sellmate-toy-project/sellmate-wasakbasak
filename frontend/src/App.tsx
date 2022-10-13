import { Route, Routes,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import LeftContainer from './components/LeftContainer';
import Login from './components/Login';
import Main from './components/Main';
import RightContainer from './components/RightContainer';
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const localData:string|null = localStorage.getItem('user')
    if(!Object.values(JSON.parse(localData || '{}')).length) {
      navigate('/login')
    }
  }, [])
	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={
						<Home>
              <HeaderWrapper>
							  <Header />
              </HeaderWrapper>
							<Werapper>
								<LeftContainer />
								<Main />
								<RightContainer />
							</Werapper>
						</Home>
					}
				/>
				<Route path='login' element={<Login />} />
			</Routes>
		</div>
	);
};

export default App;
const Home = styled.div`
	text-align: center;
	font-family: Pretendard;
  background-color: #F2F5F5;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;
const HeaderWrapper = styled.div`
  margin: 0 auto;
  width: 100vw;
  display: flex;
  justify-contant: center;
  background-color: white;
`;
const Werapper = styled.div`
	margin: 24px auto 0 auto;
  width: calc(1920px - 240px);
	display: flex;
	justify-contant: center;
`;
	// width: 1680px;
