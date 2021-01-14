import { useState, useEffect } from "react";
import axios from "axios";
//styles
import "./styles/app.scss";
//components
import PaginateCards from "./components/Pagination/PaginateCards";
import Search from "./components/Search";
import Header from "./components/Header";
import Gender from "./components/Filters/Gender";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  // set gender query
  const [genQuery, setGenQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https: //api.enye.tech/v1/challenge/records?Gender=${query}`
      );
      const dataNeeded = result.data.records.profiles;
      // console.log(result.data.records.profiles);
      setItems(dataNeeded);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  console.log("something one");
  console.log(genQuery);
  console.log("something two");

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Gender genderQuery={(g) => setGenQuery(g)} />
      <PaginateCards items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
