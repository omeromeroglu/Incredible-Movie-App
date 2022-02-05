import {useState , useEffect} from 'react';

//API

import API from "../API"


const initialState = {
    page: 0,
    results : [],
    total_pages: 0,
    total_results: 0,
}


export const useHomeFetch = () => {

    let [searchTerm, setSearchTerm] = useState("");
    const [state,setState]= useState(initialState)
    const [loading,setLoading]= useState(false)
    const [error, setError] = useState(false)
    const [isLoadingMore, setIsLoadingMore] = useState(false)


    const fetchMovies = async (searchTerm = "", page) => {
        try{
            setLoading(true)
            setError(false)

            const movies = await API.fetchMovies(searchTerm, page)
            

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : movies.results
            }))
        }catch(error){
            setError(true)
        }
        setLoading(false)
    }

    
    //Initial render and search
    useEffect(() => {
        setState(initialState)
        fetchMovies(searchTerm,1)
    },[searchTerm])


    //Load More
    useEffect(() => {
        if(!isLoadingMore) return
        fetchMovies(searchTerm, state.page + 1)
        setIsLoadingMore(false)
    
    },[isLoadingMore, searchTerm, state.page])

    

    return {state , loading , error, setSearchTerm, searchTerm,setIsLoadingMore}

}