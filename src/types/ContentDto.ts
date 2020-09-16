export type ContentDto<T = string, E = object> = {
  id: string;
  name: string;
  description: string;
  classification: string;
  typeId: string;
  locale: string;
  lastModified: string;
  lastModifierId: string;
  created: string;
  creatorId: string;
  tags: string[];
  kind: string[];
  elements: E;
  type: T;
};
