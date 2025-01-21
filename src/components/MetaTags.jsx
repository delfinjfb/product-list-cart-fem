// src/components/MetaTags.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags = ({ title, description }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="desserts, bakery, cakes, cookies, pastries"
      />
      <meta name="author" content="Your Bakery Name" />
      {/* Add more meta tags as needed */}
    </Helmet>
  );
};

export default MetaTags;
