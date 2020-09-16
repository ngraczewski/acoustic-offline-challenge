import React from 'react';
import faker from 'faker';
import { useArticle } from '../useArticle';
import { mount } from 'enzyme';
import * as contentsApi from '../../api/contents';
import * as parserUtils from '../../utils/parseUtils';
import {
  buildArticleContentDto,
  buildArticleContent,
} from '../../testUtils/builders';
import { act } from '@testing-library/react';
import { ArticleContent } from '../../types/Article';

describe('useArticle', () => {
  type Props = {
    contentId?: string;
  };

  const ResultComponent = ({ article }: { article?: ArticleContent }) => (
    <div></div>
  );

  const MockComponent = ({ contentId }: Props) => {
    const article = useArticle(contentId);
    return <ResultComponent article={article} />;
  };

  it('should do nothing if id is not given', () => {
    const wrapper = mount(<MockComponent />);

    jest.spyOn(contentsApi, 'getContent');
    jest.spyOn(parserUtils, 'parseToArticle');

    expect(contentsApi.getContent).not.toHaveBeenCalled();
    expect(parserUtils.parseToArticle).not.toHaveBeenCalled();
    expect(wrapper.find(ResultComponent).props().article).toBeUndefined();
  });

  it('should return article if id is given', async () => {
    const contentId = faker.random.uuid();
    const contentDto = buildArticleContentDto({
      id: contentId,
    });
    const article = buildArticleContent();

    jest.spyOn(contentsApi, 'getContent').mockResolvedValue(contentDto);
    jest.spyOn(parserUtils, 'parseToArticle').mockReturnValue(article);

    const wrapper = mount(<MockComponent />);

    await act(async () => {
      wrapper.setProps({ contentId });
    });
    wrapper.update();

    expect(contentsApi.getContent).toHaveBeenCalledWith(contentId);
    expect(parserUtils.parseToArticle).toHaveBeenCalledWith(contentDto);
    expect(wrapper.find(ResultComponent).props().article).toEqual(article);
  });
});
