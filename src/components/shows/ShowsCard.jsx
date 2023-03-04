import { Link } from 'react-router-dom';

const ShowCard = ({ id, image, name, summary, onStarClick, isstared }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';

  return (
    <div>
      <div>
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>
        <button type="button" onClick={() => onStarClick(id)}>
          {isstared ? 'UnStar Me' : 'Star Me'}
        </button>
      </div>
    </div>
  );
};

export default ShowCard;
