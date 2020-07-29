import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>Page Not Found</h1>
      <p>
        Looks like you have followed a broken link or entered a URL that does
        not exist on this site.
      </p>
      <Link to="/">Take me back to the home page.</Link>
    </div>
  </Layout>
);

export default NotFoundPage;
