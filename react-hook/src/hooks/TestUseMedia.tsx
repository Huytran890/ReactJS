import useMediaQuery from './customHooks/useMediaQuery';

const TestUseMedia = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        isAboveMediumScreens ? (<p>Màn hình rộng</p>) : (<p>Màn hình tầm trung trở xuống</p>)
    )

}

export default TestUseMedia