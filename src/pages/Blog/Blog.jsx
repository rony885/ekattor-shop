import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogPosts from "../../blog.js";

const Blog = () => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    setblogs(blogPosts);
  }, []);

  return (
    <>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="col">
            <div className="row">
              <div className="breadcrumb-index">
                <ul className="breadcrumb-ul">
                  <li className="breadcrumb-li">
                    <Link className="breadcrumb-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-li">
                    <span className="breadcrumb-text">Blog</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="article-area section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="blog-grid-wrapper without-wrap">
                <div className="blog-grid-wrap blog-article">
                  <div className="blog-grid-view">
                    <ul className="blog-area-wrap">
                      {blogs.map((post) => (
                        <li key={post.id} className="blog-slider">
                          <div className="blog-post">
                            <div className="blog-img">
                              <Link to="/blog-details" className="banner-img">
                                <img
                                  src={post.img}
                                  className="img-fluid"
                                  alt={post.title}
                                />
                                <span className="blog-icon">
                                  <i className="fas fa-paperclip"></i>
                                </span>
                                <span className="blog-date-time">
                                  <span className="blog-date">{post.date}</span>
                                  <span className="blog-month">
                                    {post.month}
                                  </span>
                                  <span className="blog-year">{post.year}</span>
                                </span>
                              </Link>
                            </div>
                            <div className="blog-content">
                              <div className="blog-tag">
                                <h2>{post.title}</h2>
                              </div>
                              <p className="blog-title">{post.desc}</p>
                              <Link
                                to="/blog-details"
                                className="blog-btn btn-style2"
                              >
                                Read more
                              </Link>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="paginatoin-area">
                      <ul className="pagination-page-box">
                        <li className="number active">
                          <Link to="#" className="theme-glink">
                            1
                          </Link>
                        </li>
                        <li className="number">
                          <Link to="#" className="gradient-text">
                            2
                          </Link>
                        </li>
                        <li className="page-next">
                          <Link to="#" className="theme-glink">
                            <i className="fa -solid fa-angle-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
