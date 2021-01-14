import Card from "./Card";

function Cards({ currentPosts }) {
  return (
    <section className="cards">
      {currentPosts.map((item) => (
        <Card key={item.DomainName} item={item}></Card>
      ))}
    </section>
  );
}

export default Cards;
