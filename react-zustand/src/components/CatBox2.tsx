import { useCatStore } from "../stores/catStore";

export const CatBox2 = () => {
  //! Không được dùng như thế này sẽ làm cho component re-render
  // const {
  //   cats: { bigCats }
  // } = useCatStore();

  //! Phải dùng selector 
  const bigCats = useCatStore((state) => state.cats.bigCats);

  return (
    <div className="box">
      <h1>Partial States from catStore</h1>
      <p>big cats: {bigCats}</p>
      <p>{Math.random()}</p>
    </div>
  );
};
