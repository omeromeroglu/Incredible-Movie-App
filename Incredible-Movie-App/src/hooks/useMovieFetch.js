import { useState, useEffect } from "react"
import API from "../API"

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({})
  const [videoState, setVideoState] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setError(false)
        setLoading(true)
        const movie = await API.fetchMovie(movieId)
        const credits = await API.fetchCredits(movieId)
        const video = await API.fetchVideo(movieId)
        //Get directors only
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        )
        console.log(video)

        setState({
          ...movie,
          actors: credits.cast,
          directors,
          
        })
        setVideoState({
          video
          
        })
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }
    fetchMovie()
  }, [movieId])

    return {state, loading, error,videoState}
}
