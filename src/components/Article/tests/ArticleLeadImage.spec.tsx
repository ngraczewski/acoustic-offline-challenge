import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import { ArticleLeadImage, Props } from '../ArticleLeadImage';

describe('ArticleLeadImage', () => {
  beforeEach(() => {
    faker.seed(1);
  });

  it('should render correctly', () => {
    const props: Props = {
      imageAltText: faker.lorem.sentence(),
      imageSrc: faker.internet.url(),
    };
    const wrapper = shallow(<ArticleLeadImage {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
