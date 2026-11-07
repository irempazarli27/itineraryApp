import { BrowserRouter, Routes, Route } from "react-router-dom";  

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTrip";
import TripDetail from "./pages/TripDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/trips/new" element={<CreateTrip />} />
          <Route path="/trips/:id" element={<TripDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
