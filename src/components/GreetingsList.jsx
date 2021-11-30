export default function GreetingsList(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <section class="flexbox-parent">{props.children}</section>
    </div>
  );
}
