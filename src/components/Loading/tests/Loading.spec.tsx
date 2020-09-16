import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';

import { Loading, Props } from '../Loading';

describe('Loading', () => {
  beforeEach(() => {
    faker.seed(1);
  });

  it('should render correctly', () => {
    const props: Props = {
      message: faker.lorem.sentence(),
    };

    const wrapper = shallow(<Loading {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
