import { makeStyles } from '@material-ui/core';
import { TabContext, TabPanel } from '@mui/lab';
import {
  Box,
  Button,
  List,
  Paper, Tab, Tabs, ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { Fragment, MouseEvent, SyntheticEvent, useState } from 'react';
import Dropdown from './Dropdown';
import Item from './Item';
import ModalLayout from './ModalLayout';

const useStyles = makeStyles((theme) => ({
	list: {
		width: '100%',
		padding: '20px',
		boxSizing: 'border-box',
    display: 'flex',
	},
	inline: {
		display: 'inline',
	},
	listImg: {
		width: '92px',
		height: '92px',
		marginTop: 0,
		marginRight: '16px',
	},
	itemImg: {
		width: '100%',
		height: '100%',
		borderRadius: 0,
	},
	paddingNone: {
		padding: '0 !important',
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '20px',
	},
	spacing: {
		padding: '0 20px 20px',
	},
	toggleBtn: {
		'& .MuiToggleButton-root': {
			borderColor: '#C0C8D3',
			color: 'rgba(51, 63, 82, 0.3) !important',
			'&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
				marginLeft: 0,
			},
		},
		'&> .Mui-selected': {
			backgroundColor: '#F5F6F7 !important',
			color: '#333F52 !important',
			fontWeight: 600,
			fontSize: '14px',
		},
	},
	button: {
		color: '#333F52 !important',
		'&:hover': {
			backgroundColor: 'transparent !important',
		},
	},
  itemsClass : {
    padding: '20px !important',
    border: '1px solid #F1F1F1',
    marginRight: '20px',
    '&:last-of-type': {
      marginRight: 0,
    },
    '& .ranking-text': {
      padding: '4px 20px',
      borderRadius: '4px',
      color: 'white',
    },
    '& .title-text': {
      fontSize: '12px',
    },
  },
  tabs:{
    '& .MuiTabs-indicator': {
      backgroundColor: '#56AEFF !important',
    },
  },
  tab: {
    color: '#333F52 !important',
    padding: '0 !important',
    width: '20px !important',
    height: '23px !important',
    minHeight: '0 !important',
    minWidth: '0 !important',
    marginRight: '24px !important',
    '&:last-of-type':{
      marginRight: '0 !important',
      letterSpacing: '0px',
    },
  },
}));

