import React from 'react';
import {hot} from 'react-hot-loader';

import Blog from './apps/blog/Blog';

const App = () => (
  <>
    <Blog />
  </>
);

export default hot(module)(App);
