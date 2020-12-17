/* eslint-disable */
import React, { Component } from 'react'

export default class ProductList extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="product-list">
        <header>
          <strong>Product List ({this.props.products.length} items)</strong>
        </header>
        <table>
          <thead>
            <tr>
              {this.props.columns.id && <th>ID</th>}
              {this.props.columns.name && <th>Name</th>}
              {this.props.columns.department && <th>Department</th>}
              {this.props.columns.currency && <th>Currency</th>}
              {this.props.columns.price && <th>Price</th>}
            </tr>
          </thead>
          <tbody>
            {/* Display products here in new table rows */}
            {
              this.props.products && this.props.products.map((data, index) => {
                return (
                  <tr key={index}>
                    {this.props.columns.id &&
                      <td>{data.id}</td>
                    }
                    {this.props.columns.name &&
                      <td>{data.name}</td>
                    }
                    {this.props.columns.department &&
                      <td>{data.department}</td>
                    }
                    {this.props.columns.currency &&
                      <td>{data.currency}</td>
                    }
                    {this.props.columns.price &&
                      <td>{data.price}</td>
                    }
                  </tr>
                )
              })

            }
          </tbody>
        </table>
      </div>
    )
  }
}
