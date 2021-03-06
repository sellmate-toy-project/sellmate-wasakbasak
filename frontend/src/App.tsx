import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import LeftContainer from './components/LeftContainer';
import Login from './components/Login';
import Main from './components/Main';
import RightContainer from './components/RightContainer';
const App = () => {
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
  width: 100%;
`;
const HeaderWrapper = styled.div`
  padding: 0 120px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-contant: center;
  background-color: white;
`;
const Werapper = styled.div`
	margin: 24px auto 0 auto;
  padding: 0 120px;
	display: flex;
	justify-contant: center;
`;
	// width: 1680px;
