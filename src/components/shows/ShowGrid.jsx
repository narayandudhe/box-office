import ShowsCard from './ShowsCard';
import IMAGE_NOT_FOUND from '../../images/download.jfif';
import { useStaredShows } from '../lib/useStaredShows';

const ShowGrid = ({ data }) => {
  const [staredshows, dispatchstared] = useStaredShows();
  const onStarClick = showId => {
    const isstared = staredshows.includes(showId);
    if (isstared) {
      dispatchstared({ type: 'Unstar', showId });
    } else {
      dispatchstared({ type: 'Star', showId });
    }
  };
  return (
    <div>
      {data.map(({ show }) => (
        <ShowsCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          summary={show.summary}
          onStarClick={onStarClick}
          isstared={staredshows.includes(show.id)}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
