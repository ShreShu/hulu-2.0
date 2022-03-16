import { useState } from "react";
import request from "./ApiCalls/request";
import "./App.css";
import { Header } from "./component/Header";
import { Nav } from "./component/Nav";
import { Results } from "./component/Results";

function App() {
  const [selectedOption, setselectedOption] = useState(request.fetchTrending);

  return (
    <div className="app">
      {/* header */}
      <Header />

      {/* nav bar */}
      <Nav setselectedOption={setselectedOption} />
      {/* result */}
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
