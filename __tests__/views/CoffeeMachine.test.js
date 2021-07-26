// library imports
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// page imports
import CoffeeMachine from '../../src/views/CoffeeMachine';

enzyme.configure({adapter: new Adapter()});

describe('Coffee machine screen', () => {
  it('renders correctly with coffee machine details', async () => {
    const wrapper = shallow(<CoffeeMachine />);
    expect(wrapper).toMatchSnapshot();
  });
});
