import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useStaredShows } from '../components/lib/useStaredShows';
import { getShowByIds } from '../misc/config';
import ShowGrid from './shows/ShowGrid';

const Starred = () => {
  const [starredShowsIds] = useStaredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShows?.length === 0) {
    return <div>No shows were starred</div>;
  }

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }

  if (starredShowsError) {
    return <div>Error occured: {starredShowsError.message}</div>;
  }

  return <div>Shows are loading</div>;
};
export default Starred;
