import { useLocation } from 'react-router-dom';

const ExampleComponent = () => {
    const location = useLocation();
    // const history = useHistory();
    const searchParams = new URLSearchParams(location.search);

    // Đọc giá trị của tham số truy vấn
    const value = searchParams.get('paramName');

    console.log('<<== 🚀 value ==>>', value);

    // Thay đổi giá trị của tham số truy vấn
    searchParams.set('paramName', 'newValue');

    // Xóa tham số truy vấn
    searchParams.delete('paramName');

    // Cập nhật URL với các thay đổi
    // history.push(`?${searchParams.toString()}`);

    return (
        // ...
        <></>
    );
}

export default ExampleComponent;