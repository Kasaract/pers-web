import React from 'react';

import ReadItems from './read.json';
import SecondaryNavBar from '../share/components/SecondaryNavBar';
import Description from '../share/components/Hobbies/Description';
import Current from '../share/components/Hobbies/Current';
import Recent from '../share/components/Hobbies/Recent';
import Plan from '../share/components/Hobbies/Plan';

const Read = () => {
  return (
    <div style={{paddingTop: "60px", background: "#f7f7f7"}}>
      <SecondaryNavBar />
      <Description 
        description='"The greatest gift is a passion for reading." — Elizabeth Hardwick'
      />
      <Current 
        headline={`What I'm Currently Reading`}
        items={ReadItems[0]}
      />
      <Recent 
        headline={`What I've Recently Learned`}
        items={ReadItems[1]}
      />
      <Plan 
        headline={`What I'm Planning to Learn`}
        items={ReadItems[2]}
      />
    </div>     
  )
}

export default Read;