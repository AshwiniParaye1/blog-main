import data from "../data";

// api/posts/1
export default function handler(req, res) {
  const { postId } = req.query;
  const { Posts } = data;

  if (postId) {
    const post = Posts.find((value) => value.id == postId);

    if (post) {
      return res.status(200).json(post);
    } else {
      return res.status(404).json({ error: "Post Not Found" });
    }
  }

  return res.status(404).json({ error: "Post Not Found" });
}
