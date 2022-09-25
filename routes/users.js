import express from 'express';

const router = express.Router();

const users = [
    {
        name: "Shahidul",
        lastName: "islam",
        age: 23
        
    },
    {
        name: "Shahidul",
        lastName: "islam",
        age: 25
        
    }
]

router.get('/', (req, res) => {
    console.log(users);

     res.send(users);
});
router .post('/',(req, res) => {
    //console.log('post route reached');

    const user = req.body;
    users.push(user);
    res.send(`user with the name ${user.name} added to the databases`);

    res.send('post route reached');
})
export default router;