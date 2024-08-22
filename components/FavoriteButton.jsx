'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function FavoriteButton({animalId}) {
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter()


  console.log(favorites)

  useEffect(() => {
    fetch('http://localhost:3000/api/favorite')
      .then(res => res.json())
      .then(res => {
        setFavorites(res)
        res.includes(animalId) ? setIsFavorite(true) : null
      })
  }, [isFavorite])

  const handler = () => {
    const method = isFavorite ? "DELETE" : "POST"
    fetch(`http://localhost:3000/api/favorite/${animalId}`, {method})
      .then(res => {
        setIsFavorite(prev => !prev)
        router.refresh()
      })
  }

  return (
    <button onClick={handler}>
      {isFavorite ? '♥' : '♡'}
    </button>
  )
}