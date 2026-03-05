// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AssetCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AssetCore/i);
    expect(titleElement).toBeInTheDocument();
});
