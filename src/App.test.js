import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const container = screen.getAllByTestId('app-container')
  expect(container).toBeDefined()
  expect(container).toMatchSnapshot()
});
