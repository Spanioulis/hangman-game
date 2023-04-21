export type TUseRandom = {
   id: string;
   value: string;
};

const useRandom = (arr: TUseRandom[]): { randomIndex: number } => {
   const randomIndex = Math.floor(Math.random() * arr.length);
   return { randomIndex };
};

export default useRandom;
