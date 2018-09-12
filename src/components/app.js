import React, { Component } from 'react';
import Cart from './cart';
import css from '../../public/style/style.less';

export default class App extends Component {
  render() {
    return (
      <div className="container">
				<Cart />
      </div>
    );
  }
}
