import React from 'react';

import filler from '../share/images/filler_bg.jpg'
import './Design.scss';

const Design = () => (
  <div className="my-3 pb-3">
    <h1 className="text-center py-5">Design</h1>
    <div>
      <h3 className="row mx-5 my-3">
        {
          [1, 2, 3, 4, 5].map(() => (
            <img src={filler} style={{ maxHeight: '10rem' }} alt="filler" className="mr-3" />
          ))
        }
      </h3>
      <h3 className="row mx-5 my-3">
        {
          [1, 2, 3, 4, 5].map(() => (
            <img src={filler} style={{ maxHeight: '10rem' }} alt="filler" className="mr-3" />
          ))
        }
      </h3>
    </div>
  </div>
);

export default Design;