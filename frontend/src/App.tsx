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
							<Header />
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
`;
const Werapper = styled.div`
	margin: 0 auto;
	width: 1680px;
	padding: 22px 0 40px 0;
	display: flex;
	justify-contant: center;
`;
