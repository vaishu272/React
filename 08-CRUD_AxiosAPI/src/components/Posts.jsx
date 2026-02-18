import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostAPI";
import { Form } from "./Form";

const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPost();

        // show only posts 1 to 4
        const limitedPosts = res.data.slice(0, 4);

        setData(limitedPosts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        setData(data.filter((curPost) => curPost.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePost = (curElem) => setUpdateDataApi(curElem);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white p-8">
      <h1 className="text-3xl text-center font-semibold mb-9 text-gray-100">
        CRUD Opration with API using axios
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left FORM */}
        <div className="bg-slate-800/70 backdrop-blur p-7 rounded-2xl shadow-xl border border-slate-700 h-fit">
          <h2 className="text-2xl font-semibold mb-6 text-emerald-400">
            Manage Post
          </h2>

          <Form
            data={data}
            setData={setData}
            updateDataApi={updateDataApi}
            setUpdateDataApi={setUpdateDataApi}
          />
        </div>

        {/* Right POSTS */}
        <div className="lg:col-span-2 grid gap-8 sm:grid-cols-2">
          {data.map((curElem) => {
            const { id, body, title } = curElem;

            return (
              <div
                key={id}
                className="bg-slate-800/70 backdrop-blur p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/10 transition border border-slate-700"
              >
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                  {title}
                </h3>

                <p className="text-gray-300 text-sm mb-5 line-clamp-3">
                  {body}
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleUpdatePost(curElem)}
                    className="px-4 py-2 cursor-pointer rounded-lg bg-emerald-500 hover:bg-emerald-600 transition font-medium"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDeletePost(id)}
                    className="px-4 py-2 cursor-pointer rounded-lg bg-red-500 hover:bg-red-600 transition font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
