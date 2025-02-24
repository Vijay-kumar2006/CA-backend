const express = require('express');
const app = express()

const port = 3000;

// app.use(express.json())

const users = [
    { username: "alice", age: 25, email: "alice@example.com" },
    { username: "bob", age: 30, email: "bob@example.com" },
    { username: "charlie", age: 35, email: "charlie@example.com" },
];

app.get('/user', (req, res) => {

    const { username } = req.query.body;
    try {
        const foundUser = users.find((user) => user.username === "alice");
        console.log(foundUser);
        if (foundUser) {
            console.log(foundUser.username);
            res.status(200).json({ "message": `${foundUser.username}, you are ${foundUser.age} years old, ${foundUser.email}` });
        } else {
            res.status(404).json({ "message": "User not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ "message": "An error occurred" });
    }
});

app.listen(port, () => {
    try {
        console.log(`Server is running on port ${port}`);
    } catch (err) {
        console.log(err);
    }
});

