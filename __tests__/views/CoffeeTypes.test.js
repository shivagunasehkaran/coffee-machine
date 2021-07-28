// library imports
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// page imports
import CoffeeTypes from '../../src/views/CoffeeTypes';
// service imports
import * as ServicesAPI from '../../src/services/Services';

enzyme.configure({adapter: new Adapter()});

describe('Coffee types screen', () => {
  it('renders correctly with coffee types', async () => {
    const wrapper = shallow(<CoffeeTypes />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Coffee types screen : use fetch coffee API', () => {
  it('fetch coffee api success', async () => {
    const spy = jest
      .spyOn(ServicesAPI, 'useFetchCoffeeAPI')
      .mockImplementation(url => {
        return new Promise(resolve => resolve('test'));
      });
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(spy).toHaveBeenCalledWith({url: 'http://dummyURL.com/'});
  });

  it('fetch coffee api with error message', async () => {
    jest.spyOn(ServicesAPI, 'useFetchCoffeeAPI').mockImplementation(url => {
      return new Promise(resolve => resolve([]));
    });
    await new Promise(resolve => setTimeout(resolve, 100));
  });
});

describe('coffee types screen : flatlist', () => {
  it('should flatlist return keyExtractor correctly', () => {
    const item = [
      {
        id: '1',
        name: 'shiva',
      },
      {
        id: '2',
        name: 'kumar',
      },
    ];
    const wrapper = shallow(<Home item={item} />);
    expect(wrapper.find('FlatList').length).toEqual(1);
  });
});
