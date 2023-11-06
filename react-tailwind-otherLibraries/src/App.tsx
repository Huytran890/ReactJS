import { useState } from "react";
import Button from "./components/Button";
import ButtonTW from "./components/ButtonTW"
import tw from 'twin.macro'
import StyledComponent from "./components/StyledComponent";
import toast from "react-hot-toast";

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: () => [
    tw`flex flex-col items-center justify-center h-screen`,
  ],
}

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(!showMessage);
  }
  if (showMessage) {
    toast.success("toast successfully.")
  } else {
    toast.error("toast errors!")
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center pt-20 gap-5'>
        <div>
          <button className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white overflow-hidden"
            onClick={handleButtonClick}
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[136px] group-hover:h-[136px] opacity-10"></span>
            <span className="relative">🔥Toast Button</span>
          </button>
        </div>
        <Button>Button</Button>
      </div>

      {/* <TwinMacro /> */}
      <StyledComponent />

      <div>
        <span>Hello world</span>
        <div css={styles.container()}>
          <div tw="flex flex-col justify-center h-full gap-y-5">
            <ButtonTW $variant="primary">Submit</ButtonTW>
            <ButtonTW $variant="secondary">Cancel</ButtonTW>
            <ButtonTW>Close</ButtonTW>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
