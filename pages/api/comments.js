// Assuming you have a comments array stored in memory
let comments = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    comment: "Great article!"
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    comment: "Thanks for sharing!"
  },
  {
    id: 3,
    name: "Bob",
    email: "bob@example.com",
    comment: "I have a question..."
  }
]

export default function handler(req, res) {
  if (req.method === "POST") {
    // Handle the POST request here
    const { name, email, comment } = req.body
    const newComment = {
      id: comments.length + 1,
      name,
      email,
      comment
    }
    comments.push(newComment)
    res
      .status(201)
      .json({ message: "Comment added successfully", comment: newComment })
  } else {
    res.status(405).json({ message: "Method Not Allowed" })
  }
}
