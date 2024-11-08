import { DataContextProvider } from "./contexts/DataContext";

import Summary from "@Pages/Summary";

import Header from "@Components/Header";
import SideNav from "@Components/SideNav";
import DateRange from "./Components/UI/DateRange";

function App() {
  return (
    <DataContextProvider>
      Fintech!
      <SideNav />
      <main>
        <Header />
        <Summary />
        <DateRange />
      </main>
    </DataContextProvider>
  );
}

export default App;
