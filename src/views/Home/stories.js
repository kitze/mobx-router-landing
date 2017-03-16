import React from 'react';
import {storiesOf} from '@kadira/storybook';
import wrapWithStore from 'storybook-wrappers/wrap-store';
import store from 'stores/store';
import Home from 'views/Home';

storiesOf('Home')
  .addDecorator(wrapWithStore(store))
  .add('default', () => <Home/>);