import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import { ArticleHeader, Props } from '../ArticleHeader';
import { buildDate } from '../../../testUtils/builders';

describe('ArticleHeader', () => {
  beforeEach(() => {
    faker.seed(1);
  });

  it('should render correctly', () => {
    const props: Props = {
      title: faker.lorem.sentence(),
      author: faker.name.firstName(),
      date: buildDate(),
    };
    const wrapper = shallow(<ArticleHeader {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
