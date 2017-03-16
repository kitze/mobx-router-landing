import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

//styles
import {App} from './styles';

@inject('store')
@observer
class AppComponent extends Component {

  render() {
    const {store:{router}} = this.props;

    return (
      <App>
        {router.currentView && router.currentView.component}
      </App>
    )
  }
}

export default AppComponent;
