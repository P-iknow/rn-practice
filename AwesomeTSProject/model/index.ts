export type todo = {
  title: string;
  todoIndex: number;
  complete: boolean;
};

export type todos = todo[];

export type todoType = 'All' | 'Active' | 'Complete';
