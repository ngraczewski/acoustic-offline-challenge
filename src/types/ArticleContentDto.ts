import { TextElement } from './TextElement';
import { FormattedTextElement } from './FormattedTextElement';
import { DateTimeElement } from './DateTimeElement';
import { ContentDto } from './ContentDto';
import { GroupElement } from './GroupElement';
import { ImageElement } from './ImageElement';
import { Rendition } from './Rendition';

export type ArticleContentDto = ContentDto<
  'Article',
  {
    heading: TextElement;
    author: TextElement;
    body: FormattedTextElement;
    date: DateTimeElement;
    mainImage: GroupElement<{
      leadImage: ImageElement<{
        lead: Rendition;
        card: Rendition;
        default: Rendition;
      }>;
      leadImageCaption: TextElement;
      leadImageCredit: TextElement;
    }>;
  }
>;
