import 'whatwg-fetch';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { mockResource, testStore } from '../utils/tests';
import * as Hooks from '../services/Albums';
import App from '../App';

describe('App', () => {
  let element: { container: HTMLElement };

  beforeEach(() => {
    jest.spyOn(Hooks, 'useGetResourceQuery').mockReturnValue({
      data: mockResource().feed.entry,
      isError: false,
      isLoading: false,
      refetch: jest.fn(),
    });
    element = render(
      <Provider store={testStore()}>
        <App />
      </Provider>
    );
  });

  test('renders component', () => {
    expect(element.container.firstChild).toMatchSnapshot();
  });
});
