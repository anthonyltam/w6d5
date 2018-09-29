import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <li onClick={this.props.updateIndex(this.props.index)}>
        <h1>{this.props.title}</h1>
        <article>{this.props.content}</article>
      </li>
    );
  }
}

export default Header;
