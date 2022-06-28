import styled from 'styled-components';
import FlipCard from "./FlipCard";
import React from "react";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import Button from "@material-ui/core/Button";

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

    return (
        <BestReviewWrapper>
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
        </BestReviewWrapper>
    );
};
export default BestReview;

const BestReviewWrapper = styled.div`
	width: 830px;
	height: 423px;
	margin-bottom: 20px;
`;
