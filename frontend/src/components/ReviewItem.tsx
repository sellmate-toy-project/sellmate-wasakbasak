import React from "react";

const ReviewItem = () => {
    return (
        <div style={itemStyle}>
            <div>
                <img style={imageStyle}/>
                <p style={likeStyle}>
                    Like 4
                </p>
            </div>
            <div style={contents}>
                <p style={contentTitleStyle}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Est eu eu morbi curabitur.</p>
                <p style={contentDescStyle}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, ac phasellus vitae metus, risus in urna, faucibus amet. Viverra amet a tristique augue quis gravida ipsum. Netus arcu risus eu est suspendisse dapibus nisi scelerisque.</p>
            </div>
        </div>
    );
};
export default ReviewItem;

const itemStyle = {
    width: "720px",
    height: "179px",
    border: "1px solid #e1e1e1",
    borderRadius: '10px',
    display: "flex"
}

const imageStyle = {
    background: '#c4c4c4',
    width: "100px",
    height: "100px",
    marginTop: "20px",
    marginLeft: "20px"
}

const contents = {
    marginLeft: "20px"
}

const contentTitleStyle = {
    fontWeight: "bold",
    fontsize: "14px",
    color: "black"
}

const contentDescStyle = {
    fontsize: "14px",
    color: "black",
    marginTop: "10px"
}


const likeStyle = {
    marginLeft: "40px"
}