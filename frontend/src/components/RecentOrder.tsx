import { Button, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Item from './Item';
const useStyles = makeStyles((theme) => ({
	list: {
		width: '100%',
		padding: ' 20px',
		boxSizing: 'border-box',
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
	},
}));


const RecentOrder = () => {
  const classes = useStyles();
	const recentOrderData = [
		{
			img: '/static/images/avatar/1.jpg',
			title: '[피코크] 초콜릿 샌드위치 비스킷 135g 초콜릿 샌드위치 비스킷 135g',
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
		{
			img: '/static/images/avatar/3.jpg',
			title: '[라라스윗] 생우유 모나카 (140ml*4입)',
			text: '9,400 원',
		},
	];
	return (
		<List className={classes.list} disablePadding={true}>
			<div className={classes.title}>
				<Button variant='text' size='small' className={classes.paddingNone}>
					Recent Order
				</Button>
				<Button variant='text' size='small' className={classes.paddingNone}>
					View all
				</Button>
			</div>
			{recentOrderData.map((items, idx) => (
				<Item
					title={items.title}
					img={{
            src: items.img,
            style: {width: '80px', height: '80px'},
          }}
					text={{
						content: items.text,
						display: true,
					}}
					rank={{ display: false }}
					key={idx}
				/>
			))}
		</List>
	);
};
export default RecentOrder;
