import {
  useEffect,
  useState,
  createContext,
  useReducer,
  useRef,
  RefObject,
  useLayoutEffect,
  useContext,
} from "react";
import "./App.css";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";
import { Form } from "./pages/Form";
import { Button, ButtonRef } from "./components/Button";
import { Content } from "./pages/Content";
import { ThemeContext, ThemeProvider } from "./Providers/ThemeContext";

// * useContext
// interface AppContextType {
//   userName: string;
//   setUserName: (name: string) => void;
// }
// export const AppContext = createContext<AppContextType | null>(null);

function App() {
  // ? Learning useEffect: (Axios to fetch data) and useState
  // const [catFact, setCatFact] = useState("");

  // const fetchCatFact = () => {
  //   Axios.get("https://catfact.ninja/fact").then((res) => {
  //     setCatFact(res.data.fact);
  //   });
  // };
  // useEffect(() => {
  //   fetchCatFact();
  // }, []);

  // ? Exercise 1
  // interface AgeData {
  //   name: string;
  //   age: number;
  // }
  // const [name, setName] = useState<string>("");
  // const [predictedAge, setPredictedAge] = useState<AgeData | null>(null);
  // const fetchData = () => {
  //   Axios.get<AgeData>(`https://api.agify.io/?name=${name}`).then((res) => {
  //     console.log("<<=== res.data ===>>", res.data);
  //     setPredictedAge(res.data);
  //   });
  // };

  // ? Exercise 2
  // const [generatedExcuse, setGeneratedExcuse] = useState("");

  // const fetchExcuse = (excuse: string) => {
  //   Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
  //     (res) => {
  //       setGeneratedExcuse(res.data[0].excuse);
  //     }
  //   );
  // };

  // ? Learning UseContext
  // const [userName, setUserName] = useState("Huytran");

  // ? Learning React-query
  // const client = new QueryClient({
  //   defaultOptions: {
  //     // * queries is the action read
  //     queries: {
  //       refetchOnWindowFocus: false,
  //     },
  //     // * queries is the action CUD: create, update, and delete
  //     // mutations: {}
  //   },
  // });

  // ? Learning useReducer: dùng để thực hiện 2 hoặc nhiều hành động thực hiện thay đổi biến cùng 1 lúc (ví dụ: như useState sẽ thay đổi được 1 biến còn useReducer sẽ thay đổi nhiều hơn 1)
  // type StateType = {
  //   count: number;
  //   showText: boolean;
  // };

  // type actionType = {
  //   type: string;
  // };
  // const reducer = (state: StateType, action: actionType) => {
  //   switch (action.type) {
  //     case "increment":
  //       return { count: state.count + 1, showText: state.showText };
  //     case "toggleShowText":
  //       return { count: state.count, showText: !state.showText };
  //     default:
  //       return state;
  //   }
  // };
  // const [state, dispatch] = useReducer(reducer, {
  //   count: 0,
  //   showText: true,
  // });

  // ? Learning useRef: để quản lý dom element như ô input
  // type InputRefType = RefObject<HTMLInputElement>;
  // const inputRef: InputRefType = useRef(null);

  // const onClick = () => {
  //   if (inputRef.current) {
  //     // console.log(inputRef.current.value);
  //     inputRef.current.focus();
  //      inputRef.current.value = '';
  //   }
  // };

  // ? Learning useLayoutEffect: sẽ được chạy trước useEffect (nó sẽ thực hiện khi refresh page)
  // type InputRefType = RefObject<HTMLInputElement>;
  // const inputRef: InputRefType = useRef(null);
  // useLayoutEffect(() => {
  //   if (inputRef.current) {
  //     console.log("<<=== value: ===>>", inputRef.current.value);
  //   }
  // }, []);
  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.value = "hello";
  //   }
  // }, []);
  // ? Learning useLayoutEffect: Cho phép cha sử dụng được hàm của con để thực hiện 1 action nào đó tác động lên con
  // const buttonRef = useRef<ButtonRef>(null);

  // ? Learning useMemo (tạo ra 1 cache lưu trữ dữ liệu của 1 biến khi Function component thay đổi nếu dữ liệu ko đổi thì nó sẽ ko bị gọi lại)
  // ? Learning useCallBack (tạo ra 1 cache lưu trữ dữ liệu của 1 hàm (lưu chính nó) khi Function component thay đổi nếu dữ liệu ko đổi thì nó sẽ ko bị gọi lại)

  // ? Learning useContext new
  const theme = useContext(ThemeContext);
  console.log("<<=== theme ===>>", theme);
  return (
    // todo: Learning UseEffect and UseState
    // <div>
    //   <button onClick={fetchCatFact}>Generate Cat Fact</button>
    //   <p>{catFact}</p>
    // </div>

    // todo: Exercise 1
    // <div>
    //   <input
    //     type="text"
    //     placeholder="Ex. Huy"
    //     onChange={(event) => {
    //       setName(event.target.value);
    //     }}
    //   />
    //   <button onClick={fetchData}>Predict Age</button>
    //   <h1>Name: {predictedAge?.name}</h1>
    //   <h1>Predicted Age: {predictedAge?.age}</h1>
    // </div>

    // todo: Exercise 2
    // <div>
    //   <h1> Generate An Excuse </h1>
    //   <button onClick={() => fetchExcuse("party")}> Party</button>
    //   <button onClick={() => fetchExcuse("family")}> Family</button>
    //   <button onClick={() => fetchExcuse("office")}> Office </button>

    //   <p> {generatedExcuse} </p>
    // </div>

    // todo: router and react-query
    <div>
      {/* // todo: useContext */}
      {/* <QueryClientProvider client={client}>
        <AppContext.Provider value={{ userName, setUserName }}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>Page Not Found!</h1>} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider> */}

      {/* // todo: Form */}
      {/* <Form /> */}

      {/* // todo: useReducer */}
      {/* <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click here
      </button>
      {state.showText && <p>This is a text</p>} */}

      {/* // todo: useRef */}
      {/* <h1>HuyTran</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button> */}

      {/* // todo: useLayoutEffect */}
      {/* <input
        type="text"
        ref={inputRef}
        value="huytran"
        style={{ width: "120px", height: "50px" }}
      /> */}

      {/* // todo: useImperativeHandle */}
      {/* <button
        onClick={() => {
          if (buttonRef.current) {
            buttonRef.current.alterToggle();
          }
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} /> */}

      {/* // todo: useContext */}
      <button onClick={theme?.toggleTheme}>Toggle theme</button>
      <Content />
    </div>
  );
}

export default App;
