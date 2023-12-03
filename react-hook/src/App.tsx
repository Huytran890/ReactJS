import Debounce from "./hooks/Debounce"
import LocalStorage from "./hooks/LocalStorage"
import TestUseMedia from "./hooks/TestUseMedia"
import UseCallBackOverriding from "./hooks/UseCallBackOverriding"
import UseContextOverriding from "./hooks/UseContextOverriding"
import UseDeferredValueOverride from "./hooks/UseDeferredValueOverride"
import UseEffectOverriding from "./hooks/UseEffectOverriding"
import UseIdOverriding from "./hooks/UseIdOverriding"
import UseImperativeHandleOverride from "./hooks/UseImperativeHandleOverride"
import UseLayoutEffectOverriding from "./hooks/UseLayoutEffectOverriding"
import UseMemoOverriding from "./hooks/UseMemoOverriding"
import UseOptimistic from "./hooks/UseOptimistic"
import { UseRefOverriding, UseRefOverriding2 } from "./hooks/UseRefOverriding"
import UseTransition from "./hooks/UseTransition"
import UseStateOverriding from "./hooks/useStateOverriding"

function App() {

  return (
    <div className="flex text-center justify-center pt-5">
      {/* <UseStateOverriding /> */}
      {/* <UseEffectOverriding /> */}
      {/* <UseContextOverriding /> */}
      {/* <UseMemoOverriding /> */}
      {/* <UseCallBackOverriding /> */}
      {/* <UseRefOverriding /> */}
      {/* <UseRefOverriding2 /> */}
      {/* <UseImperativeHandleOverride /> */}
      {/* <UseIdOverriding /> */}
      {/* <UseTransition /> */}
      {/* <UseDeferredValueOverride /> */}
      {/* <TestUseMedia /> */}
      <UseLayoutEffectOverriding />
      {/* <UseOptimistic /> */}

      {/* <Debounce /> */}
      {/* <LocalStorage /> */}
    </div>
  )
}

export default App
