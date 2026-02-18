import { useEffect, useState } from "react";
import { updateData, postData } from "../api/PostAPI";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  let isEmpty = Object.keys(updateDataApi).length === 0;

  const validate = () => {
    let newErrors = {};

    if (!addData.title.trim()) newErrors.title = "Title is required";
    if (!addData.body.trim()) newErrors.body = "Post content is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //   get the udpated Data and add into input field
  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  }, [updateDataApi]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setAddData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // remove error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const addPostData = async () => {
    const res = await postData(addData);
    console.log("res", res);

    if (res.status === 201) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" });
    }
  };

  //   updatePostData
  const updatePostData = async () => {
    try {
      const res = await updateData(updateDataApi.id, addData);
      console.log(res);

      if (res.status === 200) {
        setData((prev) => {
          return prev.map((curElem) => {
            return curElem.id === res.data.id ? res.data : curElem;
          });
        });

        setAddData({ title: "", body: "" });
        setUpdateDataApi({});
      }
    } catch ({ error }) {
      console.log(error);
    }
  };

  //   form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const action = e.nativeEvent.submitter.value;
    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostData();
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
        {/* TITLE */}
        <div>
          <input
            type="text"
            name="title"
            placeholder="Post title..."
            value={addData.title}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg bg-slate-900 border ${
              errors.title ? "border-red-500" : "border-slate-600"
            } text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 outline-none`}
          />
          {errors.title && (
            <p className="text-red-400 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* BODY */}
        <div>
          <textarea
            name="body"
            placeholder="Write your post..."
            value={addData.body}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-4 py-3 rounded-lg bg-slate-900 border ${
              errors.body ? "border-red-500" : "border-slate-600"
            } text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 outline-none`}
          />
          {errors.body && (
            <p className="text-red-400 text-sm mt-1">{errors.body}</p>
          )}
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          value={isEmpty ? "Add" : "Edit"}
          className="py-3 cursor-pointer rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 transition font-semibold text-lg"
        >
          {isEmpty ? "Add Post" : "Update Post"}
        </button>
      </form>
    </>
  );
};
