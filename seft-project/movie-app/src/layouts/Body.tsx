import { Route, Routes } from 'react-router-dom'
import Banner from '../components/Banner'
import Container from '../components/Container'
import Home from '../pages/home/Home'
import Catalog from './Catalog'

const Body = () => {
    return (
        <main>
            <Container className='flex items-center mt-2'>
                <Banner />
            </Container>
            <Routes>
                <Route path="/" element={
                    <Container>
                        <Home />
                    </Container>} />
                <Route path="/popular" element={
                    <Container>
                        <Catalog type="popular" />
                    </Container>} />
                <Route path="/now" element={
                    <Container>
                        <Catalog type="now_playing" />
                    </Container>} />
            </Routes>
        </main>
    )
}

export default Body