import React, { Component } from 'react';
// import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './index.scoped.less';

class IndexPage extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {

  }
  render() {
    return (
      <div className={styles.normal}>
       <h1 className={styles.title}>Yay! Welcome to dva!</h1>
       <div className={styles.welcome} />
       <ul className={styles.list}>
         <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
         {/* <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li> */}
         <Link to={`/product?${'传参案例'}`}>产品列表</Link>
       </ul>
     </div>
    )
  }
}
// IndexPage.propTypes = {
// };

export default IndexPage;
