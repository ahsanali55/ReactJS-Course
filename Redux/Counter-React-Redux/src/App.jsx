import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy)
  return (
    <center className="px-4 py-5 my-5  text-center">
      <Container>
        <img
          className="d-block mx-auto mb-4"
          src="/docs/5.3/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <Header />
        <div className="col-lg-6 mx-auto">
         { privacy ? <PrivacyMessage /> : <DisplayCounter />}
          <Controls />
        </div>
      </Container>
    </center>
  );
}

export default App;
