import {
  mockResource,
  renderWithRouter,
  testStore,
} from '../../..//utils/tests';
import { Album } from '../Album';
import { Provider } from 'react-redux';

describe('Album', () => {
  let element: { container: HTMLElement };
  beforeEach(() => {
    element = renderWithRouter(
      <Provider store={testStore()}>
        <Album album={mockResource().feed.entry[0]} />
      </Provider>
    );
  });

  test('renders component', () => {
    expect(element.container.firstChild).toMatchSnapshot();
    expect(element.container.textContent).toContain('Life After Death');
  });
});
