import Card from "@/components/Card";

export default async function Favorite() {
  const res = await fetch('http://localhost:3000/api/favorite/animals');
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