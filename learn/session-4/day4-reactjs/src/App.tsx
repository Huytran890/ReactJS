import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import './App.css'

type ButtonRanksType = {
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
}

function ButtonRanks({ current, setCurrent }: ButtonRanksType) {
  const stars = [1, 2, 3, 4, 5];

  const handleClick = (number: number) => {
    if (number === current) {
      setCurrent(0);
    } else {
      setCurrent(number);
    }
  }

  return (
    <div>
      {stars.map((index) => {
        console.log(index);
        if (index > current) {
          return <AiOutlineStar onClick={() => handleClick(index)} key={index} style={{ verticalAlign: 'middle' }} />
        } else {
          return <AiFillStar onClick={() => handleClick(index)} key={index} style={{ verticalAlign: 'middle' }} />
        }
      })}
    </div>
  )
}

function App() {
  const texts = ['Rất tệ', 'Tệ', 'Trung bình', 'Tốt', 'Rất tốt'];
  const [current, setCurrent] = useState<number>(0);
  console.log('<<=== current ===>>', current);
  const [textCurrent, setTextCurrent] = useState<string>('');

  useEffect(() => {
    // Cập nhật giá trị cho textCurrent dựa vào giá trị current
    if (current > 0) {
      setTextCurrent(texts[current - 1]);
    } else {
      setTextCurrent('');
    }
  }, [current]);

  return (
    <div>
      <h3>Button Rank</h3>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', columnGap: '5px' }}>
        <ButtonRanks current={current} setCurrent={setCurrent} />{textCurrent && <span style={{ backgroundColor: 'green', borderRadius: '4px', color: 'white', padding: '4px 6px' }}>{textCurrent}</span>}
      </div>
    </div>
  )
}
export default App
