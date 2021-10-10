import "./App.css";
import FinalStep from "./components/FinalStep/FinalStep";
import FooterNav from "./components/FooterNav/FooterNav";
import Header from "./components/Header/Header";
import FirstStep from "./components/FirstStep/FirstStep";
import SecondStep from "./components/SecondStep/SecondStep";
import { useSelector } from "react-redux";

function App() {
  const currentForm = useSelector((state) => state.app.currentForm);
  return (
    <div className="wrapper">
      <Header />
      {currentForm === 1 ? (
        <FirstStep/>
      ) : currentForm === 2 ? (
        <SecondStep />
      ) : (
        <FinalStep />
      )}
      {currentForm !== 3 ? <FooterNav /> : ""}
    </div>
  );
}

export default App;
