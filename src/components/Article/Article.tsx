import React from 'react';
import { ArticleHeader } from './ArticleHeader';
import { ArticleLeadImage } from './ArticleLeadImage';
import { ArticleContent } from '../../types/Article';
import { ArticleBody } from './ArticleBody';

import './Article.css';

export const Article = ({
  title,
  author,
  body,
  date,
  imageAltText,
  imageSrc,
}: ArticleContent): JSX.Element => {
  return (
    <div className="article">
      <ArticleLeadImage imageSrc={imageSrc} imageAltText={imageAltText} />
      <ArticleHeader title={title} author={author} date={date} />
      <ArticleBody body={body} />
    </div>
  );
};
