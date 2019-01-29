import React from 'react';

import Read from './read.json';
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
        items={Read[0]}
      />
      <Recent 
        headline='Recent'
        items={Read[1]}
      />
      <Plan 
        headline='Plan'
        items={Read[2]}
      />
    </div>     
  )
}

export default Read;