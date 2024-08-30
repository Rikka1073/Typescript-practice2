import axios from "axios";
import "./App.css";
import { UserCard } from "./components/UserCard";
import { User } from "./types/api/user";
import { useState } from "react";
import { UserProfile } from "./types/userProfile";

const user = {
  id: 1,
  name: "トーマス",
  email: "00000000",
  address: "aaaaaaaa",
};

function App() {
  const [userProfiles, setuserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClickFetchUser = () => {
    setLoading(true);
    console.log("クリックしました");
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }));
        setuserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
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
