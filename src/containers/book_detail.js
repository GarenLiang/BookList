import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div></div>;
    }
    return (
      <div className="wrapper">
      <div className="shape bubble">
        <h3>Details:</h3>
        <div>{this.props.book.title}</div>
        <div>{this.props.book.des}</div>
      </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
