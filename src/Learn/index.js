import React from 'react';

import LearnItems from './learn.json';
import NavBar from '../share/components/NavBar';
import Description from '../share/components/Hobbies/Description';
import Current from '../share/components/Hobbies/Current';
import Recent from '../share/components/Hobbies/Recent';
import Plan from '../share/components/Hobbies/Plan';

const Learn = () => {
  return (
    <div>
      <NavBar />
      <Description 
        description='This is a description'
      />
      <Current 
        headline='Current'
        items={LearnItems[0]}
      />
      <Recent 
        headline='Recent'
        items={LearnItems[1]}
      />
      <Plan 
        headline='Plan'
        items={LearnItems[2]}
      />
    </div>     
  )
}

export default Learn;