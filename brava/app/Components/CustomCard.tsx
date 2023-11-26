import React from "react";
const Card = ({ url, text , color}: { url: string; text: string ; color:string}) => {
  // Fixed styles for circle and rectangle
  const cardStyle = {
    width: "350px",
    height: "150px",
    display: "flex",
  };

  const circleStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: `url(${url}) center/cover`,
    zIndex: 1,
  };

  const rectangleStyle = {
    // background: "white",
    width: "275px",
    height: "150px",
    borderRadius: "10px",
    backgroundColor: color,
    marginLeft: "-75px",
    display: "flex",
    justifyContent: "space-between",
  };

  const textStyles = {
    padding: "20px",
    width: "fit-content",
    alignSelf: "flex-start",
    color: "white",
    fontSize: "25px",
    fontWeight: "800", // or "900" for extra bold
    maxWidth: '200px'
  };
  

  const noUseStyle = {
    width: "50px",
    height: "100px",
    // backgroundColor: "yellow",
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card--circle" style={circleStyle}></div>
      <div className="card--rectangle" style={rectangleStyle}>
        <div className="no--use" style={noUseStyle}></div>
        <div className="card--text" style={textStyles}>
          {text}
        
        <div className="card--shop-now">
          shop now
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
