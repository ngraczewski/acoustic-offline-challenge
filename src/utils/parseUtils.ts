import DOMPurify from 'dompurify';

import { ContentDto } from '../types/ContentDto';
import { ArticleContent } from '../types/Article';
import { ArticleContentDto } from '../types/ArticleContentDto';
import { getHostUrl } from '../api/common';

export const parseToArticle = (content: ContentDto): ArticleContent => {
  if (content.type !== 'Article') {
    throw new Error('Content type is not supported');
  }

  const articleContent = content as ArticleContentDto;
  const author = articleContent.elements.author.value;
  const title = articleContent.elements.heading.value;
  const date = new Date(articleContent.elements.date.value);
  const imageAltText =
    articleContent.elements.mainImage.value.leadImage.asset.altText;
  const imageSrc = `${getHostUrl()}${
    articleContent.elements.mainImage.value.leadImage.url
  }`;

  const unsanitizedBody = articleContent.elements.body.values;
  const body = unsanitizedBody.map((b: string) => DOMPurify.sanitize(b));

  return {
    author,
    title,
    date,
    imageAltText,
    imageSrc,
    body,
  };
};
