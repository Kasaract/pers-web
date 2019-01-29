import React from 'react';

import ListenItems from './listen.json';
import Description from '../share/components/Hobbies/Description';
import Current from '../share/components/Hobbies/Current';
import Recent from '../share/components/Hobbies/Recent';
import Plan from '../share/components/Hobbies/Plan';

const Listen = () => {
  return (
    <div>
      <Description 
        description='This is a description'
      />
      <Current 
        headline='Current'
        items={ListenItems[0]}
      />
      <Recent 
        headline='Recent'
        items={ListenItems[1]}
      />
      <Plan 
        headline='Plan'
        items={ListenItems[2]}
      />
    </div>     
  )
}

export default Listen;