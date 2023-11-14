import { useEffect, useState } from "react";
import { useBearStore } from "../stores/bearStore";
import { useFoodStore } from "../stores/foodStore";
import { shallow } from "zustand/shallow";

export const BearBox = () => {
  //! cach goi 1
  // const bears = useBearStore((state) => state.bears);
  // const increasePopulation = useBearStore((state) => state.increasePopulation);
  // const removeAllBears = useBearStore((state) => state.removeAllBears);

  //! cach goi 2
  const { bears, increasePopulation, removeAllBears } = useBearStore();

  const [bgColor, setBgColor] = useState<
    "lightgreen" | "lightpink" | undefined
  >(useFoodStore.getState().fish > 5 ? "lightgreen" : "lightpink");

  // const fish = useFoodStore((state) => state.fish);

  useEffect(() => {
    // const unsub = useFoodStore.subscribe((state, prevState) => {
    //   if (prevState.fish <= 5 && state.fish > 5) {
    //     setBgColor("lightgreen");
    //   } else if (prevState.fish > 5 && state.fish <= 5) {
    //     setBgColor("lightpink");
    //   }
    // });

    //! subscribe dùng để handle khi ta thực hiện 1 hành động tác động đến component khi thỏa điều kiện thì component mới re-render
    const unsub = useFoodStore.subscribe(
      (state) => state.fish,
      (fish, prevFish) => {
        // if (fish == prevFish) {
        //   if (fish <= 5) {
        //     setBgColor("lightpink");
        //   } else {
        //     setBgColor("lightgreen");
        //   }
        // }

        //? Đã bị middleware overide
        //! đối số thứ 1 là cái ta cần quan tâm, khi nào nó thỏa điều kiện thì sẽ re-render, đối số thứ 2 là state hiện tại và state trước đó
        if (prevFish <= 5 && fish > 5) {
          setBgColor("lightgreen");
        } else if (prevFish > 5 && fish <= 5) {
          setBgColor("lightpink");
        }
      },
      {
        equalityFn: shallow,
        //! đối sô sẽ là lần đầu tiên thực hiện "đổi thành false để thấy khác biệt"
        fireImmediately: true,
      }
    );

    return unsub;
  }, []);

  return (
    <div className="box" style={{ backgroundColor: bgColor }}>
      <h1>Bear Box</h1>
      <p>bears: {bears}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={removeAllBears}>remove all bears</button>

        {/* Dùng để clear storage */}
        <button onClick={useBearStore.persist.clearStorage}>
          clear storage
        </button>
      </div>
    </div>
  );
};
