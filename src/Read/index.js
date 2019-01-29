import React from 'react';

import ReadItems from './read.json';
import Description from '../share/components/Hobbies/Description';
import Current from '../share/components/Hobbies/Current';
import Recent from '../share/components/Hobbies/Recent';
import Plan from '../share/components/Hobbies/Plan';

const Read = () => {
  return (
    <div>
      <Description 
        description='This is a description'
      />
      <Current 
        headline='Current'
        items={ReadItems[0]}
      />
      <Recent 
        headline='Recent'
        items={ReadItems[1]}
      />
      <Plan 
        headline='Plan'
        items={ReadItems[2]}
      />
    </div>     
  )
}

export default Read;