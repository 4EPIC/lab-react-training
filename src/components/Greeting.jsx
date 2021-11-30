let hello = ""

export default function Greeting(props) {
  const { name, lang } = props;
  switch (lang) {
    case "de": 
    hello = "hallo";
      break;
    case "fr": 
    hello = "bonjour";
      break;
  }
  return (
    <div className="id-card">
      {hello} {props.name}
    </div>
  );
}
