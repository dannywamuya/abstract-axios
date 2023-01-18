import { useEffect, useState } from "react";
import {
  getRequest,
  postRequest,
  patchRequest,
  putRequest,
  deleteRequest,
} from "./request";

const getPosts = async () => {
  return await getRequest("/posts");
};

const createPost = async (data: any) => {
  return postRequest("/posts", data);
};

const updatePost = async (id: number, data: any) => {
  return patchRequest(`/posts/${id}`, data);
};

const updateWholePost = async (id: number, data: any) => {
  return putRequest(`/posts/${id}`, data);
};

const deletePost = async (id: number) => {
  return deleteRequest(`/posts/${id}`);
};

function App() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    getPosts()
      .then((res) => setData(res.data))
      .catch(console.log);
    // createPost({
    //   title: "New Post",
    //   content: "Post from react",
    // }).then((res) => console.log(res.data));
    // updatePost(20, { title: "New Title" }).then((res) => console.log(res.data));
    // updateWholePost(20, { title: "New Title" }).then((res) =>
    //   console.log(res.data)
    // );
    // deletePost(20)
    //   .then((res) => console.log(res.data))
    //   .catch(console.log);
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
