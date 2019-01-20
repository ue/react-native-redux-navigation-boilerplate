import React from 'react';
import { Provider } from 'react-redux';
import { ReduxNavigation } from './navigation/reduxNavigation';

import store from './redux/store/store';

export default () => (
  <Provider store={store}>
    <ReduxNavigation />
  </Provider>
);
