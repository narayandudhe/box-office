import { useParams } from 'react-router-dom';
import { getShowById } from '../../misc/config';
import { useQuery } from '@tanstack/react-query';
const ShowShows = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
  });

  if (showError) {
    return <div>Error occured when loading</div>;
  }
  if (showData) {
    return <div>data is {showData.name}</div>;
  }

  return <div>hello is loading </div>;
};

export default ShowShows;
