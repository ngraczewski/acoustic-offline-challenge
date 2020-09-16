import React from 'react';
import { Article } from '../Article/Article';
import { Loading } from '../Loading/Loading';
import { useArticle } from '../../hooks/useArticle';

export const contentId = process.env.REACT_APP_CONTENT_ID;

export const App = (): JSX.Element | null => {
  const article = useArticle(contentId);

  return article ? (
    <Article {...article} />
  ) : (
    <Loading message="Loading article..." />
  );
};
