import "./App.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "トーマス",
  number: "00000000",
  adress: "aaaaaaaa",
};
function App() {
  return (
    <>
      <UserCard user={user} />
    </>
  );
}

export default App;
