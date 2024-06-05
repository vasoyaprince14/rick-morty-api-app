// export default function Pagination(props: {
//     page: number;
//     pages: number;
//     change: (page: number) => void;
//   }) {
//     return (
//       <ul className="list list-hoverable unmarker group-row">
//         <a
//           // @ts-expect-error disabled prop
//           disabled={props.page === 1}
//           onClick={() => props.change(props.page - 1)}
//           className="list-item"
//         >
//           <i className="bi-chevron-left"></i>
//         </a>
//         <a className="list-item active">{props.page}</a>
//         <a
//           // @ts-expect-error disabled prop
//           disabled={props.page === props.pages}
//           onClick={() => props.change(props.page + 1)}
//           className="list-item"
//         >
//           {props.page + 1}
//         </a>
//         <a
//           // @ts-expect-error disabled prop
//           disabled={props.page === props.pages || props.page + 1 === props.pages}
//           onClick={() => props.change(props.page + 2)}
//           className="list-item"
//         >
//           {props.page + 2}
//         </a>
//         <a
//           onClick={() => props.change(props.page + 1)}
//           // @ts-expect-error disabled prop
//           disabled={props.page === props.pages}
//           className="list-item"
//         >
//           <i className="bi-chevron-right"></i>
//         </a>
//       </ul>
//     );
//   }

export default function Pagination(props: {
  page: number;
  pages: number;
  change: (page: number) => void;
}) {
  const { page, pages, change } = props;

  // Helper function to generate the range of pages to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(page - 1, 1);
    const endPage = Math.min(page + 2, pages);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <ul className="list list-hoverable unmarker group-row flex gap-2">
      <button
        disabled={page === 1}
        onClick={() => change(page - 1)}
        className={`list-item ${page === 1 ? "disabled" : ""}`}
      >
        <i className="bi-chevron-left"></i>
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => change(pageNumber)}
          className={`list-item ${page === pageNumber ? "active" : ""}`}
        >
          {pageNumber}
        </button>
      ))}
      <button
        disabled={page === pages}
        onClick={() => change(page + 1)}
        className={`list-item ${page === pages ? "disabled" : ""}`}
      >
        <i className="bi-chevron-right"></i>
      </button>
    </ul>
  );
}
