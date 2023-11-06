import { useState, useTransition } from "react";
import TabButton from "../utils/example-useTransition/TabButton";
import AboutTab from "../utils/example-useTransition/AboutTab";
import PostsTab from "../utils/example-useTransition/PostsTab";
import ContactTab from "../utils/example-useTransition/ContactTab";

//! Trong react thì mọi tiến trình đều có độ ưu tiên là như nhau, nên khi ta thực hiện cùng lúc nhìu tiến trình thì sẽ làm app giảm performance. Thế nến useTransition sinh ra để giảm độ ưu tiên của 1 tiến trình và chuyển đồ ưu tiên cho những tiễn trình khác mới thực hiện.

type Tab = 'about' | 'posts' | 'contact';

function UseTransition() {
    const [tab, setTab] = useState<Tab>('about');
    const [isPending, startTransition] = useTransition();

    const selectTab = (tab: Tab) => {
        startTransition(() => {
            setTab(tab);
        })
    };

    return (
        <div >
            <div className='mb-4 flex flex-row items-center gap-4'>
                <TabButton
                    title='About'
                    onClick={() => selectTab('about')}
                />
                <TabButton
                    title='Posts'
                    onClick={() => selectTab('posts')}
                />
                <TabButton
                    title='Contact'
                    onClick={() => selectTab('contact')}
                />
            </div>
            {isPending ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {tab === 'about' && <AboutTab />}
                    {tab === 'posts' && <PostsTab />}
                    {tab === 'contact' && <ContactTab />}
                </div>
            )}


        </div>
    );
}

export default UseTransition