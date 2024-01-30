import { useState } from "react";
import "./App.css";
import Data from "./Data";

function App() {
  const [topic, setTopic] = useState(0);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td onClick={() => setTopic(0)}>users</td>
            <td onClick={() => setTopic(1)}>posts</td>
            <td onClick={() => setTopic(2)}>comments</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Data topic={topic} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
