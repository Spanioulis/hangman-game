interface Props {
   number: number;
}

const HangmanImage = ({ number }: Props) => {
   if (number < 10) {
      return <img src={require(`../assets/${number}.png`)} alt="Hangman image" width="125px" />;
   }
   return <img src={`../assets/9.png`} alt="Hangman image" width="125px" />;
};

export default HangmanImage;
