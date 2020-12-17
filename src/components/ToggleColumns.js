import React, { Component } from 'react'

export default class ToggleColumns extends Component {
  constructor(props) {
    super(props);
  }

  onCheckboxClick = (e) => {
    this.props.onCheckboxClick(e.target.name, e.target.checked)
  }
  
  render() {
    return (
      <div className="toggle-columns">
        {/* Bind handlers and props */}
        { 
          Object.keys(this.props.columns).map((column, index) => {
            return ( 
            <div key={index}>
              <label>
                {column}
              </label>
              <input
                type="checkbox"
                name={column}
                onChange={this.onCheckboxClick}
                checked={this.props.columns[column]} />
            </div>)
          })
        }
      </div>
    );
  }
}
