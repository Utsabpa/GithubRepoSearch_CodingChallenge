import Card from './card';
import NoData from './no-data';
import styles from './list.module.scss';
import { IListProps } from './types';

const List = ({ className, data }: IListProps) => {
  if (!data) return null;
  // If No data, render NoData component else render the cards
  // Each card represents the github repository
  // Using ternary operator for this
  return (
    <div className={`${styles['repo-list']} ${className ?? ''}`}>
      {!data.length ? <NoData /> : data.map((d: any) => <Card key={d.node.id} data={d.node} />)}
    </div>
  );
};

export default List;
