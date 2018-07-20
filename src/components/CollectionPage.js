import React, { Component } from "react";
import AddLink from "./AddLink";
import { connect } from "react-redux";
import { addLink } from "../actions/links";
import Collection from "./Collection";
import LinksCollectionFilters from "./LinksCollectionFilters";
import selectedLinks from "../selectors/links";
class CollectionPage extends Component {
  onSubmit = link => {
    console.log(link);
    this.props.dispatch(addLink(link), () => {
      console.log(link);
    });
  };
  render() {
    return (
      <div>
        <h1>CollectionPage</h1>
        <AddLink onSubmit={this.onSubmit} allFolders={this.props.allFolders} />
        <LinksCollectionFilters />
        <Collection links={this.props.links} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  links: selectedLinks(state.links, state.filters),
  allFolders: state.folders
});
export default connect(mapStateToProps)(CollectionPage);
