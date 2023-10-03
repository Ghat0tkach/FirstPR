import React from 'react';
import StarButton from './StarButton';
import ExploreButton from './ExploreButton';

function ButtonLayout() {
  return (
    <div className="relative">
      <div className="w-full border-t border-white absolute top-0 mb-6 md:mb-24"></div>
      <div className="flex flex-col items-center sm:flex-row justify-center sm:justify-between">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 mb-4 sm:mb-0">
          <StarButton />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 mb-6 sm:mt-0">
          <ExploreButton />
        </div>
      </div>
    </div>
  );
}

export default ButtonLayout;
