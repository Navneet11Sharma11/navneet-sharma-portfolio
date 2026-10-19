import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from '../app/components/Footer';

describe('Footer', () => {
  it('renders the portfolio identity and current year', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');

    expect(footer).toHaveTextContent('Navneet Sharma');
    expect(footer).toHaveTextContent(
      `Technical Architect · ${new Date().getFullYear()}`,
    );
  });
});
