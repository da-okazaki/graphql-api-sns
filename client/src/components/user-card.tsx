import { FC } from 'react';
import { Card, makeStyles, createStyles } from '@material-ui/core';

interface Props {
  name: string;
  profile: string;
  berthDay?: string;
}
const UserCard: FC<Props> = ({ name, profile, berthDay }: Props) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardContainer}>
      <div>name: {name}</div>
      <div>profile: {profile}</div>
      {/**
      <div>berthDay: {berthDay}</div>
       */}
    </Card>
  );
};
export default UserCard;

const useStyles = makeStyles((theme) =>
  createStyles({
    cardContainer: {
      width: '100%',
      height: '20vh',
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'start',
      margin: '16px',
      padding: '8px',
      flexDirection: 'column',
    },

    title: {
      flexGrow: 1,
      display: 'flex',
      textAlign: 'left',
      marginLeft: theme.spacing(2),
    },
  })
);
