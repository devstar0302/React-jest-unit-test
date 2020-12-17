import React, { Component } from 'react'

export default class FilterForm extends Component {
  constructor(props) {
    super(props);
  }

  onPriceInputChange = (e) => {
    // to-do: implement handler
    this.props.onPriceInputChange(e.target.name, e.target.value)
  }

  render() {
    return (
      <div>
        {/* Bind handlers and props */}
        <label htmlFor="name">Filter:</label>
        <input
          type="number"
          name="priceFrom"
          value={this.props.priceFrom}
          onChange={this.onPriceInputChange}
          placeholder="Price from..." />
        <input
          type="number"
          name="priceTo"
          onChange={this.onPriceInputChange}
          value={this.props.priceTo}
          placeholder="Price to..." />
      </div>
    )
  }
}
