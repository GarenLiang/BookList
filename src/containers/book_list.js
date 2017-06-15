import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
      return this.props.books.map((book) => {
        return (
          <li
          key={book.title}
          onClick={() => this.props.selectBook(book) && this.props.toggleModal}
          className="book">
          <img src={book.img} />
          <div id="title">{book.title}</div>
          </li>
        );
      });
    }
  render() {
    return (
      <ul className="book-list">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
