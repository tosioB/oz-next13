import Card from "../components/Card";

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/animal');
  const animals = await res.json();

  return (
    <>
      <ul>
        {animals.map((el) => (
          <Card key={el.id} animal={el} />
        ))}
      </ul>
    </>
  )
}