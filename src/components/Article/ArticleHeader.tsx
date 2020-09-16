import React from 'react';

export type Props = {
  title: string;
  author: string;
  date: Date;
};

export const ArticleHeader = ({ title, author, date }: Props): JSX.Element => {
  const formattedDate = new Date(date).toDateString();
  return (
    <header className="article__header">
      <h1 className="article__header__title">{title}</h1>
      <div className="article__header__author">
        by {author} at {formattedDate}
      </div>
    </header>
  );
};
