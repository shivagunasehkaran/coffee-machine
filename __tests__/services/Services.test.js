import {useFetchCoffeeAPI} from '../../src/services/Services';

describe('coffee user API tests', () => {
  const coffee_details_url =
    'https://darkroastedbeans.coffeeit.nl/coffee-machine/60ba1ab72e35f2d9c786c610';

  it('handles coffee details api', async () => {
    global.fetch = jest.fn(url =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({coffee_details_url: url}),
      }),
    );

    const response = await useFetchCoffeeAPI();
    expect(response.coffee_details_url).toEqual(coffee_details_url);
  });
});
