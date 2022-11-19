import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodosPage from "./components/TodosPage";
import UsersPage from "./components/UsersPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
