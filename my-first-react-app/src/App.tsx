import "./musicCards.css";
import { musicCards } from "./musicCards/musicCards";

const blogPosts = [
  {
    title: "Dagur í lífinu mínu",
    text: "í dag fór ég",
    image:
      "https://images.unsplash.com/photo-1776695971751-b497da17ca1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorName: "Gummi",
  },
];
function App() {
  return (
    <div>
      <h2>hæ</h2>
      {blogPosts.map((blog) => (
        <Card
          title={blog.title}
          text={blog.text}
          image={blog.image}
          authorName={blog.authorName}
        />
      ))}
      ;
    </div>
  );
}

function musicCards() {
  return (
    <div>
      <h2>Eurovision songs</h2>
      {blogPosts.map((blog) => (
        <Card title={blog.title} text={blog.text} image={blog.image} />
      ))}
      ;
    </div>
  );
}

export default musicCards;
