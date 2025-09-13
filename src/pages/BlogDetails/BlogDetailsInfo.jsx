import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const BlogDetailsInfo = () => {
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
                    <span className="breadcrumb-text">
                      Wel illum qui dolorem eum fugiat?
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="article-area section-pt">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="blog-article-wrapper without-wrap">
                <div className="blog-article-wrap blog-article">
                  {/* <!-- blog single-post start --> */}
                  <div className="article-blog-post">
                    {/* <!-- blog img start --> */}
                    <div className="blog-post-opt blog-post-img">
                      <div className="blog-image">
                        <Link to="/blog-details" className="banner-img">
                          <img
                            src="img/blog/blog-big.jpg"
                            className="img-fluid"
                            alt="article-01"
                          />
                        </Link>
                        <ul>
                          {/* <!-- blog-date start --> */}
                          <li className="date-time">
                            <span>Sep 25, 2025</span>
                          </li>
                          {/* <!-- blog-date end --> */}
                          {/* <!-- blog-comment start --> */}
                          <li className="blog-comment">
                            <span className="comment-count">2 comments</span>
                          </li>
                          {/* <!-- blog-comment end --> */}
                        </ul>
                      </div>
                    </div>
                    {/* <!-- blog img start --> */}
                    {/* <!-- blog title start --> */}
                    <div className="blog-post-opt blog-post-title">
                      <div className="blog-revert">
                        <h6 className="post-title">
                          Wel illum qui dolorem eum fugiat?
                        </h6>
                        {/* <!-- blog-info start --> */}
                        <div className="post-info">
                          <span>By Spacing Tech</span>
                        </div>
                        {/* <!-- blog-info end --> */}
                      </div>
                    </div>
                    {/* <!-- blog title end --> */}
                    {/* <!-- blog content start --> */}
                    <div className="blog-post-opt blog-post-content">
                      <div className="blog-content">
                        <div className="blog-wrap-desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit doli. Aenean commodo ligula eget dolor. Aenean
                            massa. Cumtipsu sociis natoque penatibus et magnis
                            dis parturient montesti, nascetur ridiculus mus.
                            Donec quam felis, ultricies nec, pellentesque eutu,
                            pretiumem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu. In enim justotuio, rhoncus ut loret,
                            imperdiet Link, venenatis vitae, justo. Nullam
                            dictum felis eu pede mollis pretium. Intege
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit doli. Aenean commodo ligula eget dolor. Aenean
                            massa. Cumtipsu sociis natoque penatibus et magnis
                            dis parturient montesti, nascetur ridiculus mus.
                            Donec quam felis, ultricies nec, pellentesque eutu,
                            pretiumem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu. In enim justotuio, rhoncus ut loret,
                            imperdiet Link, venenatis vitae, justo. Nullam
                            dictum.
                          </p>
                          <div>
                            <blockquote>
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit doli. Aenean commodo ligula eget
                              dolor. Aenean massa. Cumtipsu sociis natoque
                              penatibus et magnis dis parturient montesti,
                              nascetur ridiculus mus. Donec quam felis,
                              ultricies nec,
                            </blockquote>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit doli. Aenean commodo ligula eget dolor. Aenean
                            massa. Cumtipsu sociis natoque penatibus et magnis
                            dis parturient montesti, nascetur ridiculus mus.
                            Donec quam felis, ultricies nec, pellentesque eutu,
                            pretiumem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu. In enim justotuio, rhoncus ut loret,
                            imperdiet Link, venenatis vitae, justo. Nullam
                            dictum felis eu pede mollis pretium. Integer
                            tincidunt. Cras dapibus.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- blog content end --> */}
                    {/* <!-- blog tag start --> */}
                    <div className="blog-post-opt blog-post-teg">
                      <div className="post-info-tag">
                        <ul className="post-tag">
                          <li>
                            <Link to="/blog-details">Android</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Blog</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Device</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Engineer</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Gadget</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Mobile</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">News</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Raspberrypi</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Robot</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Smartphone</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Techie</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- blog tag end --> */}
                    {/* <!-- blog share start --> */}
                    <div className="blog-post-opt blog-post-icon">
                      <div className="blog-share">
                        <ul className="social-icon">
                          {/* facebook-icon */}
                          <li>
                            <Link to="#">
                              <span className="icon-social facebook">
                                <FaFacebookF />
                              </span>
                            </Link>
                          </li>

                          {/* twitter-icon */}
                          <li>
                            <Link to="#">
                              <span className="icon-social twitter">
                                <FaTwitter />
                              </span>
                            </Link>
                          </li>

                          {/* pinterest-icon */}
                          <li>
                            <Link to="#">
                              <span className="icon-social pinterest">
                                <FaPinterestP />
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- blog share end --> */}
                    {/* <!-- blog-arrow start --> */}
                    <div className="blog-post-opt blog-post-arrow">
                      <div className="blog-prev-next">
                        <ul>
                          <li>
                            <Link to="#">
                              <i className="bi bi-chevron-double-left"></i>
                              <span>Prev post</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <span>Next post</span>
                              <i className="bi bi-chevron-double-right"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- blog-arrow end --> */}
                  </div>
                  {/* <!-- blog single-post end --> */}
                  {/* <!-- blog post comment start --> */}
                  <div className="blog-comments">
                    <div className="review-comment">
                      <div className="cmt-tit-count">
                        <h6 className="comment-title">
                          <span className="cmt-title">Comment</span>
                          <span className="cmt-count">(1)</span>
                        </h6>
                      </div>
                      <div className="cmt-info-wrap">
                        <div className="comment-info">
                          <div className="comment-avtar">
                            <div className="review-name">
                              <span className="avtar-cmt">
                                <span className="cmt-auth">Ol</span>
                              </span>
                            </div>
                            <div className="review-info">
                              <span className="cmt-authr">Oliver jake</span>
                              <span className="time">May 14, 2025</span>
                            </div>
                          </div>
                          <div className="comment-content">
                            <div className="comment-desc">
                              <p>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-comment-form">
                      <form method="post" className="comment-form">
                        <div className="comments-reply-area">
                          <h6 className="comment-title">Leave Link comment</h6>
                          <div className="form-wrap">
                            <div className="form-filed">
                              <label>
                                Name<span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                name="comment[author]"
                                placeholder="Name"
                              />
                            </div>
                            <div className="form-filed">
                              <label>
                                Email address<span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                name="comment[author]"
                                placeholder="Email address"
                              />
                            </div>
                            <div className="form-filed">
                              <label>
                                Message<span className="required">*</span>
                              </label>
                              <textarea
                                rows="5"
                                className="comment-notes"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="comment-form-submit">
                            <button className="btn btn-style2">
                              Post comment
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <!-- blog post comment end --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsInfo;
