import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import data from "./data/data";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      {data.map((item) => (
        <div className="App__Main">
          <Main item={item} />
        </div>
      ))}
      <Footer />
    </>
  );
}

export default App;
