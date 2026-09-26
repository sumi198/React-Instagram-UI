// import StoryList from "../components/StoryList";
// import PostCard from "../components/PostCard";

// function Home() {
//   return (
//     <div>
//       <StoryList />

//       <PostCard
//         username="alex"
//         avatar="https://i.pravatar.cc/150?img=1"
//         image="https://picsum.photos/600/600?random=1"
//         likes={120}
//         caption="Beautiful day! 🌅"
//       />

//       <PostCard
//         username="sarah"
//         avatar="https://i.pravatar.cc/150?img=3"
//         image="https://picsum.photos/600/600?random=2"
//         likes={245}
//         caption="Weekend vibes ✨"
//       />
//     </div>
//   );
// }

// export default Home;




import StoryList from "../components/StoryList";
import PostCard from "../components/PostCard";
import Header from "../components/Header";

function Home() {
  return (
    <div className="bg-white">
      {/* Instagram Header */}
      <Header />

      {/* Stories */}
      <StoryList />

      {/* Post 1 */}
      <PostCard
        username="alex"
        avatar="https://i.pravatar.cc/150?img=1"
        image="https://picsum.photos/700/700?random=1"
        likes={1248}
        comments={86}
        time="2h"
        date="September 26, 2026"
        caption="Beautiful evening and an amazing view! 🌅✨"
      />

      {/* Post 2 */}
      <PostCard
        username="sarah"
        avatar="https://i.pravatar.cc/150?img=3"
        image="https://picsum.photos/700/700?random=2"
        likes={2456}
        comments={142}
        time="5h"
        date="September 26, 2026"
        caption="Weekend vibes with my favorite people ❤️"
      />

      {/* Post 3 */}
      <PostCard
        username="john"
        avatar="https://i.pravatar.cc/150?img=5"
        image="https://picsum.photos/700/700?random=3"
        likes={892}
        comments={41}
        time="1d"
        date="September 25, 2026"
        caption="Just another beautiful day. 🌄"
      />
    </div>
  );
}

export default Home;