export default function Ranking() {
	const classes = useStyles();
	const floorsRankingData = {
		'3F': [
			{
				img: '/static/images/avatar/3.jpg',
				title: '오레오 화이트크림 샌드위치 쿠키100g',
				text: '1,280 원',
			},
			{
				img: '/static/images/avatar/3.jpg',
				title: '[농심] 포테토칩 오리지널 4번들',
				text: '3,180 원',
			},
			{
				img: '/static/images/avatar/3.jpg',
				title: '[CJ] 맛밤 60g*4번들',
				text: '6,480 원',
			},
		],
		'5F': [
			{
				img: '/static/images/avatar/1.jpg',
				title:
					'[피코크] 초콜릿 샌드위치 비스킷 135g 초콜릿 샌드위치 비스킷 135g',
				text: '2,980 원',
			},
			{
				img: '/static/images/avatar/3.jpg',
				title: '[크라운] 쿠크다스 케이크 154g',
				text: '2,080 원',
			},
			{
				img: '/static/images/avatar/3.jpg',
				title: '[라라스윗] 생우유 모나카 (140ml*4입)',
				text: '9,400 원',
			},
		],
		'11F': [
			{
				img: '/static/images/avatar/1.jpg',
				title:
					'[피코크] 초콜릿 샌드위치 비스킷 135g 초콜릿 샌드위치 비스킷 135g',
				text: '2,980 원',
			},
			{
				img: '/static/images/avatar/2.jpg',
				title: '[오리온] 후레쉬 베리',
				text: '5,120 원',
			},
			{
				img: '/static/images/avatar/3.jpg',
				title: '[크라운] 쿠크다스 케이크 154g',
				text: '2,080 원',
			},
		],
	};

	const [tabValue, setTabValue] = useState('3F');
	const [rangeValue, setRangeValue] = useState('all');
	const [itemValue, setItemValue] = useState('snack');

	const handleChange = (event: SyntheticEvent, newValue: string) => {
		setTabValue(newValue);
	};
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};
	const handleClickOpen = () => {
		setOpen(true);
	};
	const clickItemBtn = (item: string) => {
		console.log(item);
	};
	const handleRangeChange = (
		event: MouseEvent<HTMLElement>,
		newValue: string
	) => {
		if (newValue !== null) {
			setRangeValue(newValue);
		}
	};
	const handleItemChange = (
		event: MouseEvent<HTMLElement>,
		newValue: string
	) => {
		if (newValue !== null) {
			setItemValue(newValue);
		}
	};
	const itemOptions = [
		{ title: '과자', value: 'snack' },
		{ title: '음료', value: 'drink' },
	];
	const rangeOptions = [
		{ title: '전체', value: 'all' },
		{ title: '이번 달', value: 'this month' },
		{ title: '저번 달', value: 'last month' },
	];

	return (
		<TabContext value={tabValue}>
			<div>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}>
					<div className={classes.title}>
						<span style={{ fontWeight: 700, fontSize: '14px' }}>랭킹</span>
						<Button
							variant='text'
							size='small'
							className={[classes.paddingNone, classes.button].join(' ')}
							onClick={handleClickOpen}
							disableFocusRipple
							disableRipple
							sx={{
								fontWeight: '600',
								fontSize: 14,
							}}>
							+ 더보기
						</Button>
					</div>
					<div className={classes.title}>
						<ToggleButtonGroup
							value={itemValue}
							onChange={handleItemChange}
							exclusive
							className={classes.toggleBtn}
							sx={{ borderRadius: '6px' }}>
							{itemOptions.map((item, idx) => (
								<ToggleButton
									sx={{ p: '10px 20px' }}
									value={item.value}
									disableFocusRipple
									disableRipple
									key={idx}
                >
									{item.title}
								</ToggleButton>
							))}
						</ToggleButtonGroup>
						<Tabs
							value={tabValue}
							onChange={handleChange}
							variant='standard'
              style={{minHeight: 0}}
              className={classes.tabs}
            >
              {
                ['3F', '5F', '11F'].map((floor, i) => (
                  <Tab disableFocusRipple disableRipple key={i} className={classes.tab} label={floor} value={floor} />
                ))
              }
						</Tabs>
					</div>
					<ModalLayout
						onClose={handleClose}
						open={open}
						changeFloor={clickItemBtn}
						title={rangeValue === 'snack' ? 'Ranking Snack' : 'Ranking Drink'}
						actionChildren={
							<Fragment>
								{/* TODO: 컴포넌트로 빼는 작업 필요 */}
								<ToggleButtonGroup
									value={rangeValue}
									onChange={handleRangeChange}
									exclusive={true}
									className={classes.toggleBtn}
									color='primary'
									sx={{ border: 'none' }}>
									{rangeOptions.map((date, idx) => (
										<ToggleButton
											sx={{ border: 'none', backgroundColor: 'transparent' }}
											value={date.value}
											disableFocusRipple
											disableRipple
											key={idx}>
											{date.title}
										</ToggleButton>
									))}
								</ToggleButtonGroup>
								<Dropdown options={['주문 수량 순', '공감 순']} />
							</Fragment>
						}>
						{itemValue === 'snack' ? (
							<Paper elevation={0}>snack</Paper>
						) : (
							<Paper elevation={0}>drink</Paper>
						)}
					</ModalLayout>
				</Box>
				<Fragment>
					{Object.entries(floorsRankingData).map(
						([floor, valueArr], index) => (
							<TabPanel key={floor} value={floor} sx={{ padding: 0, display: 'flex' }}>
								<List
									className={classes.list}
									disablePadding={true}
									key={index}>
									{valueArr.map((items, idx) => (
										<Item
											title={items.title}
											img={{
                        src: items.img,
                        style: {width: '92px', height: '92px'},
                      }}
											text={{
												content: items.text,
												display: false,
											}}
											rank={{ display: true, content: idx + 1 }}
											key={idx}
                      itemsClass={classes.itemsClass}
                      iconColor={idx + 1 === 1 ? '#40A3FF' : idx + 1 === 2 ? '#FFA800' : '#405069'}
										/>
									))}
								</List>
							</TabPanel>
            )
					)}
				</Fragment>
			</div>
		</TabContext>
	);
}

