import React from 'react';

import Header_Landing from '../header/Header_Landing.jsx';

export const LandingPage = ( {content} ) => (
  <div>
      <Header_Landing/>
      {content}
  </div>  
);