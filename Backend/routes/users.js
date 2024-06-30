import express from 'express';


import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';


const router = express.Router();



// All routes in here are starting with /users
// router.get('/', (req, res) => {
//     res.send(users);
// });
router.get('/', getUsers);

// router.post('/', (req, res) => {
    // console.log('Post Route Reacheed');

    // console.log(req.body);
    // const user = req.body; 

    // const userId = uuidv4();

    // const userWithId = { ...user, id: uuidv4() }

    // console.log('user');

    // users.push({ ...user, id: uuidv4() });

    // res.send(`User with the name ${user.firstName} added to the database`);
// });

router.post('/', createUser);

// /users/2 => req.params { id: 2 }
// router.get('/:id', (req, res) => {

//     const { id } = req.params;

//     const foundUser = users.find((user) => user.id === id);

//     res.send(foundUser);
// });
router.get('/:id', getUser);

router.delete('/:id', deleteUser);


router.patch('/:id', updateUser);

export default router;