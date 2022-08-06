export interface Todo {
    id: number;
    description: string;
    isChecked: boolean;
  }
  
  export const todos = [
    {
      id: 1,
      description: 'Bulding up the Hollywood-Schaukel',
      isChecked: false
    },
    {
      id: 2,
      description: 'Cleaning up the house',
      isChecked: false
    },
    {
      id: 3,
      description: 'Learning to cook',
      isChecked: false
    }
  ];