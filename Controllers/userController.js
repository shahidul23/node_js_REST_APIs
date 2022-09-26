import { v4 as uuidv4 } from 'uuid';

let users = []
// create user controller
export const createUser = (req, res) => {
    //console.log('post route reached');

    const user = req.body;
    //multipule line
    // const userID = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    // const userWithID = {...user, id:userID}

    // users.push(userWithID);
      users.push({...user,id: uuidv4()});

    res.send(`user with the name ${user.fristName} added to the databases`);

    //res.send('post route reached');
}
//get all users controller
export const getUsers = (req, res) => {
    console.log(users);

     res.send(users);
}
//get single user controller
// /users/2 => req.params {id:2}
export const getUser = (req, res) => {
    //console.log(req.params);
    //res.send(req.params);
    const { id } = req.params;
    const foundUser = users.find((user)=>user.id == id);
    res.send(foundUser);
}
//delete user controller
export const deleteUsers = (req, res) =>{
    const {id} =req.params;
    users = users.filter((user) => user.id != id);
 
    res.send(`user with the id ${id} deleted from the databases`);
 }
 //get update user controller
 export const getUpdateUser = (req,res) => {
    const {id} =req.params;
    const user = users.find((user) => user.id == id);
    const { fristName,lastName, Age } = req.body;
    //if(fristName) user.fristName = fristName;
    if(fristName){
        user.fristName = fristName;
    }
    if(lastName){
        user.lastName = lastName;
    }
    if(Age){
        user.Age = Age;
    } 
    res.send(`user with the id ${id} has been update`);
}
