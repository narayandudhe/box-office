import React from 'react';

const Details = ({ status, premiered, network }) => {
  return (
    <div>
      <p>Status:{status}</p>
      <p>
        premeried {premiered} {!!network && `on network ${network.name}`}
      </p>
    </div>
  );
};

export default Details;
