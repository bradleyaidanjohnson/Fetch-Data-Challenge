import { useState, useEffect } from "react";
import ListItems from "./ListItems";

const Data = ({ topic }) => {
  const USERS_FETCH_URL = "https://jsonplaceholder.typicode.com/users";
  const POSTS_FETCH_URL = "https://jsonplaceholder.typicode.com/posts";
  const COMMENTS_FETCH_URL = "https://jsonplaceholder.typicode.com/comments";

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [currentTopic, setCurrentTopic] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(USERS_FETCH_URL);

        if (!response.ok) throw Error("Did not receive expected data");
        const usersData = await response.json();
        setUsers(usersData);
      } catch (err) {
        console.log(err.stack);
      } finally {
        // code
      }
      try {
        const response = await fetch(POSTS_FETCH_URL);

        if (!response.ok) throw Error("Did not receive expected data");
        const postsData = await response.json();
        setPosts(postsData);
      } catch (err) {
        console.log(err.stack);
      } finally {
        // code
      }
      try {
        const response = await fetch(COMMENTS_FETCH_URL);

        if (!response.ok) throw Error("Did not receive expected data");
        const commentsData = await response.json();
        setComments(commentsData);
      } catch (err) {
        console.log(err.stack);
      } finally {
        // code
      }
    };

    (async () => await fetchData())();
  }, []);

  if (topic === 0 && currentTopic !== users) {
    setCurrentTopic(users);
  } else if (topic === 1 && currentTopic !== posts) {
    setCurrentTopic(posts);
  } else if (topic === 2 && currentTopic !== comments) {
    setCurrentTopic(comments);
  }

  return (
    <div>
      <ListItems items={currentTopic} />
    </div>
  );
};

export default Data;
