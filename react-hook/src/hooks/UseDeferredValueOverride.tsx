import { useDeferredValue, useEffect, useState } from "react";
import SlowList from "../utils/SlowList";

//! useDeferredValue dùng để cải thiện performance không cho gọi API hay thực hiện 1 stuff logic quá nhìu lần khi người dùng chưa kết thúc hành động

//! Nó sẽ lập lịch và tạo ra 1 deferred value có độ trễ khi người dùng kết thúc hành động thì nó sẽ update ngay lập tức và lấy giá trị hiện tại (có nghĩa là trong quá trình thực hiện thì giá trị deferred value và initial value là khác nhau, chỉ giống nhau khi ng dùng end hành động) 

const UseDeferredValueOverride = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    console.log('Query: ', query);
    console.log('Deferred query: ', deferredQuery);
    console.log('<<=== End of Render ===>>',);
  }, [query, deferredQuery]);

  return (
    <div className='tutorial'>
      <input
        type='text'
        value={query}
        className="bg-slate-300 rounded-lg px-2 py-2 w-[220px] border-none focus:outline-none"
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search...'
      />
      <SlowList text={deferredQuery} />
    </div>
  );
}

export default UseDeferredValueOverride