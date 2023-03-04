import { Link } from 'react-router-dom';

const LINKS = [
  { path: '/', text: 'Home Page' },
  { path: '/starred', text: 'starred Page' },
];
const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li key={item.path}>
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
