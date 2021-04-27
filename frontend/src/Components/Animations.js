import React from "react";

class animations extends React.Component {
  render() {
    return (
      <div
        className="animations"
        style={{
          position: "absolute",
          zIndex: 1,
          left: 0,
          top: -10
        }}
      >
        <img
          className="waffle"
          src="images/waffle.png"
          width={400}
          length={400}
        />
        <img className="mac" src="images/foods.png" width={400} length={400} />
        <img
          className="salad"
          src="images/salad.png"
          width={400}
          length={400}
        />
        <img
          className="sandwich"
          src="images/sandwich.png"
          width={400}
          length={400}
        />
        <img
          className="waffle2"
          src="images/waffle.png"
          width={400}
          length={400}
        />
        <img className="mac2" src="images/foods.png" width={400} length={400} />
      </div>
    );
  }
}

export default animations;

