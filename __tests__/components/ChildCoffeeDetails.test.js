// library imports
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
// page imports
import ChildCoffeeExtras from '../../src/components/ChildCoffeeExtras';

enzyme.configure({adapter: new Adapter()});

describe('child coffee details component validation', () => {
  it('renders correctly with child coffee detail elments', async () => {
    const wrapper = shallow(<ChildCoffeeExtras />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with image elements', async () => {
    const wrapper = shallow(<ChildCoffeeExtras />);
    expect(wrapper.find('Image')).toHaveLength(1);
  });

  it('should render with text elements', async () => {
    const wrapper = shallow(<ChildCoffeeExtras />);
    expect(wrapper.find('Text')).toHaveLength(1);
  });
});
