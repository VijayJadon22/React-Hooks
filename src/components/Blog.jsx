import React, { useState } from "react";
import styles from "../styles.module.css"

export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);

  const addNewBlog = () => {
    if (title && content) {
      setBlogs((prevBlogs) => [{ title, content }, ...prevBlogs]);
      setContent("");
      setTitle("");
      alert("Blog added!");
    } else {
      alert("Blog not added! please give title and content");
    }
  };

  return (
    <div>
      <div>
        <h1>Write a blog!</h1>
        <input
          style={{ margin: "10px" }}
          type="text"
          placeholder="Enter blog title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          style={{ margin: "10px" }}
          type="text"
          placeholder="Enter blog content"
          value={content}
          required
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button onClick={addNewBlog}>Add Blog!</button>
          </div>
          <hr />
      <div className={styles.blogContainer}>
        {blogs ? (
          blogs.map((ele, index) => (
            <div key={index} className={styles.blogCards}>
              <h3>{ele.title}</h3>
              <p>{ele.content}</p>
            </div>
          ))
        ) : (
          <p>No Blogs</p>
        )}
      </div>
    </div>
  );
};
