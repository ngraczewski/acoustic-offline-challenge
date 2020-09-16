import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import { App } from '../App';
import { Loading } from '../../Loading/Loading';
import { Article } from '../../Article/Article';
import * as useArticleHook from '../../../hooks/useArticle';
import { buildArticleContent } from '../../../testUtils/builders';

jest.mock('../../Article/Article', () => ({
  Article: (): JSX.Element => <div></div>,
}));

describe('App', () => {
  beforeEach(() => {
    faker.seed(1);
  });

  it('should render loading if the article is not ready', () => {
    jest.spyOn(useArticleHook, 'useArticle').mockReturnValue(undefined);

    const wrapper = shallow(<App />);

    expect(wrapper.exists(Loading)).toBeTruthy();
    expect(wrapper.exists(Article)).toBeFalsy();
  });

  it('should render article if article is ready', () => {
    jest
      .spyOn(useArticleHook, 'useArticle')
      .mockReturnValue(buildArticleContent());

    const wrapper = shallow(<App />);

    expect(wrapper.exists(Article)).toBeTruthy();
    expect(wrapper.exists(Loading)).toBeFalsy();
  });
});
