import React, { Component } from "react";
import uuid from "uuid";
import moment from "moment";
import { connect } from "react-redux";
import { startAddFolder } from "../actions/folders";
import AutoSuggestBox from "./AutosuggestBox";

class AddLink extends Component {
  state = {
    id: "",
    createdDate: "",
    tags: [],
    title: "",
    link: "",
    error: "",
    folder: "All"
  };
  inputLink = React.createRef();
  onTitleChange = e => {
    const title = e.target.value;
    this.setState(state => ({
      title
    }));
  };
  onLinkChange = e => {
    const link = e.target.value;
    this.setState(state => ({
      link
    }));
  };
  onFolderChange = input => {
    const folder = input;
    this.setState(() => ({
      folder
    }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.link) {
      this.setState(() => ({
        error: "Please enter the link!"
      }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      const folderCheck = this.props.allFolders
        .map(f => {
          return f.folderName;
        })
        .some(n => n === this.state.folder || this.state.folder === "");
      if (!folderCheck) {
        this.props.dispatch(startAddFolder({ folderName: this.state.folder }));
      }
      this.props.onSubmit({
        createdDate: moment().unix(),
        link: this.state.link,
        title: !this.state.title ? this.state.link : this.state.title,
        folder: this.state.folder,
        id: ""
      });
    }
  };
  render() {
    return (
      <div>
        <h1>AddLink</h1>
        {this.state.error}
        <form action="" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Title"
            onChange={this.onTitleChange}
            value={this.state.title}
          />
          <input
            ref={this.inputLink}
            type="text"
            placeholder="Link"
            onChange={this.onLinkChange}
            value={this.state.Link}
          />

          <AutoSuggestBox
            onFolderChange={this.onFolderChange}
            allFolders={this.props.allFolders.filter(
              folder => folder.folderName !== "All"
            )}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddLink);
