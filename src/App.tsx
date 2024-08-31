import "./App.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchUser = () => {
    getUsers();
  };

  return (
    <>
      <button onClick={onClickFetchUser}>データ取得</button>
      {error ? (
        <p>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </>
      )}
    </>
  );
}

export default App;
