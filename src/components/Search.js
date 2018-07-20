import React, { Component } from "react";
import { connect } from "react-redux";
import Genre from "./Genre";
import { addKeyword } from "../actions/keywords";
// import { clearGenres } from "../actions/genres";
// import keywords from "../reducers/keywords";
// import SearchBox from "./SearchBox";
const googleSearchQuery = "https://www.google.com/search?q=";
const genresall = {
  Other:
    " -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)",
  Video: "+(.mkv|.mp4|.avi|.mov|.mpg|.wmv|.3gp)",
  Books:
    "+(.MOBI|.CBZ|.CBR|.CBC|.CHM|.EPUB|.FB2|.LIT|.LRF|.ODT|.PDF|.PRC|.PDB|.PML|.RB|.RTF|.TCR|.DOC|.DOCX)",
  Images: "+(jpg|png|bmp|gif|tif|tiff|psd)",
  Softwares: "+(exe|iso|dmg|tar|7z|bz2|gz|rar|zip|apk)",
  Apps: "+(.apk)",
  Audio: "+(mp3|wav|ac3|ogg|flac|wma|m4a|aac|mod)"
};

class Search extends Component {
  // state = {
  //   keyword: ""
  // };
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      selected: false
    };
  }

  handleChange(event) {
    return this.setState({
      keyword: event.target.value
    });
  }
  handleClick(option) {
    return this.setState({
      keyword: option
    });
  }

  matches(keyword) {
    const regex = new RegExp(keyword, "i");
    return this.props.keywords.filter(function(option) {
      return option.match(regex) && option !== keyword;
    });
  }

  onInputFocus(show) {
    if (show) {
      this.setState({ selected: true });
    } else {
      setTimeout(() => this.setState({ selected: false }), 500);
    }
  }

  createQuery = () => {
    if (this.props.genres.genre === "Other") {
      return genresall["Other"];
    } else {
      const genrekey = genresall[this.props.genres.genre]
        ? genresall[this.props.genres.genre]
        : "";
      return genrekey + "+" + genresall["Other"];
    }
  };
  onChange = e => {
    const keyword = e.target.value;
    this.setState(() => ({
      keyword
    }));
  };
  onSubmit = () => {
    const q = this.createQuery();
    // console.log(q);
    this.props.dispatch(addKeyword(this.state.keyword));
    const searchKey = this.state.keyword.split(" ").join("+");
    window.open(googleSearchQuery + searchKey + "+" + q);
    this.props.history.push("/Collection");
  };
  render() {
    let styleSelect = {
      position: "absolute",
      backgroundColor: "#f1f1f1",
      minWidth: "160px",
      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
      zIndex: 1
    };

    let styleOptions = {
      color: "black",
      padding: "12px 16px",
      display: "block"
    };

    let autoComplete = null;
    if (this.state.selected && this.state.keyword) {
      autoComplete = (
        <div style={styleSelect}>
          {this.matches(this.state.keyword).map(option => {
            return (
              <div
                style={styleOptions}
                onClick={() => this.handleClick(option)}
              >
                {option}
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <div>
          <input
            onChange={this.handleChange.bind(this)}
            onFocus={() => this.onInputFocus(true)}
            onBlur={() => this.onInputFocus(false)}
            value={this.state.keyword}
          />
          <br />
          {autoComplete}
        </div>
        <button onClick={this.onSubmit}>Search</button>
        <div>
          <Genre />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  genres: state.genres,
  keywords: state.keywords
});
export default connect(mapStateToProps)(Search);
