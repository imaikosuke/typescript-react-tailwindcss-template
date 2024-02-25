// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Hello, world!" text', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello, world!/i);
  expect(linkElement).toBeInTheDocument();
});
