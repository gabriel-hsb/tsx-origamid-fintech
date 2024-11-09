import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataContextProvider } from "./contexts/DataContext";

import SaleId from "@/Pages/SaleId";
import Sales from "@/Pages/Sales";
import Summary from "@Pages/Summary";

import Header from "@Components/Header";
import SideNav from "@Components/SideNav";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <SideNav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/sales/:id" element={<SaleId />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
