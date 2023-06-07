import Layout from 'layouts/default';
import { Demo } from './components';

export const HOME_TEST_ID = 'home';

const Home = () => {
  return (
    <Layout>
      <div
        data-testid={HOME_TEST_ID}
        className="container min-h-full px-4 py-12 mx-auto"
      >
        <Demo />
      </div>
    </Layout>
  );
};

export default Home;
