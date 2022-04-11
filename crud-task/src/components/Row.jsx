const Row = ({ name, age, secretIdentity, power, onDelete }) => {
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
        <button className="btn btn-light" onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default Row;
