import React from 'react';

import Learn from './learn.json';
import Description from '../share/components/Hobbies/Description';
import Current from '../share/components/Hobbies/Current';
import Recent from '../share/components/Hobbies/Recent';
import Plan from '../share/components/Hobbies/Plan';

const Learn = () => {
  return (
    <div>
      <Description 
        description='This is a description'
      />
      <Current 
        headline='Current'
        items={Learn[0]}
      />
      <Recent 
        headline='Recent'
        items={Learn[1]}
      />
      <Plan 
        headline='Plan'
        items={Learn[2]}
      />
    </div>     
  )
}

export default Learn;