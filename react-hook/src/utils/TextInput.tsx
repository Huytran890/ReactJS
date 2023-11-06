import { Ref, forwardRef, useImperativeHandle, useRef } from 'react'

export interface TextInputRef {
    reset: () => void;
}

interface TextInputProps { }

const TextInput = (
    props: TextInputProps,
    ref: Ref<TextInputRef>) => {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        reset: () => {
            if (!localRef.current) return;

            localRef.current.value = '';
            localRef.current?.focus();
        },
    }));

    return (
        <input
            className="bg-slate-300 rounded-lg px-2 py-2 w-[220px] border-none focus:outline-none"
            type='text' ref={localRef} />
    )
}

export default forwardRef(TextInput)