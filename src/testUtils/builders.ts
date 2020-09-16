import faker from 'faker';
import { merge } from 'lodash';
import { ContentDto } from '../types/ContentDto';
import { ArticleContent } from '../types/Article';
import { ArticleContentDto } from '../types/ArticleContentDto';
import { Rendition } from '../types/Rendition';
import { DeepPartial } from '../types/DeepPartial';

// https://github.com/Marak/faker.js/issues/608
export const buildDate = () => faker.date.past(1, new Date(2020, 0, 0));

export const buildContentDto = (
  override?: Partial<ContentDto>
): ContentDto => ({
  classification: faker.random.words(),
  created: faker.date.recent().toISOString(),
  creatorId: faker.random.uuid(),
  description: faker.random.words(),
  id: faker.random.words(),
  kind: [faker.random.words(), faker.random.words()],
  lastModified: faker.date.recent().toISOString(),
  lastModifierId: faker.random.uuid(),
  locale: faker.random.locale(),
  name: faker.random.words(),
  tags: [faker.random.word(), faker.random.word()],
  typeId: faker.random.uuid(),
  type: faker.random.word(),
  elements: {},
  ...override,
});

export const buildArticleContent = (
  override?: Partial<ArticleContent>
): ArticleContent => ({
  title: faker.lorem.sentence(),
  author: faker.name.firstName(),
  date: buildDate(),
  imageAltText: faker.lorem.sentence(),
  imageSrc: faker.internet.url(),
  body: [
    `<p>${faker.lorem.paragraph()}</p>`,
    `<p>${faker.lorem.paragraph()}</p>`,
  ],
  ...override,
});

export const buildRendition = (override?: Partial<Rendition>): Rendition => ({
  url: faker.internet.url(),
  height: faker.random.number(),
  width: faker.random.number(),
  source: faker.internet.url(),
  ...override,
});

export const buildArticleContentDto = (
  override?: DeepPartial<ArticleContentDto>
): ArticleContentDto =>
  merge(
    {
      ...buildContentDto(),
      type: 'Article',
      elements: {
        author: {
          elementType: 'text',
          value: faker.name.firstName(),
        },
        heading: {
          elementType: 'text',
          value: faker.lorem.sentence(),
        },
        body: {
          elementType: 'formattedtext',
          values: [
            `<p>${faker.lorem.paragraph()}</p>`,
            `<p>${faker.lorem.paragraph()}</p>`,
          ],
        },
        date: {
          elementType: 'datetime',
          value: buildDate().toISOString(),
        },
        mainImage: {
          elementType: 'group',
          value: {
            leadImageCaption: {
              elementType: 'text',
              value: faker.random.word(),
            },
            leadImageCredit: {
              elementType: 'text',
              value: faker.random.word(),
            },
            leadImage: {
              asset: {
                altText: faker.lorem.sentence(),
                fileName: faker.system.fileName(),
                height: faker.random.number(),
                width: faker.random.number(),
                id: faker.random.uuid(),
                mediaType: faker.system.mimeType(),
                resourceUri: faker.internet.url(),
              },
              url: faker.internet.url(),
              altText: faker.random.word(),
              elementType: 'image',
              mode: 'shared',
              profiles: [faker.random.uuid(), faker.random.uuid()],
              renditions: {
                card: buildRendition(),
                default: buildRendition(),
                lead: buildRendition(),
              },
            },
          },
        },
      },
    },
    override
  );
