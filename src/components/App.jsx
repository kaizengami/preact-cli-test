import { h, render, Component } from "preact";

import Page from "./Page/Page";
import Footer from "./Footer/Footer";

export class App extends Component {
  render() {
    return (
      <div id="root">
        <Page />
        <Footer />
      </div>
    );
  }
}

export default App;
