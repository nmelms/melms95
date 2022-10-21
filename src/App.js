import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { GlobalProvider } from "./GlobalContext";
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <HomeScreen />
      </div>
    </GlobalProvider>
  );
}

export default App;
