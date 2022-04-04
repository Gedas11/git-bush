const Table = ({ children }) => {
  return (
    <>
      <h2 className="mb-3"></h2>
      <div className="container">
        <table className="table table-dark text-left">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Secret Identity</th>
              <th>Power</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
