import React, { Component } from "react";
import { connect } from "react-redux";
import { setTextFilter, setFolderFilter } from "../actions/filters";

class LinksCollectionFilters extends Component {
  state = {
    text: "",
    folder: ""
  };
  onFolderChange = e => {
    const folder = e.target.value;
    this.setState(
      () => ({
        folder
      }),
      () => {
        this.props.dispatch(setFolderFilter(this.state.folder));
      }
    );
  };
  render() {
    const folderOptions = this.props.folders
      .filter(folder => folder.folderName !== "All")
      .map((folder, i) => {
        return (
          <option key={i} value={folder.folderName}>
            {folder.folderName}
          </option>
        );
      });
    folderOptions.unshift(<option value="All">All</option>);
    return (
      <div>
        <input
          type="text"
          name=""
          id=""
          onChange={e => {
            const val = e.target.value;
            this.setState(
              () => ({
                text: val
              }),
              () => {
                this.props.dispatch(setTextFilter(this.state.text));
              }
            );
          }}
          value={this.state.text}
          placeholder="Search"
        />
        <select
          name=""
          id=""
          value={this.state.folder}
          onChange={this.onFolderChange}
        >
          {folderOptions}
        </select>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  folders: state.folders
});
export default connect(mapStateToProps)(LinksCollectionFilters);
