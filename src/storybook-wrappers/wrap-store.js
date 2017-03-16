import React from 'react';
import {Provider} from 'mobx-react';

const stub = () => true;

export const exampleStore = {
  app: {},
  auth: {
    checkAuth: stub
  },
  router: {
    goTo: stub
  }
};

const wrapWithStore = (extendStore = {}, overrideStore) => story => {

  const cleanStore = {};
  const finalStore = overrideStore ? overrideStore : {...cleanStore, ...exampleStore, ...extendStore};

  return (
    <Provider store={finalStore}>
      {story()}
    </Provider>
  )
}

export default wrapWithStore;