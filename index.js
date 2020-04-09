const express = require("express")
const db = require("./database.js")
const port = 8080;

// creates our server instance
const server = express()

server.use(express.json())

server.get("/", (req, res) => {
    res.json({ message: "Testing server" })
})


// Create user POST
// Check if returns name and bio for user
server.post("/api/users", (req, res) => {
    const data = req.body;
    if (!data.name || !data.bio){
     return res.status(400).json({ 
         message: 'Need a name and bio',
     })
    }
    const newUser = db.createUser({
        name: data.name,
        bio: data.bio
    })

    res.status(201).json(newUser)
    })


// Return array of users GET
server.get("/users", (req, res) => {
    const users = db.getUsers()
    res.json(users)
})

// Return user by ID GET
server.get("/users/:id", (req, res) => {
    const userId = req.params.id
    const user = db.getUserById(userId)
    user ? res.json(user) : res.status(404).json({ message: "user not found"})

})


// Remove user by ID DELETE
server.delete('/users/:id', (req, res) => {
    const user = db.getUserById(req.params.id)

    if(user) {
        db.deleteUser(user.id)
        //204 is just a successful empty response
        res.status(204).end()
    } else {
        res.status(404).json({ message: "user not found"})

    }
})

// Update user with ID PATCH
server.put('/users/:id', (req, res) => {
    const user = db.getUserById(req.params.id)
 
    if(user) {
        const updatedUser = db.updateUser(user.id, {
            name: req.body.name || user.name,
            bio: req.body.bio || user.bio,
        })
 
        res.json(updatedUser)
    } else { 
    res.status(404).json({ message: "user not found"})
    }
 })




// Listen to port
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
