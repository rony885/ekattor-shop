import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import blogPosts from "../../blog.js";

const Blog = () => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    setblogs(blogPosts);
  }, []);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <div className="our-blog section-ptb">
        <div className="blog-category">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section-capture">
                  <div className="section-title">
                    <div className="section-cont-title">
                      <h2>
                        <span>Blog &amp; events</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Slider */}
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="blog-wrap">
                  <Slider {...settings}>
                    {blogs.map((post) => (
                      <div className="item" key={post.id}>
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
                                <span className="blog-date">02</span>
                                <span className="blog-month">Jan</span>
                                <span className="blog-year">2025</span>
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
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .blog-wrap .slick-slide {
    padding: 0 15px;
  }

  .blog-wrap .slick-list {
    margin: 0 -15px;
  }
`;

export default Blog;
