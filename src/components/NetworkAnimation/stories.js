import React from 'react';
import {storiesOf} from '@kadira/storybook';

import NetworkAnimation from 'components/NetworkAnimation';

storiesOf('NetworkAnimation')
  .add('default', () => {
    return (
      <NetworkAnimation/>
    )
  });