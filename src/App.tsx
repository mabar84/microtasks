import "./App.css";
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
import {Body} from "./site/Body";

function App() {

  return (
    <div className="App">
      <Header text={'qwe'} />

        <Body titleForBody={'345'}/>

        <Footer titleForFooter={'123'}/>

    </div>
  );
}

export default App;
