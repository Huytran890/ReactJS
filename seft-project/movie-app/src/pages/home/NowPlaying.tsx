import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import { MovieType } from '../../Util';
import ShareHeading from '../../components/ShareHeading';
import { Slider } from '../../components/slider/Slider';
import LoadingSpinner from '../../components/spinner/LoadingSpinner';
const NowPlaying = () => {
    const title = 'Movies and Shows';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8'
        }
    };
    const fetchNowPlayings = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?page=2', options);
        const allResults = response.data.results;
        const firstPart = allResults.slice(0, 10);
        const secondPart = allResults.slice(10, 20);

        return [firstPart, secondPart];
    };
    const { data, isLoading, isError, error } = useQuery<MovieType[][], Error>({
        queryKey: ["nowPlaying", 0],
        queryFn: () => fetchNowPlayings(),
    });

    // console.log('<<=== data ===>>', data);
    // console.log('<<=== data2 ===>>', data2);
    return (
        <>
            <ShareHeading title={title} />
            {isError && <div>Error: {error?.message}</div>}

            {isLoading && (
                <LoadingSpinner />
            )}
            {data && (
                <>
                    <div className="mb-8">
                        <Slider slides={data[0]} props={{ slidesPerView: 4, spaceBetween: 20, speed: 1300, autoplay: { delay: 3800 } }} />
                    </div>
                    <div>
                        <Slider slides={data[1]} props={{ slidesPerView: 4, spaceBetween: 20, speed: 1300, autoplay: { delay: 3800 } }} />
                    </div>
                </>
            )}
        </>
    )
}

export default NowPlaying