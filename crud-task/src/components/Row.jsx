const Row = ({ name, age, secretIdentity, power }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{secretIdentity}</td>
      <td>{power}</td>
      <td>
        <button className="btn btn-light">Edit</button>
      </td>
      <td>
        <button className="btn btn-light">Delete</button>
      </td>
    </tr>
  );
};

export default Row;
