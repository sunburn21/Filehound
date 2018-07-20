import React, { Component } from "react";

export default class AutoSuggestBox extends Component {
  constructor(props) {
    super(props);
    this.options = [
      "britain",
      "ireland",
      "norway",
      "sweden",
      "denmark",
      "germany",
      "holland",
      "belgium",
      "france",
      "spain",
      "portugal",
      "italy",
      "switzerland"
    ];
    this.state = {
      input: "",
      selected: false
    };
  }

  handleChange(event) {
    return this.setState(
      {
        input: event.target.value
      },
      () => {
        this.props.onFolderChange(this.state.input);
      }
    );
  }

  handleClick(option) {
    return this.setState(
      {
        input: option
      },
      () => {
        this.props.onFolderChange(this.state.input);
      }
    );
  }

  matches(input) {
    const regex = new RegExp(input, "i");
    return this.props.allFolders.filter(function(option) {
      return option.folderName.match(regex) && option.folderName !== input;
    });
  }

  onInputFocus(show) {
    if (show) {
      this.setState({ selected: true });
    } else {
      setTimeout(() => this.setState({ selected: false }), 500);
    }
  }

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
    if (this.state.selected) {
      autoComplete = (
        <div style={styleSelect}>
          {this.matches(this.state.input).map(option => {
            return (
              <div
                style={styleOptions}
                onClick={() => this.handleClick(option.folderName)}
              >
                {option.folderName}
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div>
        <input
          onChange={this.handleChange.bind(this)}
          onFocus={() => this.onInputFocus(true)}
          onBlur={() => this.onInputFocus(false)}
          value={this.state.input}
        />
        <br />
        {autoComplete}
      </div>
    );
  }
}
