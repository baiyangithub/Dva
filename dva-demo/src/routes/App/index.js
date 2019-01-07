import React from 'react'
import { Switch, Route } from 'dva/router'

import Home from '../Page'
import Product from '../Product'
import Route4 from '../Route4'
import demo from '../CodeExample'
import './index.scoped.less';

const App = () => (
    <div className="router-wrap">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/page" component={Route4} />
        <Route path="/codeDemo" component={demo} />
      </Switch>
    </div>
)

export default App
