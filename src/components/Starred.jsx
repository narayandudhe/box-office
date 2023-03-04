import React from 'react';
import { useStaredShows } from '../components/lib/useStaredShows';

const Starred = () => {
  const [staredshows] = useStaredShows();
  return <div>stared shows are {staredshows.length}</div>;
};

export default Starred;
