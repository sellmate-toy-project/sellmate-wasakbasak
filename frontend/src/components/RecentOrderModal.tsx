import { Paper } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { MouseEvent, ReactNode, useState } from 'react';
import ModalLayout from './ModalLayout';
import { RecentOrderActionItem, RecentOrderTitleItem } from './RecentOrderItem';
interface PropsData {
	onClose: () => void;
	open: boolean;
}
const RecentOrderModal = ({open, onClose}: PropsData) => {
	const itemOptions = [
		{ title: '과자', value: 'snack' },
		{ title: '음료', value: 'drink' },
	];
	const [itemValue, setItemValue] = useState('과자');
	const [floorValue, setFloorValue] = useState('3F');
	const handleTitleChange = (
		event: MouseEvent<HTMLElement>,
		newValue: string
	) => {
		const value = event.target as HTMLButtonElement;
		if (itemOptions.some((v) => v.title.includes(value.value))) {
			setItemValue(value.value);
		} else {
			if (newValue !== null) {
				setFloorValue(newValue);
			}
		}
	};
	const [rangeValue, setRangeValue] = useState('1회 / 2022-06-30');
	const handleRangeChange = (
		event: SelectChangeEvent<string>,
		newValue: ReactNode
	) => {
		setRangeValue(event.target.value as string);
		console.log(event.target.value as string);
	};
	return (
		<ModalLayout
			onClose={onClose}
			open={open}
			title={'최근 주문내역'}
			titleChildren={
				<RecentOrderTitleItem
					onChange={(event: MouseEvent<HTMLElement>, newValue: string) =>
						handleTitleChange(event, newValue)
					}
					floorValue={floorValue}
					itemValue={itemValue}
				/>
			}
			actionChildren={
				<RecentOrderActionItem
					onChange={(event: SelectChangeEvent<string>, newValue: ReactNode) =>
						handleRangeChange(event, newValue)
					}
					rangeValue={rangeValue}
				/>
			}>
			{itemValue === '과자' ? (
				<Paper elevation={0}>

        </Paper>
			) : (
				<Paper elevation={0}>음료 리스트</Paper>
			)}
		</ModalLayout>
	);
};
export default RecentOrderModal;
