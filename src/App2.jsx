import { useState, useEffect } from "react";
import ListElements from "./ListElements";
import ButtonSelector from "./ButtonSelector";

const App2 = () => {
  const [items, setItems] = useState([]);
  const [reqType, setReqType] = useState("users");

  const FETCH_URL = "https://jsonplaceholder.typicode.com/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(`${FETCH_URL}${reqType}`);
        console.log(`${FETCH_URL}${reqType}`);
        if (!request.ok) throw Error("Data could not be retrieved");
        const itemsData = await request.json();
        setItems(itemsData);
        console.log(itemsData);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [reqType]);
  return (
    <div>
      <form>
        <ButtonSelector
          key="users"
          name="users"
          setReqType={setReqType}
          reqType={reqType}
        />
        <ButtonSelector
          key="posts"
          name="posts"
          setReqType={setReqType}
          reqType={reqType}
        />
        <ButtonSelector
          key="comments"
          name="comments"
          setReqType={setReqType}
          reqType={reqType}
        />
      </form>
      <ListElements items={items} />
    </div>
  );
};

export default App2;
