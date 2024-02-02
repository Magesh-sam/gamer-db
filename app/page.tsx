import React from 'react'
import RAWG from '@/lib/axios'




async function page() {

  try {
    const data = await RAWG.get("games");
    const gamesData = await data.data
    console.log(gamesData)
  }
  catch (error) {
    console.log(error);
  }

  return (
    <main>
        <h1>Gamer-DB</h1>
    </main>
  )
}

export default page