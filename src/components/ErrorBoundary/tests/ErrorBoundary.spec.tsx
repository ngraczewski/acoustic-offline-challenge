import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';

import { ErrorBoundary } from '../ErrorBoundary';

describe('ErrorBoundary', () => {
  const MockComponent = (): JSX.Element => <div>Some child</div>;

  beforeEach(() => {
    faker.seed(1);
  });

  it('should render child if there is no errors', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <MockComponent />
      </ErrorBoundary>
    );

    expect(wrapper.exists(MockComponent)).toBeTruthy();
    expect(wrapper.exists('.error-boundary')).toBeFalsy();
  });

  it('should render error message if an error was caught', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <MockComponent />
      </ErrorBoundary>
    );

    wrapper.find(MockComponent).simulateError(new Error('some error'));

    expect(wrapper.exists('.error-boundary')).toBeTruthy();
    expect(wrapper.exists(MockComponent)).toBeFalsy();
  });
});
