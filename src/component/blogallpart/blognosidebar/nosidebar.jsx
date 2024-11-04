"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { BlogpaginateData } from "@/alldata/blogpaginatedata";

function Nosidebar() {
      
  const blog = BlogpaginateData.filter(items => items.page === "dr_blog");

  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = blog.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blog.length / itemsPerPage);
  // click to request another page.
  const handlePageClick = (event) => {
     const newOffset = (event.selected * itemsPerPage) % blog.length;
     setItemOffset(newOffset);
  };

  return (
    <div className="pagi-blog">
      <div className="container-sm">
        <div className="row">
          <div className="col-lg-12">
            <div className="ns-paginations">
              {currentItems.map((item, i) => (
                <div className="ns-pagination-items" key={i}>
                  <div className="ns-pagi-imgs">
                    <Image
                      src={item.img}
                      alt="Blog_img"
                      priority={true}
                      className="ns-blog-imgs"
                    />
                  </div>
                  <div className="ns-blog-pagi-texts">
                    <h3>{item.headline}</h3>
                    <span>{item.admin}</span> <span>|</span>{" "}
                    <span>{item.date}</span>
                    <p>{item.des}</p>
                    <Link href="#ns-about-part">
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination-wrap mt-30">
              <nav aria-label="Page navigation example">
                <ReactPaginate
                  breakLabel="..."
                  breakLinkClassName="page-link"
                  nextLabel=">"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="<"
                  renderOnZeroPageCount={null}
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  containerClassName="pagination mx-auto"
                  activeClassName="active"
                />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosidebar;
