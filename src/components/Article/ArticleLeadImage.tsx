import React from 'react';

export type Props = {
  imageSrc: string;
  imageAltText: string;
};

export const ArticleLeadImage = ({
  imageAltText,
  imageSrc,
}: Props): JSX.Element => {
  return (
    <img
      className="article__lead-image"
      alt={imageAltText}
      src={imageSrc}
    ></img>
  );
};
