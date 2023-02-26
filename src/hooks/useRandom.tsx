interface Props {
   length: number;
}

const useRandom = (arr: any) => {
   let randomIndex = Math.floor(Math.random() * arr.length);
   return { randomIndex };
};

export default useRandom;
