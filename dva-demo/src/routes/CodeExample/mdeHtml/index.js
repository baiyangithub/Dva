import React, { Component } from 'react';
// import { connect } from 'dva';
// import { Link } from 'dva/router';
import * as Showdown from 'showdown';//npm install showdown
import './index.scoped.less';
// import './index.css'

class mdeHtml extends Component {
  constructor(props) {
    super(props);
    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true,
    });
  }
  state = {

  }
  htmlDecode(str) {
    let s = '';
    if (str.length === 0) return '';
    s = str.replace(/&amp;/g, '&');
    s = s.replace(/&lt;/g, '<');
    s = s.replace(/&gt;/g, '>');
    s = s.replace(/&nbsp;/g, ' ');
    s = s.replace(/&#39;/g, '\'');
    s = s.replace(/&quot;/g, '\'');
    return s;
  }
  render() {
    const mde = this.converter.makeHtml('```\n/?aaa=bbb\n&aaa=bbb\n&aaa=bbb\n&<转换示例>\n```');
    console.log('mde:', this.htmlDecode(mde));
    return (
      <div className="mdeHtml-wrap" style={{ margin: '0 auto', width: '1400px' }}>
        <h2 style={{ textAlign: 'center' }} >markdown转换为html</h2>
        <div dangerouslySetInnerHTML={{ __html: this.htmlDecode(mde) }} />
      </div>
    )
  }
}
// IndexPage.propTypes = {
// };

export default mdeHtml;
