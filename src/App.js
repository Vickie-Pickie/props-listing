import data from './data';
import Listing from "./Listing";
const etsy = JSON.parse(data);

function App() {
  return (
    <Listing items={etsy} />
  );
}

export default App;
