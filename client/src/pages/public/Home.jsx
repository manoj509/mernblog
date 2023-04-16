import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BACKEND } from "../../redux/api";
import { getBlog } from "../../redux/blog/blogActon";

const Home = () => {
  const { blogs } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog());
  }, []);
  console.log(blogs);
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {blogs && blogs.map((item, i) => <BlogCart blog={item} />)}
        </div>
      </div>
    </div>
  );
};
const BlogCart = ({ blog }) => (
  <div className="col-sm-4 mb-5">
    <div className="card">
      <img
        src={`${BACKEND}/${blog.image}`}
        className="card-img-top img-fluid"
        alt=""
      />
      <div className="card-body">
        <p className="fs-1">{blog.title}</p>
      </div>
    </div>
  </div>
);
export default Home;
