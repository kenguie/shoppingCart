import React, { Component } from 'react';
import Header from './header';
import List from './list';
import Footer from './footer';
import css from '../../public/style/style.less';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
				<List />
        <Footer />
      </div>
    );
  }
}
