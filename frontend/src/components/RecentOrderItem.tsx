import { makeStyles } from '@material-ui/core';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {
  Container,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Fragment, MouseEvent, ReactNode } from 'react';
interface PropsData {
	onChange: (
		event: MouseEvent<HTMLElement> | SelectChangeEvent<string> | any,
		newValue: string | ReactNode | any
	) => void;
	rangeValue?: string;
	floorValue?: string;
	itemValue?: string;
	sortValue?: string;
}
const useStyles = makeStyles((theme) => ({
	toggleBtn: {
		'& .Mui-selected': {
			backgroundColor: 'transparent !important',
		},
		'& .MuiToggleButton-root:hover': {
			backgroundColor: 'transparent !important',
		},
	},
}));
const RecentOrderTitleItem = ({
	onChange,
	floorValue,
	itemValue,
}: PropsData) => {
	const classes = useStyles();
	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				px: '0px !important',
				ml: '40px',
				mr: '16px',
				backgroundColor: 'white',
			}}>
			<Fragment>
				<ToggleButtonGroup
					value={itemValue}
					onChange={(event: MouseEvent<HTMLElement>, newValue: string) =>
						onChange(event, newValue)
					}
					exclusive={true}
					className={classes.toggleBtn}
					color='primary'
					sx={{ border: 'none' }}>
					{['과자', '음료'].map((item, idx) => (
						<ToggleButton
							key={idx}
							sx={{
								border: 'none',
								backgroundColor: 'transparent',
								p: 0,
								'&.Mui-selected': { color: '#21CAFF' },
								'&:first-of-type': { mr: '32px' },
							}}
							value={item}
							disableFocusRipple
							disableRipple>
							{item}
						</ToggleButton>
					))}
				</ToggleButtonGroup>
			</Fragment>
			<Fragment>
				<ToggleButtonGroup
					value={floorValue}
					onChange={(event: MouseEvent<HTMLElement>, newValue: string) =>
						onChange(event, newValue)
					}
					exclusive={true}
					className={classes.toggleBtn}
					color='primary'
					sx={{ border: 'none' }}>
					{['3F', '5F', '11F'].map((floor, idx) => (
						<ToggleButton
							key={idx}
							sx={{
								border: 'none',
								backgroundColor: 'transparent',
								p: 0,
								'&.Mui-selected': { color: '#21CAFF' },
								'&:nth-of-type(2)': { mx: '32px !important' },
							}}
							value={floor}
							disableFocusRipple
							disableRipple>
							{floor}
						</ToggleButton>
					))}
				</ToggleButtonGroup>
			</Fragment>
		</Container>
	);
};
const RecentOrderActionItem = ({
	onChange,
	rangeValue,
	sortValue,
}: PropsData) => {
	const rangeOptions = [
		{ time: '1', date: '2022-06-30', name: 'range' },
		{ time: '2', date: '2022-07-15', name: 'range' },
		{ time: '3', date: '2022-07-23', name: 'range' },
	];
	const sortOptions = [
		{ value: '최근 주문 순', name: 'sort' },
		{ value: '좋아요 순', name: 'sort' },
	];
	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				p: '16px 45px 16px 40px',
			}}>
			<Select
				onChange={(event: SelectChangeEvent<string>, newValue: ReactNode) =>
					onChange(event, newValue)
				}
				value={rangeValue}
				IconComponent={() => (
					<KeyboardArrowDownRoundedIcon
						sx={{ color: '#8C8C8C', fontSize: '16px' }}
					/>
				)}
				sx={{ p: '8px 16px 8px 10px', '& > .MuiInputBase-input': { p: 0 }, border: '1px solid #E0E0E0', 'fieldset': { display: 'none' } }}>
				{rangeOptions.map((data, idx) => (
					<MenuItem
						key={idx}
						value={`${data.time}회 / ${data.date}`}>{`${data.time}회 / ${data.date}`}</MenuItem>
				))}
			</Select>
			<Select
				onChange={(event: SelectChangeEvent<string>, newValue: ReactNode) =>
					onChange(event, newValue)
				}
				value={sortValue}
				IconComponent={() => (
					<KeyboardArrowDownRoundedIcon
						sx={{ color: '#8C8C8C', fontSize: '16px' }}
					/>
				)}
				sx={{ p: '8px 16px 8px 10px', '& > .MuiInputBase-input': { p: 0 }, border: '1px solid #E0E0E0', 'fieldset': { display: 'none' } }}>
				{sortOptions.map((data, idx) => (
					<MenuItem sx={{p: 0, 'ul': {p: 0}}}key={idx} value={data.value}>
						{data.value}
					</MenuItem>
				))}
			</Select>
		</Container>
	);
};

export { RecentOrderTitleItem, RecentOrderActionItem };

