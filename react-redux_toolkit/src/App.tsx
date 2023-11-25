import Counter from "./components/Counter"

//! Redux có 3 khái niệm chính là: 
//! + Store là nơi lưu trữ state

//! + Action là 1 hành động (chức năng) thực hiện tác động lên state (action có 2 tham số 1 là type, nghĩa là tên của 1 hành động cụ thể, tham số thứ 2 là payload là tham số truyền vào để phục vụ chức năng nhất định cho action)

//! + Reducers là middleware ở giữa store và action nó sẽ lấy cái action và phụ thuộc vào type của action nó sẽ lấy hành động (chức năng) đó ra và thực hiện update Redux store

//? Lưu ý: Redux sẽ không trực tiếp thực hiện thay đổi trên state hiện tại mà nó sẽ làm 1 bảng copy của state hiện tại => lấy nó ra thực hiện 1 hành động rồi đến cuối cùng => dùng kết quả đó cập nhật lại state hiện tại (override current state).

function App() {

  return (
    <div>
      <h2>Redux Complete</h2>
      <Counter />
    </div>
  )
}

export default App
