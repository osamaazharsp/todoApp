export interface ITodo {
  description: string;
  id: number;
  status: string;
  title: string;
}

export interface ITodoListItemProps {
  todo: ITodo;
  onStatusChange: () => void;
}
