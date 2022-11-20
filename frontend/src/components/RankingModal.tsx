import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Typography
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MouseEvent, ReactNode, useState } from 'react';
import comment from '../icons/comment.svg';
import heartActive from '../icons/heartActive.svg';
import heartInactive from '../icons/heartInactive.svg';
import ModalLayout from './ModalLayout';
import { RankingActionItem, RankingTitleItem } from './RankingItem';
interface PropsData {
	onClose: () => void;
	open: boolean;
}
const theme = createTheme({
	palette: {
		primary: {
			main: '#181818',
		},
	},
});

const RankingModal = ({ open, onClose }: PropsData) => {
	const [itemValue, setItemValue] = useState('과자');
	const [floorValue, setFloorValue] = useState('3F');
	const [recentOrderData, setRecentOrderData] = useState([
		{
			title: '크라운 카라멜콘 메이플 154g',
			orderCount: 2,
			price: 5960,
			img: '',
		},
	]);
	const handleTitleChange = (
		event: MouseEvent<HTMLElement>,
		newValue: string
	) => {
		const value = event.target as HTMLButtonElement;
		if (['과자', '음료'].some((v) => v.includes(value.value))) {
			setItemValue(value.value);
			if (value.value === '과자') {
				setRecentOrderData([
					{
						title: '크라운 카라멜콘 메이플 154g',
						orderCount: 2,
						price: 5960,
						img: '',
					},
				]);
			} else {
				setRecentOrderData([
					{
						title: '하늘보리 250ml',
						orderCount: 2,
						price: 2000,
						img: '',
					},
				]);
			}
		} else {
			setFloorValue(value.value);
		}
	};
	const [rangeValue, setRangeValue] = useState('all');
	const [sortValue, setSortValue] = useState('최근 주문 순');
	const [activeCount, setActiveCount] = useState(0);

	const handleRangeChange = (
		event: SelectChangeEvent<string>,
		newValue: ReactNode
	) => {
		const value = event.target as HTMLButtonElement;
		if (['최근 주문 순', '좋아요 순'].some((v) => v.includes(value.value))) {
			setSortValue(value.value);
		} else {
			setRangeValue(value.value as string);
		}
	};
	const [iconValue, setIconValue] = useState('inactive');
	const toggleActive = (
		event: React.MouseEvent<HTMLButtonElement>,
		newValue: string
	) => {
		if (newValue === 'active') {
			console.log('좋아요 취소');
			setIconValue('inactive');
			setActiveCount(activeCount - 1);
		} else {
			console.log('좋아요 누름');
			setActiveCount(activeCount + 1);
			setIconValue('active');
		}
	};
	return (
		<ModalLayout
			onClose={onClose}
			open={open}
			title={'랭킹'}
			titleChildren={
				<RankingTitleItem
					onChange={(event: MouseEvent<HTMLElement>, newValue: string) =>
						handleTitleChange(event, newValue)
					}
					floorValue={floorValue}
					itemValue={itemValue}
				/>
			}
			actionChildren={
				<RankingActionItem
					onChange={(event: SelectChangeEvent<string>, newValue: ReactNode) =>
						handleRangeChange(event, newValue)
					}
					sortValue={sortValue}
					rangeValue={rangeValue}
				/>
			}>
			<ThemeProvider theme={theme}>
				<List className='padding-none'>
					{recentOrderData.map((item, idx) => (
						<ListItem className='padding-none' key={idx}>
							<ListItemAvatar>
								<Avatar
									src={item.img}
									sx={{
										width: '120px',
										height: '120px',
										borderRadius: '8px',
										marginRight: '24px',
									}}
								/>
							</ListItemAvatar>
							<ListItemText
								className='margin-none'
								style={{ color: 'primary' }}
								primary={
									<label style={{ display: 'block' }}>
										<strong>{item.title}</strong>
										<pre>{item.orderCount}개 주문</pre>
									</label>
								}
								secondary={
									<label>
										<strong style={{ color: '#181818' }}>
											{item.price.toLocaleString()} 원
										</strong>
										<span>
											{' '}
											/ 개당{' '}
											{(Number(item.price) / item.orderCount).toLocaleString()}
											원
										</span>
									</label>
								}></ListItemText>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									backgroundColor: 'white',
									width: '92px',
									height: '120px',
									textTransform: 'none',
									p: 0,
									boxSizing: 'border-box',
									border: '1px solid #E0E0E0',
									borderRadius: '8px',
								}}>
								<IconButton
									onClick={(event) => toggleActive(event, iconValue)}
									disableFocusRipple
									disableRipple
									id='loginBtn'
									sx={{
										width: '22px',
										height: '20px',
										p: 0,
									}}>
									{iconValue === 'active' ? heartActive : heartInactive}
								</IconButton>
								<Typography
									sx={{
										width: '100%',
										fontSize: '15px',
										fontWeight: 500,
										color: '#181818',
										m: '10px 0 0 0',
									}}
									align='center'
									variant='body1'>
									{activeCount}
								</Typography>
								<Divider
									sx={{
										width: '100%',
										height: '1px',
										bottom: '43px',
										margin: '10px 0',
									}}
								/>
								<Button
									disableFocusRipple
									disableRipple
									disableElevation
									startIcon={comment}
									className='transparent'
									sx={{
										p: 0,
										width: '40px',
										height: '24px',
										color: '#8C8C8C',
										'.MuiButton-startIcon': {
											width: '16px',
											height: '16px',
											mr: '8px',
										},
									}}
									variant='text'>
									12
								</Button>
							</Box>
						</ListItem>
					))}
				</List>
			</ThemeProvider>
		</ModalLayout>
	);
};
export default RankingModal;
