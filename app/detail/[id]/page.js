import FavoriteButton from "@/components/FavoriteButton";

export default async function Detail({params}) {
  const animalId = params.id;
  const res = await fetch(`http://localhost:3000/api/animal/${animalId}`);
  const animalData = await res.json();

  return (
    <section className="detail">
      <img src={animalData?.img.src} /> {/* ?를 사용해서 데이터가 있으면 값을 가지고온다.*/}
      <h2>
        {animalData?.name}
        <FavoriteButton animalId={animalData.id} />
      </h2>
      <div>{animalData?.description}</div>
    </section>
  );
}