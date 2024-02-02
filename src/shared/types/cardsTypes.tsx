export interface CardsTypes {
    index: number;
    title: string;
    task: {
      taskName: string;
      taskDescription: string;
      completed: boolean;
    }[];
  }
  