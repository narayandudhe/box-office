import Title from '../Pages/Title';
import Navs from './Navs';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title title="Box-Office" subtitle="This actor and tv shows" />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
