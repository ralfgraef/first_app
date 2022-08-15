export interface Todo {
    id: number;
    description: string;
    isChecked: boolean;
  }
  
  export let todos = [
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
    },
    {
      id:4,
      description: 'Cleaning the garden and the terasse and make it all schön',
      isChecked: false
    }
  ];