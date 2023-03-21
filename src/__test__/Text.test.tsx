import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

import Text from '../components/Text';
import { colors } from '../styles';

describe('Text', () => {
   it('renders correctly', () => {
      render(
         <Text size="1.2rem" weight="500" color={colors.font.logo} margin="0.2rem">
            Text testing
         </Text>
      );

      const text = screen.getByText(/text testing/i);

      expect(text).toBeInTheDocument();
      expect(text).toHaveStyle('font-size: 1.2rem');
      expect(text).toHaveStyle(`color: ${colors.font.logo}`);
   });
});
