import React from 'react';

import ListenItems from './listen.json';
import SecondaryNavBar from '../share/components/SecondaryNavBar';
import Description from '../share/components/Hobbies/Description';
import Current from '../share/components/Hobbies/Current';
import Recent from '../share/components/Hobbies/Recent';
import Plan from '../share/components/Hobbies/Plan';

const Listen = () => {
  return (
    <div style={{paddingTop: "60px", background: "#f7f7f7"}}>
      <SecondaryNavBar />
      <Description 
        description='"He who is wise listens." — Unknown'
      />
      <Current 
        headline={`What I'm Currently Listening`}
        items={ListenItems[0]}
      />
      <Recent 
        headline={`What I've Recently Listened To`}
        items={ListenItems[1]}
      />
      <Plan 
        headline={`What I'm Planning to Listen`}
        items={ListenItems[2]}
      />
    </div>     
  )
}

export default Listen;