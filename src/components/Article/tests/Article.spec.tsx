import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import { Article } from '../Article';
import { ArticleContent } from '../../../types/Article';
import { buildArticleContent } from '../../../testUtils/builders';

describe('Article', () => {
  beforeEach(() => {
    faker.seed(1);
  });

  it('should render correctly', () => {
    const props: ArticleContent = buildArticleContent();

    const wrapper = shallow(<Article {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
