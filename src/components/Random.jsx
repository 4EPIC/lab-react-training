export default function Random(props) {
  const { min, max } = props;
  return (
    <div className="id-card">
      <p>
        Random value between {min} and {max} =>{' '}
        {Math.random() * (max - min) + min}
      </p>
    </div>
  );
}
