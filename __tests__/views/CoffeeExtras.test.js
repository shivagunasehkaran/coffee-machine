// library imports
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// page imports
import CoffeeExtras from '../../src/views/CoffeeExtras';

enzyme.configure({adapter: new Adapter()});

describe('Coffee types screen', () => {
  it('renders correctly with coffee types', async () => {
    const wrapper = shallow(<CoffeeExtras />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('coffee extras screen : flatlist', () => {
  it('should flatlist return keyExtractor correctly', () => {
    const item = [
      {
        id: '1',
        name: 'sugar',
      },
      {
        id: '2',
        name: 'milk',
      },
    ];
    const wrapper = shallow(<CoffeeExtras item={item} />);
    expect(wrapper.find('FlatList').length).toEqual(1);
  });
});
