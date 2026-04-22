import "./musicCards.css";
import { musicCards } from "./musicCards/musicCards";

const music = [{
  title: "Eurovision lög"
  text= ""
  image: "https://guidetoiceland.is/connect-with-locals/nanna/icelands-eurovision-song-contest-history"

    url: ""
}];

function musicCards() {
  return (
    <div>
      <h2>Eurovision songs</h2>
      {blogPosts.map((blog) => (
      <Card
          title={blog.title}
          text={blog.text}
          image={blog.image}
          />
      ))};
    </div>
  );

}

export default musicCards;