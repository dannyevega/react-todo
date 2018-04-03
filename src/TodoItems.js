import React from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends React.Component {
  constructor(props) {
    super(props);

    this.createItem = this.createItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  createItem(item) {
    return <li key={item.key} onClick={() => this.removeItem(item.key)}>{item.text}</li>
  }
  removeItem(key) {
    this.props.remove(key);
  }

  render() {
    let entries = this.props.items;
    let listItems = entries.map(this.createItem)
    return (
      <ul className='list'>
        <FlipMove duration={250} easing='ease-out'>
          {listItems}
        </FlipMove>
      </ul>
    )    
  }
}

export default TodoItems;
