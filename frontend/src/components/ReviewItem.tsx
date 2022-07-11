import React from "react";

type ReviewItemProp = {
    image: string,
    title: string,
    content: string,
    like: string,
}

const ReviewItem: React.FC<ReviewItemProp> = ({image, title, content, like}) => {
    return (
        <div style={itemStyle}>
            <div>
                <img style={imageStyle}/>
                <p style={likeStyle}>
                    Like {like}
                </p>
            </div>
            <div style={contents}>
                <p style={contentTitleStyle}>{title}</p>
                <p style={contentDescStyle}>{content}</p>
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
    display: "flex",
    marginTop: "20px"
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