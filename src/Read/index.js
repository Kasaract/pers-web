import React from 'react';

import ReadDescription from './components/Description';
import CurrentRead from './components/Current';
import PlanRead from './components/Plan';
import RecentRead from './components/Recent';

const Read = () => {
  return (
    <div>
      <ReadDescription />
      <CurrentRead />
      <PlanRead />
      <RecentRead />
    </div>     
  )
}

export default Read;