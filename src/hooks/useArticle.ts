import { useState, useEffect } from 'react';
import { ArticleContent } from '../types/Article';
import { getContent } from '../api/contents';
import { parseToArticle } from '../utils/parseUtils';

export const useArticle = (contentId?: string) => {
  const [article, setArticle] = useState<ArticleContent>();

  useEffect(() => {
    if (contentId) {
      const request = async () => {
        const content = await getContent(contentId);

        setArticle(parseToArticle(content));
      };

      request();
    }
  }, [setArticle, contentId]);

  return article;
};
