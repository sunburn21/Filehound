import React, { Component } from "react";
import { connect } from "react-redux";
import { addGenre } from "../actions/genres";

const labels = [
  "Videos",
  "Books/Docs",
  "Music/Audio",
  "Images",
  "Software/Games",
  "Android Apps",
  "Other"
];
const getLabel = name => {
  switch (name) {
    case "Other":
      return "Other";
    case "Videos":
      return "Video";
    case "Books/Docs":
      return "Books";
    case "Images":
      return "Images";
    case "Software/Games":
      return "Softwares";
    case "Android Apps":
      return "Apps";
    case "Music/Audio":
      return "Audio";
    default:
      return "All";
  }
};
class Genre extends Component {
  state = {
    genre: ""
  };
  handleChange = e => {
    const value = e.target.value;
    this.setState(
      () => ({
        genre: value
      }),
      () => {
        console.log(this.state);
        this.props.dispatch(addGenre(this.state.genre));
      }
    );
  };

  render() {
    const genres = labels.map(label => (
      <option value={getLabel(label)}>{label}</option>
    ));
    return (
      <div>
        <select
          name="genre"
          id="genre"
          value={this.state.genre}
          onChange={this.handleChange}
        >
          <option value="" disabled selected hidden>
            Choose Filetype
          </option>
          {genres}
        </select>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    genres: state.genres
  };
};
export default connect(mapStateToProps)(Genre);
