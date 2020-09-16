import { ContentDto } from '../../types/ContentDto';
import { parseToArticle } from '../parseUtils';
import { ArticleContentDto } from '../../types/ArticleContentDto';
import { ArticleContent } from '../../types/Article';
import {
  buildContentDto,
  buildArticleContent,
  buildArticleContentDto,
} from '../../testUtils/builders';
import * as commonApi from '../../api/common';

describe('parseUtils', () => {
  describe('parseToArticle', () => {
    it('should throw if given content is not an article', () => {
      expect(() => {
        const content: ContentDto = buildContentDto({
          type: 'definitely-not-an-article',
          elements: {},
        });

        parseToArticle(content);
      }).toThrow('Content type is not supported');
    });

    it('should parse the content to an article', () => {
      const article: ArticleContent = buildArticleContent();

      jest.spyOn(commonApi, 'getHostUrl').mockReturnValue('');

      const content: ArticleContentDto = buildArticleContentDto({
        ...buildContentDto(),
        type: 'Article',
        elements: {
          author: {
            value: article.author,
          },
          heading: {
            value: article.title,
          },
          body: {
            values: article.body,
          },
          date: {
            value: article.date.toISOString(),
          },
          mainImage: {
            value: {
              leadImage: {
                asset: {
                  altText: article.imageAltText,
                },
                url: article.imageSrc,
              },
            },
          },
        },
      });

      expect(parseToArticle(content)).toEqual(article);
    });

    it('should sanitize HTML', () => {
      const body = ['<img src=x onerror=alert(1)//>'];

      const content: ArticleContentDto = buildArticleContentDto({
        ...buildContentDto(),
        type: 'Article',
        elements: {
          body: {
            values: body,
          },
        },
      });

      expect(parseToArticle(content).body[0]).toEqual('<img src="x">');
    });
  });
});
