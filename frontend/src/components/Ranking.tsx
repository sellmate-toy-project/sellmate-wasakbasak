import { Button, makeStyles } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Box,
  List,
  Paper,
  Tab,
  ToggleButton,
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
	},
	inline: {
		display: 'inline',
	},
	listImg: {
		width: '80px',
		height: '80px',
		marginTop: 0,
		marginRight: '16px',
	},
	itemImg: {
		width: '100%',
		height: '100%',
		borderRadius: 0,
	},
	paddingNone: {
		padding: 0,
	},
	title: {
		display: 'flex',
		alignItems: 'center',
		// marginBottom: '20px',
	},
	spacing: {
		padding: '0 20px 20px',
	},
  toggleBtn: {
		'& .Mui-selected': {
			backgroundColor: 'transparent !important',
		},
		'& .MuiToggleButton-root:hover': {
			backgroundColor: 'transparent !important',
		},
	},
}));

export default function Ranking() {
	const classes = useStyles();
	const floorsRankingData = {
		floor3: [
			{
				img: '/static/images/avatar/1.jpg',
				name: 'floor3',
				text: "I'll be in your neighborhood doing errands this…",
			},
			{
				img: '/static/images/avatar/2.jpg',
				name: 'floor3',
				text: "Wish I could come, but I'm out of town this…",
			},
			{
				img: '/static/images/avatar/3.jpg',
				name: 'floor3',
				text: 'Do you have Paris recommendations? Have you ever…',
			},
		],
		floor5: [
			{
				img: '/static/images/avatar/1.jpg',
				name: 'floor5',
				text: "I'll be in your neighborhood doing errands this…",
			},
			{
				img: '/static/images/avatar/2.jpg',
				name: 'floor5',
				text: "Wish I could come, but I'm out of town this…",
			},
			{
				img: '/static/images/avatar/3.jpg',
				name: 'floor5',
				text: 'Do you have Paris recommendations? Have you ever…',
			},
		],
		floor11: [
			{
				img: '/static/images/avatar/1.jpg',
				name: 'floor11',
				text: "I'll be in your neighborhood doing errands this…",
			},
			{
				img: '/static/images/avatar/2.jpg',
				name: 'floor11',
				text: "Wish I could come, but I'm out of town this…",
			},
			{
				img: '/static/images/avatar/3.jpg',
				name: 'floor11',
				text: 'Do you have Paris recommendations? Have you ever…',
			},
		],
	};

	const [tabValue, setTabValue] = useState('snack');
	const [rangeValue, setRangeValue] = useState('all');

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
	const clickFloorBtn = (floor: string) => {
		console.log(floor);
	};
  const handleRangeChange = (event: MouseEvent<HTMLElement>, newValue: string) =>{
    if (newValue !== null) {
			setRangeValue(newValue);
		}
  }
	return (
		<TabContext value={tabValue}>
			<div className={classes.spacing}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}>
					<div className={classes.title}>
						Ranking
						<TabList
							value={tabValue}
							onChange={handleChange}
							variant='scrollable'>
							<Tab label='snack' value='snack' />
							<Tab label='drink' value='drink' />
						</TabList>
					</div>
					<Button
						variant='text'
						size='small'
						className={classes.paddingNone}
						onClick={handleClickOpen}>
						View all
					</Button>
					<ModalLayout
						onClose={handleClose}
						open={open}
						changeFloor={clickFloorBtn}
						title={tabValue === 'snack' ? 'Ranking Snack' : 'Ranking Drink'}
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
									<ToggleButton
										sx={{ border: 'none', backgroundColor: 'transparent' }}
										value='all'
										disableFocusRipple
										disableRipple>
										all
									</ToggleButton>
									<ToggleButton
										sx={{ border: 'none', backgroundColor: 'transparent' }}
										value='this month'
										disableFocusRipple
										disableRipple>
										this month
									</ToggleButton>
									<ToggleButton
										sx={{ border: 'none', backgroundColor: 'transparent' }}
										value='last month'
										disableFocusRipple
										disableRipple>
										last month
									</ToggleButton>
								</ToggleButtonGroup>
								<Dropdown options={['주문 수량 순', '공감 순']} />
							</Fragment>
						}>
						{tabValue === 'snack' ? (
							<Paper elevation={0}>snack</Paper>
						) : (
							<Paper elevation={0}>drink</Paper>
						)}
					</ModalLayout>
				</Box>
				<TabPanel value='snack' sx={{ padding: 0, display: 'flex' }}>
					{Object.values(floorsRankingData).map((floor, index) => (
						<List className={classes.list} disablePadding={true} key={index}>
							{floor.map((items, idx) => (
								<Item
									name={items.name}
									img={items.img}
									text={items.text}
									badge={{ display: true, content: idx + 1 }}
									key={idx}
								/>
							))}
						</List>
					))}
				</TabPanel>
				<TabPanel value='drink' sx={{ padding: 0, display: 'flex' }}>
					{Object.values(floorsRankingData).map((floor, idx) => (
						<List className={classes.list} disablePadding={true} key={idx}>
							{floor.map((items, idx) => (
								<Item
									name={items.name}
									img={items.img}
									text={items.text}
									badge={{ display: false }}
									key={idx}
								/>
							))}
						</List>
					))}
				</TabPanel>
			</div>
		</TabContext>
	);
}
