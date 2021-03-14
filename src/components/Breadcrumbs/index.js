import React from 'react';
import { Link } from 'gatsby';

import { BreadcrumbsWrapper } from './styles'

const Breadcrumbs = ({
  productTitle,
  collectionTitle,
  collectionPath,
  separator,
}) => {
  return (
    <BreadcrumbsWrapper>
      <span><Link to="/">Inicio</Link></span>
      {collectionPath && collectionTitle ? (
        <span>
          <span>{separator}</span>
          <Link to={`/${collectionPath}`}>{collectionTitle}</Link>
        </span>
      ) : (
        ''
      )}
      {productTitle ? (
        <span>
          <span>{separator}</span>
          <span>
            <span>{productTitle.split(',')[0]}</span>
          </span>
        </span>
      ) : (
        ''
      )}
    </BreadcrumbsWrapper>
  );
};

export default React.memo(Breadcrumbs);