import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import { ArticleBody, Props } from '../ArticleBody';

describe('ArticleBody', () => {
  beforeEach(() => {
    faker.seed(1);
  });

  it('should render correctly', () => {
    const props: Props = {
      body: [
        `<p>${faker.lorem.paragraph()}</p>`,
        `<p>${faker.lorem.paragraph()}</p>`,
      ],
    };
    const wrapper = shallow(<ArticleBody {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
