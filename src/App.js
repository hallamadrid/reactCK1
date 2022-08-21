import "./App.css";
import ProfilePhoto from "./components/Profile/ProfilePhoto";
import Adress from "./components/Profile/Adress"
import FullName from "./components/Profile/FullName"
function App() {
  return (
    <div>
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}

export default App;
