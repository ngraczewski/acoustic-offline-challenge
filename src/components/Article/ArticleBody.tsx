import React from 'react';

export type Props = {
  body: string[];
};

export const ArticleBody = ({ body }: Props): JSX.Element => {
  return (
    <div className="article__body">
      {body.map((b, index) => (
        // since we are not actively modifying this list, using index as a key
        // is sufficent, in other cases something more coupled with the item
        // would be required
        <div key={index} dangerouslySetInnerHTML={{ __html: b }} />
      ))}
    </div>
  );
};
