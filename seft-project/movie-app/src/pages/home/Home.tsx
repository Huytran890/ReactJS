import ButtonNextpage from "../../components/ButtonNextpage"
import NowPlaying from "./NowPlaying"
import PopularMovie from "./PopularMovie"

const Home = () => {
    return (
        <>
            <section className="mt-6">
                <PopularMovie />
            </section>
            <section className="mt-14">
                <NowPlaying />
            </section>
            <section className="mt-10">
                <ButtonNextpage />
            </section>
        </>
    )
}

export default Home