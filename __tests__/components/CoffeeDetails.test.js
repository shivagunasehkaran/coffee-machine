import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import CoffeeDetails from '../../src/components/CoffeeDetails';

enzyme.configure({adapter: new Adapter()});

describe('coffee details component validation', () => {
  it('renders correctly with coffee detail elments', async () => {
    const wrapper = shallow(<CoffeeDetails />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with image elements', async () => {
    const wrapper = shallow(<CoffeeDetails />);
    expect(wrapper.find('Image')).toHaveLength(0);
  });

  it('should render with text elements', async () => {
    const wrapper = shallow(<CoffeeDetails />);
    expect(wrapper.find('Text')).toHaveLength(1);
  });
});
