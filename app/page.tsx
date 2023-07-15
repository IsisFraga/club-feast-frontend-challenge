import Header from "@/components/Header/Header";
import useMovies from "@/hooks/useMovieList";
import { useMemo } from "react";

export default function Home() {
  const data = useMovies()
  useMemo(() => {
    console.log(data)
  }, [])
  return (
    <>
      <Header />
    </>
  )
}
