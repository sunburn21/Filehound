import React, { Component } from "react";
import AddLink from "./AddLink";
import { connect } from "react-redux";
import { startAddLink } from "../actions/links";
import Collection from "./Collection";
// import { firebase } from "../firebase/firebase";
import LinksCollectionFilters from "./LinksCollectionFilters";
import selectedLinks from "../selectors/links";

class CollectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.uid
    };
  }
  onSubmit = link => {
    console.log(link);
    this.props.dispatch(startAddLink(link), () => {
      console.log(link);
    });
  };
  render() {
    return (
      <div>
        <h1>CollectionPage</h1>
        <h3>{this.props.user.displayName}</h3>
        {console.log(this.props.user.email)}
        <img src={this.props.user.photoURL} alt="Hello" />
        <AddLink onSubmit={this.onSubmit} allFolders={this.props.allFolders} />
        <LinksCollectionFilters />
        <Collection links={this.props.links} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.user);
  return {
    links: selectedLinks(state.links, state.filters),
    allFolders: state.folders,
    uid: state.auth.uid,
    user: state.user
  };
};
export default connect(mapStateToProps)(CollectionPage);
