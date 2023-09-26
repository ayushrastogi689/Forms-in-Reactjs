import Form from "./components/Form/Form";
import "./App.css";
import OptimizedForm from "./components/OptimizedForm/OptimizedForm";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import ValidationForm from "./components/Form with Validation Implemented/ValidationForm";

function App() {
  return (
    <div className="app">
      <SimpleForm />
      <Form />
      <ValidationForm />
      <OptimizedForm />
    </div>
  );
}

export default App;
