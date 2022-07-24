import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';
import { useState } from 'react';
import Item from './Item';
const useStyles = makeStyles((theme) => ({
	list: {
		width: '100%',
		padding: ' 20px',
		boxSizing: 'border-box',
		backgroundColor: 'white',
		borderRadius: '16px',
	},
	inline: {
		display: 'inline',
	},
	paddingNone: {
		padding: 0,
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '20px',
		'& > span': {
			fontWeight: 700,
			fontSize: '16px',
			height: '26px',
			width: '87px',
			lineHeight: '26px',
		},
	},
}));

const RecentOrder = () => {
	const classes = useStyles();
	const recentOrderData = [
		{
			img: '/static/images/avatar/1.jpg',
			title: '[피코크] 초콜릿 샌드위치 비스킷 135g 초콜릿 샌드위치 비스킷 135g',
			price: '2,980',
			count: '2',
		},
		{
			img: '/static/images/avatar/2.jpg',
			title: '[오리온] 후레쉬 베리',
			price: '5,120',
			count: '2',
		},
		{
			img: '/static/images/avatar/3.jpg',
			title: '[크라운] 쿠크다스 케이크 154g',
			price: '2,080',
			count: '3',
		},
		{
			img: '/static/images/avatar/3.jpg',
			title: '오레오 화이트크림 샌드위치 쿠키100g',
			price: '1,280',
			count: '3',
		},
		{
			img: '/static/images/avatar/3.jpg',
			title: '[농심] 포테토칩 오리지널 4번들',
			price: '3,180',
			count: '4',
		},
		{
			img: '/static/images/avatar/3.jpg',
			title: '[CJ] 맛밤 60g*4번들',
			price: '6,480',
			count: '2',
		},
		{
			img: '/static/images/avatar/3.jpg',
			title: '[라라스윗] 생우유 모나카 (140ml*4입)',
			price: '9,400',
			count: '2',
		},
	];
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	return (
		<List className={classes.list} disablePadding={true}>
			<div className={classes.title}>
				<span>최근 주문내역</span>
				<Button
					variant='text'
					size='small'
					onClick={handleClickOpen}
					disableFocusRipple
					disableRipple
					sx={{
						p: 0,
						width: '40px',
						height: '26px',
						fontWeight: '600',
						fontSize: '14px',
						color: '#8C8C8C',
						'&:hover': {
							backgroundColor: 'transparent !important',
						},
					}}>
					더 보기
				</Button>
			</div>
			{recentOrderData.map((items, idx) => (
				<Item
					title={items.title}
					img={{
						src: items.img,
						style: { width: '90px', height: '90px' },
					}}
					text={{
						display: true,
						content: `<span style="display: block; height: 30px; line-height: 30px; background-color: #F5F5F5; padding: 4px 16px; border-radius: 16px"><span style="color: #181818;">${items.count}개</span><span style="color: #888888;"> / </span><span style="color: #8C8C8C;"> 개당 </span><span style="color: #181818;">${items.price}원</span></span>`,
					}}
					rank={{ display: false }}
					key={idx}
				/>
			))}
		</List>
	);
};
export default RecentOrder;
