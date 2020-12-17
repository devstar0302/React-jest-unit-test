import React, { Component } from 'react'
import '../styles/Search.css';
import ToggleColumns from './ToggleColumns';
import ProductList from './ProductList';
import FilterForm from './FilterForm';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedProducts: props.products,
      priceFrom: '',
      priceTo: '',
      columns: {
        id: true,
        name: true,
        department: true,
        currency: true,
        price: true
      }
    };
  }

  onPriceInputChange = (name, value) => {

    this.setState({
      [name]: value
    }, () => { this.filterProducts() })
  }

  filterProducts = () => {
    // to-do: implement handler for filtering products by price range
    if (this.state.priceFrom === '' && this.state.priceTo !== '') {
      this.setState({
        displayedProducts: this.props.products.filter((product) => product.price <= Number(this.state.priceTo))
      })
    } else if (this.state.priceFrom !== '' && this.state.priceTo === '') {
      this.setState({
        displayedProducts: this.props.products.filter((product) => product.price >= Number(this.state.priceFrom))
      })
    } else if (Number(this.state.priceFrom) == 0 && Number(this.state.priceTo) == 0) {
      this.setState({
        displayedProducts: this.props.products
      })
    } else if (Number(this.state.priceFrom) > Number(this.state.priceTo)) {
      this.setState({
        displayedProducts: this.props.products
      })
    } else {
      this.setState({
        displayedProducts: this.props.products.filter((product) => (product.price >= Number(this.state.priceFrom) && product.price <= Number(this.state.priceTo)))
      })
    }
  }

  onCheckboxClick = (name, checked) => {
    // to-do: implement checkbox click handler
    this.setState(prevState => ({
      columns: {
        ...prevState.columns,
        [name]: checked
      }
    }))
  }

  render() {
    // let displayedProducts = [];
    return (
      <div className="Products">
        <FilterForm
          priceFrom={this.state.priceFrom}
          priceTo={this.state.priceTo}
          onPriceInputChange={this.onPriceInputChange} />

        <ToggleColumns
          onCheckboxClick={this.onCheckboxClick}
          columns={this.state.columns} />

        <ProductList products={this.state.displayedProducts} columns={this.state.columns}/>
      </div>
    );
  }
}
