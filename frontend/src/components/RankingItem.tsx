import { makeStyles } from '@material-ui/core';
import { Container, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Fragment, MouseEvent } from 'react';
import Dropdown from './Dropdown';

interface PropsData {
	onChange: (event: MouseEvent<HTMLElement>, newValue: string) => void;
	rangeValue?: string;
	floorValue?: string;
  itemValue?: string;
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
const RankingActionItem = ({ onChange, rangeValue }: PropsData) => {
	const rangeOptions = [
		{ title: '전체', value: 'all' },
		{ title: '이번 달', value: 'this month' },
		{ title: '저번 달', value: 'last month' },
	];
	const classes = useStyles();

	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				p: '16px 45px 16px 40px',
			}}>
			<ToggleButtonGroup
				value={rangeValue}
				onChange={(event: MouseEvent<HTMLElement>, newValue: string) =>
					onChange(event, newValue)
				}
				exclusive={true}
				className={classes.toggleBtn}
				color='primary'
				sx={{ border: 'none' }}>
				{rangeOptions.map((date, idx) => (
					<ToggleButton
						sx={{
							border: 'none',
							backgroundColor: 'transparent',
							p: 0,
							'&:nth-of-type(2)': { mx: '32px !important' },
						}}
						value={date.value}
						disableFocusRipple
						disableRipple
						key={idx}>
						{date.title}
					</ToggleButton>
				))}
			</ToggleButtonGroup>
			<Dropdown options={['주문 수량 순', '좋아요 순']} />
		</Container>
	);
};
const RankingTitleItem = ({ onChange, floorValue, itemValue }: PropsData) => {
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

export { RankingActionItem, RankingTitleItem };

