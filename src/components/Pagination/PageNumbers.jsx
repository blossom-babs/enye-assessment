function PageNumbers({ postPerPage, totalPost, changePage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      <ul className="pagination__list">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination__item">
            <button
              className="pagination__link"
              onClick={() => changePage(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PageNumbers;
