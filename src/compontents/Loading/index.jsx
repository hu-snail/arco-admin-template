import { Component } from 'react';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default class LoadingComponent extends Component {
  constructor(props) {
    super(props);
    NProgress.start();
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    return <div />;
  }
}
