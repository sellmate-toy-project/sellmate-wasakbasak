import styled from 'styled-components';
import FlipCard from "./FlipCard";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Button from "@material-ui/core/Button";
import {TabPanel} from "@mui/lab";
import {Card, Tabs, Typography} from "@mui/material";

const Review = () => {
    return (
        <BestReviewWrapper>
            <Card variant="outlined">

            </Card>
        </BestReviewWrapper>
    );
};
export default Review;

const BestReviewWrapper = styled.div`
	width: 830px;
	height: 423px;
	margin-bottom: 20px;
`;
