import React, { Component } from 'react';
// import { connect } from 'dva';
// import { Link } from 'dva/router';
import './index.scoped.less';
// import './index.css'

class mdeHtml extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {

  }
  render() {
    return (
      <div className="mdeHtml-wrap" style={{ margin: '0 auto', width: '1400px' }}>
        <h2 style={{ textAlign: 'center' }} >markdown转换为html</h2>
        <h2 className="color">测试</h2>
      </div>
    )
  }
}
// IndexPage.propTypes = {
// };

export default mdeHtml;
