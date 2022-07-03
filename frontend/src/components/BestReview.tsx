import { Tabs, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import React from 'react';
import styled from 'styled-components';
import FlipCard from './FlipCard';

const BestReview = () => {
	const CardData = [
		{
			leftImage:
				'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220613_1095%2Fupload_1655099079990EKeR0.jpg%22&type=nf464_260',
			rightImage:
				'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
			backImage:
				'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
			frontText:
				'Lorem ipsum dolor sit amet, consectetur ipiscing Comment Quis diam nulla sit dictum vulputate. Consequat mauris, diam urna risus. Nibh faucibus mi urna malesuada feugiat',
			backText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
		},
		{
			leftImage:
				'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220613_1095%2Fupload_1655099079990EKeR0.jpg%22&type=nf464_260',
			rightImage:
				'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
			backImage:
				'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
			frontText:
				'Lorem ipsum dolor sit amet,consectetur ipiscing Comment Quis diam nulla sit dictum vulputate. Consequat mauris, diam urna risus. Nibh faucibus mi urna malesuada feugiat',
			backText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
		},
		{
			leftImage:
				'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220613_1095%2Fupload_1655099079990EKeR0.jpg%22&type=nf464_260',
			rightImage:
				'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
			backImage:
				'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
			frontText:
				'Lorem ipsum dolor sit amet,consectetur ipiscing Comment Quis diam nulla sit dictum vulputate. Consequat mauris, diam urna risus. Nibh faucibus mi urna malesuada feugiat',
			backText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.',
		},
	];

	interface TabPanelProps {
		children?: React.ReactNode;
		index: number;
		value: number;
	}

	function TabPanel(props: TabPanelProps) {
		const { children, value, index, ...other } = props;

		return (
			<div
				role='tabpanel'
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}>
				{value === index && (
					<Box sx={{ p: 3 }}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	}

	function a11yProps(index: number) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	}

	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<BestReviewWrapper>
			<Box sx={{ width: '100%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label='basic tabs example'>
						<Tab label='Snack' {...a11yProps(0)} />
						<Tab label='Drink' {...a11yProps(1)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					{CardData.map((data, index) => (
						<FlipCard
							frontLeftImage={data.leftImage}
							frontRightImage={data.rightImage}
							backContentText={data.backText}
							frontContentText={data.frontText}
							backImage={data.backImage}
              key={index}
						/>
					))}
				</TabPanel>
			</Box>
		</BestReviewWrapper>
	);
};
export default BestReview;

const BestReviewWrapper = styled.div`
	width: 830px;
	height: 423px;
	margin-bottom: 20px;
`;
