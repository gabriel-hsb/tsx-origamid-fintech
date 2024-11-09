import { DataContextProvider } from "./contexts/DataContext";

import Summary from "@Pages/Summary";

import Header from "@Components/Header";
import SideNav from "@Components/SideNav";
import Sales from "./Pages/Sales";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <SideNav />
        <main>
          <Header />
          <Summary />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
