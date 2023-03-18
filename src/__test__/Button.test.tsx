import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import Button from '../components/Button';
import { colors } from '../styles';

describe('Button', () => {
   const onClick = vi.fn();

   beforeEach(() => {
      render(
         <Button onClick={onClick} value="button">
            Testing Button
         </Button>
      );
   });

   it('renders content', () => {
      const button = screen.getByText('Testing Button');
      expect(button).toBeInTheDocument();
   });

   it('correct role', () => {
      const button = screen.getByRole('button', { name: /testing button/i });
      expect(button);
   });

   it('calls onClick prop when clicked', () => {
      fireEvent.click(screen.getByText(/button/i));
      expect(onClick).toHaveBeenCalledTimes(1);
   });

   // it('change the style when you hover over the button', async () => {
   //    const button = screen.getByRole('button', { name: /testing button/i });

   //    expect(button).toHaveStyle(`
   //    background-color: ${colors.button.background};
   //    color: ${colors.button.text};
   //    `);

   //    fireEvent.mouseOver(button);

   //    await waitFor(() => {
   //       expect(button).toHaveStyle(`
   //          background-color: #e7a127;
   //          color: #824d30;
   //       `);
   //    });
   // });

   it('renders with correct styles', () => {
      const button = screen.getByText('Testing Button');
      expect(button).toHaveStyle('cursor: pointer;');
      expect(button).toHaveStyle(`background-color: ${colors.button.background};`);
      expect(button).toHaveStyle('border-radius: 10px;');
      expect(button).toHaveStyle('transition: all 0.3s ease-in-out;');
      expect(button).toHaveStyle('width: 3rem;');
   });
});
