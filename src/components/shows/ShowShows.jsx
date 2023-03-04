import { Link, useParams } from 'react-router-dom';
import { getShowById } from '../../misc/config';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from './ShowMainData';
import Details from './Details';
import Seasons from './Seasons';
import Cast from './Cast';
const ShowShows = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });

  // const navigate = useNavigate();
  // const gobacktoHome = () => {
  //   navigate('/');
  // };
  if (showError) {
    return <div>Error occured when loading</div>;
  }
  if (showData) {
    return (
      <div>
        <Link to="/">Goto Main menu</Link>

        {/* <button type="button" onClick={gobacktoHome}> Go back to Home
        </button>*/}

        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          genres={showData.genres}
          summary={showData.summary}
        />
        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }

  return <div>hello is loading </div>;
};

export default ShowShows;
