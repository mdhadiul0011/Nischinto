"use client"
import React, { useState } from "react";
import Image from "next/image";
import { BlogpaginateData } from "@/alldata/blogpaginatedata";
import Link from "next/link";
import ReactPaginate from "react-paginate";

function Pagination() {
  
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
    <>
      <div className="ns-pagination">
        {currentItems.map((item, i) => (
          <div className="ns-pagination-item" key={i}>
            <div className="ns-pagi-img">
              <Image
                src={item.img}
                alt="Blog_img"
                priority={true}
                className="ns-blog-img"
              />
            </div>
            <div className="ns-blog-pagi-text">
              <h3>{item.headline}</h3>
              <span>{item.admin}</span> <span>|</span> <span>{item.date}</span>
              <p>{item.des}</p>
              <Link href="/blog-details-right-sidebar">
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
    </>
  );
}

export default Pagination;
