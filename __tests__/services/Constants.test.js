import {GET_URL} from '../../src/services/Constants';

describe('Constants', () => {
  it('renders correctly with all coffee url values', async () => {
    expect(GET_URL.COFFEE_DETAILS_URL).toEqual(
      'https://darkroastedbeans.coffeeit.nl/coffee-machine/60ba1ab72e35f2d9c786c610',
    );
  });
});
