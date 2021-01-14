import { useState } from "react";
import Cards from "./Cards";
import PageNumbers from "./PageNumbers";
import Spinner from "../../images/spinner.gif";

function PaginateCards({ items, isLoading }) {
  //const [posts] = useState(items);
  const posts = items;
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(20);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  function switchPage(item) {
    setCurrentPage(item);
  }

  //console.log(posts);
  return isLoading ? (
    <div className="loader">
      <img src={Spinner} alt="Loading.." className="loader__img" />
    </div>
  ) : (
    <div>
      <Cards items={items} currentPosts={currentPosts} />
      <PageNumbers
        postPerPage={postPerPage}
        totalPost={posts.length}
        changePage={switchPage}
      />
    </div>
  );
}

export default PaginateCards;
