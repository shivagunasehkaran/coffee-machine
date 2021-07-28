// library imports
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
// page imports
import CoffeeSizes from '../../src/views/CoffeeSizes';

enzyme.configure({adapter: new Adapter()});

describe('Coffee sizes screen', () => {
  it('renders correctly with coffee sizes', async () => {
    const wrapper = shallow(<CoffeeSizes />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('coffee sizes screen : flatlist', () => {
  it('should flatlist return keyExtractor correctly', () => {
    const item = [
      {
        id: '1',
        name: 'large',
      },
      {
        id: '2',
        name: 'small',
      },
      {
        id: '2',
        name: 'medium',
      },
    ];
    const wrapper = shallow(<CoffeeSizes item={item} />);
    expect(wrapper.find('FlatList').length).toEqual(1);
  });
});
