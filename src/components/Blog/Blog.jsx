import React from "react";
import PropTypes from "prop-types";
import { FaBeer, FaBookmark } from "react-icons/fa";
const Blog = ({ blog }) => {
  const { title, cover, author, author_img, reading_time,posted_date ,hashtags} = blog;
  return (
    <div className="mb-20 ">
      <img className="w-full mb-8" src={cover} alt={`cover picture of title ${title}`} />
      <div className="flex justify-between mb-4">
        <div className=" flex">
          <img className="w-14 " src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button className="ml-2 text-2xl text-red-600"><FaBookmark/></button>
        </div>
        <div></div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {
            hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>)
        }
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
