// library imports
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
// page imports
import NestedChildCoffeeExtras from '../../src/components/NestedChildCoffeeExtras';

enzyme.configure({adapter: new Adapter()});

describe('nested child coffee details component validation', () => {
  it('renders correctly with nested child coffee detail elments', async () => {
    const wrapper = shallow(<NestedChildCoffeeExtras />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with image elements', async () => {
    const wrapper = shallow(<NestedChildCoffeeExtras />);
    expect(wrapper.find('Image')).toHaveLength(1);
  });

  it('should render with text elements', async () => {
    const wrapper = shallow(<NestedChildCoffeeExtras />);
    expect(wrapper.find('Text')).toHaveLength(1);
  });
});
