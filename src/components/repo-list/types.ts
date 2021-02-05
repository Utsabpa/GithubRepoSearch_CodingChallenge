export interface IRepoCard {
  data: {
    name: string;
    url: string;
  };
  className?: string;
}

export interface IListProps {
  className?: string;
  data: Array<any> | null;
}