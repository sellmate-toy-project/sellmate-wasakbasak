import styled from 'styled-components';
import FlipCard from "./FlipCard";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Button from "@material-ui/core/Button";
import {TabPanel} from "@mui/lab";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    makeStyles,
    Tabs,
    Typography
} from "@mui/material";
import Review from "./Review";
import ReviewItem from "./ReviewItem";
import classes from "*.module.css";

const BestReview = () => {
    const CardData = [
        {
            leftImage: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220613_1095%2Fupload_1655099079990EKeR0.jpg%22&type=nf464_260',
            rightImage: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
            backImage: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
            frontText: 'Lorem ipsum dolor sit amet, consectetur ipiscing Comment Quis diam nulla sit dictum vulputate. Consequat mauris, diam urna risus. Nibh faucibus mi urna malesuada feugiat',
            backText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.'
        },
        {
            leftImage: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220613_1095%2Fupload_1655099079990EKeR0.jpg%22&type=nf464_260',
            rightImage: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
            backImage: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
            frontText: 'Lorem ipsum dolor sit amet,consectetur ipiscing Comment Quis diam nulla sit dictum vulputate. Consequat mauris, diam urna risus. Nibh faucibus mi urna malesuada feugiat',
            backText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.'
        },
        {
            leftImage: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220613_1095%2Fupload_1655099079990EKeR0.jpg%22&type=nf464_260',
            rightImage: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
            backImage: 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228',
            frontText: 'Lorem ipsum dolor sit amet,consectetur ipiscing Comment Quis diam nulla sit dictum vulputate. Consequat mauris, diam urna risus. Nibh faucibus mi urna malesuada feugiat',
            backText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed enim, integer tincidunt metus.'
        },
    ];

    const ReviewData = [
        {
            image: '',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est eu eu morbi curabitur.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, ac phasellus vitae metus, risus in urna, faucibus amet. Viverra amet a tristique augue quis gravida ipsum. Netus arcu risus eu est suspendisse dapibus nisi scelerisque.',
            like: '4',
        },
        {
            image: '',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est eu eu morbi curabitur.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, ac phasellus vitae metus, risus in urna, faucibus amet. Viverra amet a tristique augue quis gravida ipsum. Netus arcu risus eu est suspendisse dapibus nisi scelerisque.',
            like: '3',
        }
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
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
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

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <BestReviewWrapper>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Snack" {...a11yProps(0)} />
                        <Tab label="Drink" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <Button variant='text' size='small' onClick={handleClickOpen}>
                    View all
                </Button>
                <Dialog
                    maxWidth={'md'}
                    PaperProps={{ sx: { width: "800px", height: "940px" } }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                            <b>{"Best review"}</b>

                            <span>snack</span>
                            /
                            <span>drink</span>
                    </DialogTitle>
                    <div>
                        <span style={dateRange}>all</span>
                        <span style={dateRange}>this month</span>
                        <span style={dateRange}>last month</span>
                    </div>
                    <DialogContent>
                        {
                            ReviewData.map((data, index) => (
                                    <ReviewItem
                                        image={data.image}
                                        title={data.title}
                                        content={data.content}
                                        like={data.like}
                                    />
                                )
                            )
                        }
                    </DialogContent>
                </Dialog>
                <TabPanel value={value} index={0}>
                {
                    CardData.map((data, index) => (
                            <FlipCard
                                frontLeftImage={data.leftImage}
                                frontRightImage={data.rightImage}
                                backContentText={data.backText}
                                frontContentText={data.frontText}
                                backImage={data.backImage}
                            />
                        )
                    )
                }
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

const dateRange = {
    marginLeft: '24px'
}
