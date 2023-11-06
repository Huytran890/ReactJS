import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Content } from "./Content";
import Test from "./Test";

function App() {
  // ! Exercise
  // const gifts = ["CPU i9", "Ram 32 GB RGB", "RGB Keyboard"];
  // const [gift, setGift] = useState("");
  // const randomGift = () => {
  //   const index = Math.floor(Math.random() * gifts.length);
  //   console.log(gifts[index]);
  //   setGift(gifts[index]);
  // };

  // ! Two way binding
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const handleSubmit = () => {
  //   console.log("<<=== Api ===>>", {
  //     id: checked,
  //   });
  // };

  // ! with radio and checkbox
  // const courses = [
  //   {
  //     id: 1,
  //     name: "HTML, CSS",
  //   },
  //   {
  //     id: 2,
  //     name: "Javascript",
  //   },
  //   {
  //     id: 3,
  //     name: "ReactJS",
  //   },
  // ];

  // const [checked, setChecked] = useState(1);

  // const [checked, setChecked] = useState<number[]>([]);
  // const handleCheck = (id: number) => {
  //   setChecked((prevElement) => {
  //     const isChecked = checked.includes(id);
  //     if (isChecked) {
  //       return checked.filter((item) => item !== id);
  //     } else {
  //       return [...prevElement, id];
  //     }
  //   });
  // };

  // ! todoList
  // const [job, setJob] = useState<string>("");
  // const [listJobs, setListJobs] = useState<string[]>(() => {
  //   const storageJobs = JSON.parse(localStorage.getItem("jobs") ?? "[]");
  //   console.log("<<=== Storage Jobs: ===>>", storageJobs);
  //   return storageJobs;
  // });

  // const handleSubmit = () => {
  //   setListJobs((prev) => {
  //     const newJobs = [...prev, job];

  //     const jsonJobs = JSON.stringify(newJobs);
  //     localStorage.setItem("jobs", jsonJobs);
  //     return newJobs;
  //   });
  //   setJob("");
  // };

  // ! useEffect hook
  // 1. useEffect(callback)
  // - gọi callback mỗi khi component re-render
  // 2. useEffect(callback, [])
  // - Chỉ gọi callback 1 lần khi component mounted
  // 3. useEffect(callback, [deps])
  //* ----------------------
  // 1. callback luôn được gọi sau khi component mounted

  //* Example
  // const [show, setShow] = useState(false);
  // const [showGoToTop, setShowGoToTop] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowGoToTop(window.scrollY >= 200);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   // clean up function
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // ? useRef hook
  // const [count, setCount] = useState(60);
  // const timeID = useRef<number>();
  // const prevCount = useRef<number>();
  // useEffect(() => {
  //   prevCount.current = count;
  // }, [count]);
  // const handleStart = () => {
  //   timeID.current = setInterval(() => {
  //     setCount((prevCount) => prevCount - 1);
  //   }, 1000);
  //   console.log("start -->", timeID.current);
  // };
  // const handleStop = () => {
  //   clearInterval(timeID.current);
  //   console.log("stop -->", timeID.current);
  // };

  // console.log(
  //   "<<= Count =>>",
  //   count,
  //   "<<= Previous count =>>",
  //   prevCount.current
  // );

  // ? Memo:  dùng để tránh làm component render lại 1 cách ko cần thiết khi truyền props ko thay đổi
  // const [count, setCount] = useState<number>(0);
  // const [count2, setCount2] = useState<number>(0);

  // const increase = () => {
  //   setCount(count + 1);
  // };
  // const increase2 = () => {
  //   setCount2(count2 + 1);
  // };

  // ? useCallBack hook: dùng để tránh truyền 1 hàm dưới dạng props và làm component render lại 1 cách ko cần thiết
  // const [count, setCount] = useState<number>(0);
  // const handleIncrease = useCallback(() => {
  //   setCount((prevCount) => prevCount + 1);
  // }, []);

  // ? usememo hook: dùng để tranhs thực hiện lại 1 logic nào đó trong function component 1 cách ko cần thiết
  type Product = {
    name: string;
    price: number;
  };
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  type InputRefType = RefObject<HTMLInputElement>;
  const nameRef: InputRefType = useRef(null);
  const priceRef: InputRefType = useRef(null);
  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: Number(price),
      },
    ]);
    setName("");
    setPrice("");
    nameRef.current?.focus();
  };

  // console.log("<<=== products ===>>", products);
  const result = useMemo(() => {
    const total = products.reduce((total, product) => {
      console.log("<<=== re-render in total ===>>");
      return total + product.price;
    }, 0);
    return total;
  }, [products]);
  return (
    // <div>
    //   <h1>{gift || "Chưa có phần thưởng!"}</h1>
    //   <button onClick={randomGift}>Lấy thưởng</button>
    // </div>

    // todo: Two way binding with form
    // <div>
    //   <label htmlFor="name">Name:</label>
    //   <input
    //     id="name"
    //     value={name}
    //     type="text"
    //     onChange={(e) => {
    //       setName(e.target.value);
    //     }}
    //   />
    //   <label htmlFor="email">Email:</label>
    //   <input
    //     id="email"
    //     value={email}
    //     type="text"
    //     onChange={(e) => {
    //       setEmail(e.target.value);
    //     }}
    //   />
    //   <button onClick={handleSubmit}>Submit</button>
    // </div>

    // todo: with radio
    // <div
    //   style={{
    //     display: "flex",
    //     alignItems: "flex-start",
    //     flexDirection: "column",
    //   }}
    // >
    //   {courses.map((course) => (
    //     <div key={course.id}>
    //       <input
    //         type="radio"
    //         checked={checked === course.id}
    //         onChange={() => {
    //           setChecked(course.id);
    //         }}
    //       />
    //       {course.name}
    //     </div>
    //   ))}
    //   <button onClick={handleSubmit}>Submit</button>
    // </div>
    // todo: with checkbox
    // <div
    //   style={{
    //     display: "flex",
    //     alignItems: "flex-start",
    //     flexDirection: "column",
    //   }}
    // >
    //   {courses.map((course) => (
    //     <div key={course.id}>
    //       <input
    //         type="checkbox"
    //         checked={checked.includes(course.id)}
    //         onChange={() => handleCheck(course.id)}
    //       />
    //       {course.name}
    //     </div>
    //   ))}
    //   <button onClick={handleSubmit}>Submit</button>
    // </div>

    // todo: todoList
    // <div>
    //   <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
    //   <button onClick={handleSubmit}>Submit</button>

    //   <ul>
    //     {listJobs.map((job, index) => (
    //       <li key={index}>{job}</li>
    //     ))}
    //   </ul>
    // </div>

    // todo: useEffect hook
    <div>
      {/* <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />} */}
      {/* {showGoToTop && (
        <button
          style={{ position: "fixed", right: 20, bottom: 20 }}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Go To Top
        </button>
      )} */}
      {/* // todo: useRef hook */}
      {/* <h1>{count}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button> */}

      {/* // todo: Memo  */}
      {/* <Test count={count} />
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={increase}>Click me!</button>
      <button onClick={increase2}>Click me 2!</button> */}

      {/* // todo: useCallback hook  */}
      {/* <Test onIncrease={handleIncrease} />
      <h1>{count}</h1> */}

      {/* // todo: useMemo hook  */}
      <input
        ref={nameRef}
        type="text"
        placeholder="Enter name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        ref={priceRef}
        type="text"
        placeholder="Enter price..."
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add new</button>
      <br />
      <h3>Total: {result}</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
