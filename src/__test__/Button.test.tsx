import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Button from '../components/Button';

describe('Button', () => {
   const onClick = vi.fn();

   beforeEach(() => {
      render(
         <Button onClick={onClick} value="button">
            Testing Button
         </Button>
      );
   });

   it('renders correctly', () => {
      expect(screen.getByText('Testing Button')).toBeInTheDocument();
   });

   it('correct button...', () => {
      const button = screen.getByRole('button', { name: /testing button/i });
      expect(button);
   });
});
