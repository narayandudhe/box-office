import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getShowById } from '../../misc/config';

const ShowShows = () => {
  const { showId } = useParams();
  const [showData, setshowData] = useState(null);
  const [showError, setshowError] = useState(null);
  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await getShowById(showId);
        setshowData(data);
      } catch (error) {
        setshowError(error);
      }
    }
    fetchdata();
  }, [showId]);
  return <div>hello </div>;
};

export default ShowShows;
