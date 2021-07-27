// library imports
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// page imports
import CoffeeTypes from '../../src/views/CoffeeTypes';

enzyme.configure({adapter: new Adapter()});

describe('Coffee types screen', () => {
  it('renders correctly with coffee types', async () => {
    const wrapper = shallow(<CoffeeTypes />);
    expect(wrapper).toMatchSnapshot();
  });
});
