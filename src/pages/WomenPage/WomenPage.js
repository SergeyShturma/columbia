import React, { useState } from 'react';

import DropDown from 'hooks/DropDown/DropDown';
import SortingWomen from 'hooks/SortingWomen';

const WomenPage = () => {
  const [sortDir, setSortDir] = useState('default');

  return (
    <>
      <DropDown setSortDir={setSortDir} />
      <SortingWomen sortDir={sortDir} />
    </>
  );
};

export default WomenPage;
