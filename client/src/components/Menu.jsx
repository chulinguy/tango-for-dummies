import React from 'react';


class Menu extends React.Component {
  constructor (props){
    super(props);
  }

  render() {
    return (
      <div>
        <select id='menu' defaultValue='0'>
          {this.props.moves.map((item) =>(<option key={item.name} value={item.id} onSelect={this.props.imgChange.bind(null, item.id)}>{item.name}</option>))}
        </select>
      </div>
    )
  }
}

export default Menu;