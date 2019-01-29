import React from 'react';

import Description from '../share/components/Hobbies/Description';
import Current from '../share/components/Hobbies/Current';
import Recent from '../share/components/Hobbies/Recent';
import Plan from '../share/components/Hobbies/Plan';

const Read = () => {
  return (
    <div>
      <Description />
      <Current />
      <Recent />
      <Plan />
    </div>     
  )
}

export default Read;