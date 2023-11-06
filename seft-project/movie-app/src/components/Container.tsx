import { CustomComponentPros } from "../Interface"
import { mergeClassName } from "../Util"

const Container = (props: CustomComponentPros) => {
    return (
        <div className={mergeClassName('px-6 py-5 max-w-screen-lg mx-auto', props?.className)}>{props.children}</div>
    )
}

export default Container