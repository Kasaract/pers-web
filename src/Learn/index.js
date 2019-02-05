import React from 'react';

import LearnItems from './learn.json';
import NavBar from '../share/components/NavBar';
import Description from '../share/components/Hobbies/Description';
import Current from '../share/components/Hobbies/Current';
import Recent from '../share/components/Hobbies/Recent';
import Plan from '../share/components/Hobbies/Plan';

const Learn = () => {
  return (
    <div style={{paddingTop: "60px", background: "#f7f7f7"}}>
      <NavBar />
      <Description 
        description='This is a description'
      />
      <Current 
        headline={`What I'm Currently Learning`}
        items={LearnItems[0]}
      />
      <Recent 
        headline={`What I'm Recently Learned`}
        items={LearnItems[1]}
      />
      <Plan 
        headline={`What I'm Planning to Learn`}
        items={LearnItems[2]}
      />
    </div>     
  )
}

export default Learn;