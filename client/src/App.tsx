import { gql, useQuery, useMutation, useSubscription } from '@apollo/client';
import { UserCard } from './components';
import './App.css';

// クエリを定義
const GET_USERS = gql`
  query {
    users {
      name
      profile
    }
  }
`;

export default function App() {
  const { loading, error, data } = useQuery(GET_USERS, {
    variables: { language: 'japanese' },
  });
  // 結果を表示する
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className='App'>
      {data.users.map(({ name, profile }: any, index: number) => (
        <div key={name}>
          <UserCard name={name} profile={profile} />
        </div>
      ))}
    </div>
  );
}
