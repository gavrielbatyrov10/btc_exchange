import "./App.css";
import { Provider } from "react-redux";

import store from "./store";
import Players from "./Players";

function App() {
  //const dispatch = useDispatch();

  //const players = useSelector((state) => state.players.value);

  return (
    <Provider store={store}>
      <Players />
    </Provider>
  );
}

export default App;
