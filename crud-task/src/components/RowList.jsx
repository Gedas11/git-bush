import Row from "./Row";

const RowList = (props) => {
  console.log(props)
  return (
    <>
      {props.data.members.map((member, index) => (
        <Row
         key={index}
          name={member.name}
          age={member.age}
          secretIdentity={member.secretIdentity}
          power={member.power}
        />
      ))}
    </>
  );
};

export default RowList;
