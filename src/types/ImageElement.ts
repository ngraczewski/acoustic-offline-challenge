import { Rendition } from './Rendition';
import { Asset } from './Asset';

export type ImageElement<R extends { [key: string]: Rendition }> = {
  elementType: 'image';
  mode: string;
  altText: string;
  profiles: string[];
  asset: Asset;
  renditions: R;
  url: string;
};
