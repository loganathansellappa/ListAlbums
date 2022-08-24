import 'whatwg-fetch';
import {
  mockResource,
  renderWithRouter,
  testStore,
} from '../../..//utils/tests';
import { Provider } from 'react-redux';
import * as Hooks from '../../../services/Albums';
import Albums from '../Albums';

describe('Albums', () => {
  let element: { container: HTMLElement };
  beforeEach(() => {
    jest.spyOn(Hooks, 'useGetResourceQuery').mockReturnValue({
      data: mockResource().feed.entry,
      isError: false,
      isLoading: false,
      refetch: jest.fn(),
    });
    element = renderWithRouter(
      <Provider store={testStore()}>
        <Albums />
      </Provider>
    );
  });

  test('renders Album component', () => {
    expect(element.container.firstChild).toMatchSnapshot();
    expect(element.container.textContent).toContain('Life After Death');
  });
});
