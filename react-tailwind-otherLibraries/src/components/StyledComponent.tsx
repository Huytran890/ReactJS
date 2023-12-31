import tw, { styled } from "twin.macro";

const StyledComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <StyledButton>In Style</StyledButton>
                <br />
                <TailwindButton>In Tailwind Style</TailwindButton>
                <br />
                <ConditionalButton $isRed={false}>Conditional Tailwind</ConditionalButton>
            </main>
        </div>
    )
}

// still works despite importing from twin.macro
const StyledButton = styled.button`
    background: red;
    color: white;
    font-size: 1em;
    text-align: center;
    padding: 0.25em 1em;
    border: 2px solid black;
`;

const TailwindButton = tw.button`
    bg-red-500
    hover:bg-red-700
    text-white
    font-bold
    py-2
    px-4
    border
    border-black
    rounded
`;

interface ConditionalButtonProps {
    $isRed?: boolean
}


const ConditionalButton = styled.button<ConditionalButtonProps>(({ $isRed }) => [
    $isRed ? tw`bg-red-500 hover:bg-red-700` : tw`bg-blue-500 hover:bg-blue-500`,
    tw`
    text-white
    font-bold
    py-2
    px-4
    border
    border-black
    rounded
`,
]);

export default StyledComponent