import BlogInfo from "./BlogInfo";
import { useState } from "react";

const Blog = ({ blogs, user, onRemove }) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleShowInfo = () => {
    setShowInfo((showInfo) => !showInfo);
  };

  const filteredBlogs = blogs.filter(
    (blog) => blog.user.username === user.username
  );

  return filteredBlogs.map((blog) => {
    return (
      <div key={blog.id} className="blog">
        <div>
          <li className="title">Title: {blog.title}</li>
          <div>
            {" "}
            <button className="view-button" onClick={handleShowInfo}>
              View
            </button>
            <button className="view-button" onClick={() => onRemove(blog.id)}>
              Remove
            </button>
          </div>
        </div>

        {showInfo === false ? (
          <p>Author: {blog.author}</p>
        ) : (
          <BlogInfo blog={blog} />
        )}
      </div>
    );
  });
};

export default Blog;
