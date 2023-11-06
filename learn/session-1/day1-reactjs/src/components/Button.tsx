import { forwardRef, useImperativeHandle, useState, Ref } from "react";
export interface ButtonRef {
  alterToggle(): void;
}
export const Button = forwardRef((props, ref: Ref<ButtonRef>) => {
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle((prevToggle) => !prevToggle);
    },
  }));
  return (
    <>
      <button>Button From child</button>
      {toggle && <p>Toggle</p>}
    </>
  );
});
