import React from 'react';
import Header from './header';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      index: 0
    };
    this.updateIndex = this.updateIndex.bind(this);
  }


  updateIndex(idx) {
    this.setState({ index: idx });
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.tabs.map((header, idx) => <Header title={header.title}
                                           content={header.content}
                                           index={idx} updateIndex={this.updateIndex} />)}
        </ul>
      </div>
    );
  }


}

export default Tabs;
