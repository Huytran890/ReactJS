import React, { useEffect, useState } from "react";
export const Content = () => {
  //   const tabs: string[] = ["posts", "comments", "albums"];
  //   const [type, setType] = useState<string>("posts");
  //   type Post = {
  //     id: number;
  //     title: string;
  //     name: string;
  //   };
  //   const [posts, setPosts] = useState<Post[]>([]);
  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //       .then((res) => res.json())
  //       .then((posts) => {
  //         setPosts(posts);
  //       });
  //   }, [type]);

  // * Resize
  //   const [sizeWidth, setSizeWidth] = useState(window.innerWidth);
  //   const handleSize = () => {
  //     setSizeWidth(window.innerWidth);
  //   };
  //   useEffect(() => {
  //     window.addEventListener("resize", handleSize);
  //     return () => {
  //       window.removeEventListener("resize", handleSize);
  //     };
  //   }, []);

  // * coundown
  //   const [countdown, setCountdown] = useState<number>(180);
  //   // ? sử dụng setInteval
  //   useEffect(() => {
  //     const timeID = setInterval(() => {
  //       setCountdown((prev) => prev - 1);
  //       console.log("countdown...");
  //     }, 1000);
  //     return () => clearInterval(timeID);
  //   }, []);

  // ? sử dụng setTimeOut
  //   useEffect(() => {
  //     const timeID = setTimeout(() => {
  //       setCountdown(countdown - 1);
  //       console.log("countdown...");
  //     }, 1000);
  //     return () => {
  //       clearTimeout(timeID);
  //     };
  //   }, [countdown]);

  // * preview avatar
  type Avatar = {
    preview: string;
  };
  const [avatar, setAvatar] = useState<Avatar>({ preview: "" });

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  });

  const handlePreviewAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("<<=== file ===>>", file);
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setAvatar({ preview: objectUrl });
    }
    e.target.value = "";
  };
  return (
    <div>
      {/* {tabs.map((tab) => (
        <button
          key={tab}
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}

      <ul>
        {posts.map((data) => (
          <li key={data.id}>{data.title || data.name}</li>
        ))}
      </ul> */}

      {/* // todo: resize */}
      {/* <h1>{sizeWidth}</h1> */}

      {/* // todo: countdown */}
      {/* <h1>{countdown}</h1> */}

      {/* // todo: preview avatar */}
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} width="80%" />}
    </div>
  );
};
