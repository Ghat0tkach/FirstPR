import React from 'react';
import StarButton from './StarButton';
import ExploreButton from './ExploreButton';

function ButtonLayout() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 mb-8">
        <StarButton />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 mt-4 sm:mt-0 mb-8">
        <ExploreButton />
      </div>
    </div>
  );
}

export default ButtonLayout;
