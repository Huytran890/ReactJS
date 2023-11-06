import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import ShareHeading from '../../components/ShareHeading';
import { Slider } from '../../components/slider/Slider';
import { MovieType } from '../../Util';
import LoadingSpinner from '../../components/spinner/LoadingSpinner';

const PopularMovie = () => {
    const title = 'Popular Movies';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8'
        }
    };
    const fetchPopularMovies = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?page=1', options);
        const results = response.data.results.slice(0, 10);
        return results;
    };

    const { data, isLoading, isError, error } = useQuery<MovieType[], Error>({
        queryKey: ["populars", 0],
        queryFn: () => fetchPopularMovies(),
    });

    // console.log('<<=== data ===>>', data);
    return (
        <>
            <ShareHeading title={title} />
            {isError && <div>Error: {error?.message}</div>}

            {isLoading && (
                <LoadingSpinner />
            )}
            <Slider slides={data} props={{ slidesPerView: 4, spaceBetween: 20, speed: 1300 }} />
        </>
    )
}

export default PopularMovie