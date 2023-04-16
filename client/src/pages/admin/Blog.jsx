import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  admin_getAllBlogs,
  admin_userBlogPublishUnpublishAction,
} from "../../redux/admin/adminActions";
import { BACKEND } from "../../redux/api";

const Blog = () => {
  const [show, setShow] = useState(false)
  const [slectedBlogs, setSlectedBlogs] = useState();
  const { blogs, updatedd } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(admin_getAllBlogs());
  }, [updatedd]);
  console.log(blogs);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            {blogs &&
              blogs.map((item) => (
                <div class="card mt-3">
                  <div class="card-body d-flex justify-content-between">
                    <p>{item.title}</p>
                    <button
                      onClick={(e) => {
                        setSlectedBlogs(item);
                      }}
                      type="button"
                      class="btn btn-primary btn-sm"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="col-sm-4">
            <div class="card mt-3">
              {slectedBlogs && (
                <div class="card-body">
                  <div className="d-flex justify-content-end mb-3">
                    {" "}
                    <button
                      onClick={e=>setShow(!show)}
                      type="button"
                      class="btn btn-primary btn-sm text-end"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                  </div>
                  <img
                    src={`${BACKEND}/${slectedBlogs?.image}`}
                    className="img-fluid"
                    alt=""
                  />
                  <p>{slectedBlogs?.title}</p>
                  <p>{slectedBlogs?.desc}</p>
                </div>
              )}
            </div>
          </div>
          <div className="col-sm-4">
            {
              show && <div class="card">
              <div class="card-header">Edit {slectedBlogs?.title} Profile</div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item d-flex justify-content-between">
                    <strong>
                      {" "}
                      {slectedBlogs?.publish ? "Publish" : "Unpublish"}
                    </strong>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="id"
                        checked={slectedBlogs?.publish}
                        onChange={(e) => {
                          dispatch(
                            admin_userBlogPublishUnpublishAction({
                              userId: slectedBlogs._id,
                              publish: e.target.checked,
                            })
                          );
                          setSlectedBlogs({
                            ...slectedBlogs,
                            publish: e.target.checked,
                          });
                        }}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
