import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { HangmanImage } from '../components';

describe('HangmanImage', () => {
   beforeEach(() => {
      render(<HangmanImage number={0} isLoading={false} />);
   });

   it('renders content', () => {
      render(<HangmanImage number={1} isLoading={true} />);
   });

   it('correct role', () => {
      const img = screen.getByRole('img');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('alt', 'Hangman image');
   });

   it('should update imageUrl when props change', async () => {
      render(<HangmanImage number={1} isLoading={false} />);
      const hangmanImages = await screen.findAllByAltText('Hangman image');
      const hangmanImage = hangmanImages[hangmanImages.length - 1];
      expect(hangmanImage).toBeInTheDocument();
      expect(hangmanImage.getAttribute('src')).toMatch(/1\.png$/);
   });
});
