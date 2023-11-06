import "./App.css";
import { WorkShop } from "./components/work-shop-component/WorkShop";
import { Basic1 } from "./components/basic-component/Basic1";
import { Basic2 } from "./components/basic-component/Basic2";
import {
  FaCheckSquare,
  FaShieldAlt,
  FaSyncAlt,
  FaShoppingCart,
  FaPhoneAlt,
} from "react-icons/fa";
import { Basic3 } from "./components/basic-component/Basic3";
import { Basic4 } from "./components/basic-component/Basic4";
import { Basic5 } from "./components/basic-component/Basic5";
function App() {
  // ! WorkShop
  // interface Profile {
  //   name: string;
  //   picture: string;
  //   profesion: string;
  //   award: string;
  //   discovered: string;
  // }
  // const userProfile: Profile[] = [
  //   {
  //     name: "Maria Sklodowska-Curie",
  //     picture:
  //       "https://icon-library.com/images/user-icon-jpg/user-icon-jpg-6.jpg",
  //     profesion: "physicist and chemist",
  //     award:
  //       "4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
  //     discovered: "polonium (element)",
  //   },
  //   {
  //     name: "Katsuko Saruhashi",
  //     picture:
  //       "https://pokemonrevolution.net/forum/uploads/monthly_2020_08/2018996.thumb.jpg.1f6273b2724276748e0cb42f18292f5b.jpg",
  //     profesion: "geochemist",
  //     award: "2 (Miyake Prize for geochemistry, Tanaka Prize)",
  //     discovered: "a method for measuring carbon dioxide in seawater",
  //   },
  // ];

  // ! Basic 1
  // const colors: string[] = ["Đen", "Hồng", "Xanh"];

  // ! Basic 2

  return (
    // todo: WorkShop
    // <div>
    //   <h2>Notable Scientist</h2>
    //   {userProfile.map((value, index) => {
    //     return (
    //       <div key={index}>
    //         <WorkShop
    //           name={value.name}
    //           picture={value.picture}
    //           profession={value.profesion}
    //           award={value.award}
    //           discovered={value.discovered}
    //         />
    //       </div>
    //     );
    //   })}
    // </div>

    // todo: Basic 1
    // <div>
    //   Màu sắc:
    //   {colors.map((value, index) => {
    //     return (
    //       <span key={index}>
    //         <Basic1 color={value} />
    //       </span>
    //     );
    //   })}
    // </div>
    // todo: Basic 2
    // <div>
    //   <Basic2
    //     icon={<FaCheckSquare />}
    //     name={"Bộ sản phẩm bao gồm:"}
    //     description={"Hộp, Sách hướng dẫn, Cáp, Cây lắp sim"}
    //   />
    //   <Basic2
    //     icon={<FaShieldAlt />}
    //     name={"Bảo hành:"}
    //     description={"Chính hãng 12 tháng"}
    //   />
    //   <Basic2
    //     icon={<FaSyncAlt />}
    //     name={"Đổi trả:"}
    //     description={"Hư gì đổi nấy 12 tháng"}
    //   />
    // </div>

    // todo: Basic 3
    // <div style={{ display: "flex", columnGap: "10px" }}>
    //   <Basic3 icon={<FaShoppingCart />} label={"Thêm giỏ hàng"} />
    //   <Basic3 icon={<FaPhoneAlt />} label={"Gọi tư vấn"} type="dark" />
    // </div>

    // todo: Basic 4
    // <>
    //   <Basic4
    //     discount={"25%"}
    //     picture={
    //       "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ1M2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591650473000"
    //     }
    //     title={"Cáp chuyển đổi USB-C sang SD"}
    //     price={"790.000đ"}
    //     initialPrice={"1.290.000đ"}
    //   />
    // </>

    // todo: Basic 5
    <div>
      <h2 style={{ marginBottom: "10px" }}>4 Videos</h2>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
        <Basic5
          thumb="https://techvccloud.mediacdn.vn/2020/7/13/137-1594616701190893786687-crop-15946167118531494150206.png"
          title="Introducing React Native - V2"
          desc="The origin story of React"
        />
        <Basic5
          thumb="https://techvccloud.mediacdn.vn/2020/7/13/137-1594616701190893786687-crop-15946167118531494150206.png"
          title="Introducing React Native - V2"
          desc="The origin story of React"
        />
        <Basic5
          thumb="https://techvccloud.mediacdn.vn/2020/7/13/137-1594616701190893786687-crop-15946167118531494150206.png"
          title="Introducing React Native - V2"
          desc="The origin story of React"
        />
        <Basic5
          thumb="https://techvccloud.mediacdn.vn/2020/7/13/137-1594616701190893786687-crop-15946167118531494150206.png"
          title="Introducing React Native - V2"
          desc="The origin story of React"
        />
      </div>
    </div>
  );
}

export default App;
