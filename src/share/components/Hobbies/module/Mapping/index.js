import React from 'react';

import Profile from '../../share/Profile';

const Mapping = (items) => items.map(item => (
  <Profile 
    cover={item.cover}
    title={item.title}
    author={item.author}
    time={item.time}
  />
));

export default Mapping;