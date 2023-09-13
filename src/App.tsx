import { Dropdown } from "./components/Dropdown";

function App() {
  return (
    <h1>
      <Dropdown menu={<h2>hola</h2>} trigger={<h3>Adios</h3>} />
    </h1>
  );
}

export default App;
