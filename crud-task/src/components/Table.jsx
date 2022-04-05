const Table = ( props ) => {
  return (
    <>
      <h2 className="mb-3">{props.data.squadName} from {props.data.homeTown} based in {props.data.secretBase}</h2>
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
          <tbody>{props.children}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
