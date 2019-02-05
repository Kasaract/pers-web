import React from 'react';

import ListenItems from './listen.json';
import NavBar from '../share/components/NavBar';
import Description from '../share/components/Hobbies/Description';
import Current from '../share/components/Hobbies/Current';
import Recent from '../share/components/Hobbies/Recent';
import Plan from '../share/components/Hobbies/Plan';

const Listen = () => {
  return (
    <div style={{paddingTop: "60px", background: "#f7f7f7"}}>
      <NavBar />
      <Description 
        description='This is a description'
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