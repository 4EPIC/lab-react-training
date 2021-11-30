import IdCard from './IdCard';

const IdData = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: '178',
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: '172',
    birth: new Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];
export default function IdCardList(props) {
  return (
    <div className="idCard">
      <h2>ID List</h2>
      {IdData.map((person, idx) => (
        <IdCard person={person} key={idx} />
      ))}
    </div>
  );
}