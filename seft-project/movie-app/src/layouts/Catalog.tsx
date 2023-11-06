import { MovieType } from "../Util"
import Card from "../components/Card"
import axios from "axios"
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/spinner/LoadingSpinner";

const Catalog = ({ type }: { type: string }) => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8'
        }
    };

    const fetchMovies = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${type}?page=1`,
            options
        );
        return response.data.results;
    };

    const { data, isLoading, isError, error } = useQuery<MovieType[], Error>({
        queryKey: [`${type}`, 0],
        queryFn: () => fetchMovies(),
    });

    // console.log('<<=== data ===>>', data);

    // Đặt title dựa vào type
    let title = '';
    switch (type) {
        case 'popular':
            title = 'Popular Movies';
            break;
        case 'now_playing':
            title = 'Now Playing';
            break;
        default:
            break;
    }

    return (
        <>
            {/* background */}
            <div className="h-[120px] left-0 right-0 top-0 relative">
                <div className="overlay-film-cover"></div>
                <div className="h-full w-full bg-[#423F71]"></div>
            </div>
            {/* PAGE TITLE */}
            <div
                className="-mt-[120px] flex items-center relative text-2xl text-primary font-semibold p-5 z-10"
                title={title}
            >{title}</div>
            {/* Films */}
            <div>
                {isError && <div>Error: {error?.message}</div>}

                {isLoading && (
                    <LoadingSpinner />
                )}
                <div className="grid lg:grid-cols-4 sm:grid-cols-3 mobile:grid-cols-2 relative z-[11] gap-4">
                    {data && data.map((slide, i) => (
                        <div key={i}>
                            <Card slide={slide} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Catalog