import express from "express";

const router = express.Router();

import { 
    createUser, 
    getUsers, 
    getUser, 
    deleteUser, 
    updateUser } 
    from "../controllers/users.js";


// all routes here are starting with /users

export let users = [];

router.get("/", getUsers);

router.post("/", createUser);

// /users/2 => req.params { id: 2 }
router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
