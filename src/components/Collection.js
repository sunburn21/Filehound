import React from "react";
import { connect } from "react-redux";
// import Checkbox from "./Checkbox";
// import { Link } from "react-router-dom";

const Collection = props => {
  const onClick = link => {
    window.open(link);
    console.log(link);
  };
  // const handleChange = () => {};
  return (
    <div>
      <h3>Collection</h3>
      {props.links.map((link, i) => (
        <h3
          onClick={() => {
            onClick(link.link);
          }}
          key={link.id}
        >
          {i + 1}.
          {link.title}
        </h3>
      ))}
    </div>
  );
};

export default connect()(Collection);
