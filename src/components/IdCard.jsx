export default function IdCard(props) {
  const { person } = props;
  return (
    <div className="id-card">
      <p>{person.lastName}</p>
      <p>{person.firstName}</p>
      <p>{person.gender}</p>
      <p>{person.height}</p>
      <p>{person.birth.toString()}</p>
      <img class="id-card-img" src={person.picture} />
    </div>
  );
}
