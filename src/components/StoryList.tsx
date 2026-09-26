import Story from "./Story";

const stories = [
  {
    username: "alex",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    username: "john",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    username: "sarah",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    username: "emma",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    username: "mike",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

function StoryList() {
  return (
    <div className="flex gap-3 overflow-x-auto border-b px-4 py-4 scrollbar-hide">
      {stories.map((story) => (
        <Story
          key={story.username}
          username={story.username}
          image={story.image}
        />
      ))}
    </div>
  );
}

export default StoryList;