import React from 'react';

//components
import App from 'components/App';

const wrapWithApp = component => {
  return <App children={component}/>
}

export default wrapWithApp;