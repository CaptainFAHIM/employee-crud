// External imports
const express = require("express");
const router = express.Router();

// Local imports
const Employee = require("../models/employee.model");
const {generateCrudMethods} = require("../services");
const employeeCrud = generateCrudMethods(Employee);
const {validateDbId, raiseRecord404Error} = require("../middlewares/index");


router.get("/", async (req, res, next) => {
    try {
        let data = await employeeCrud.getAll();
        res.send(data);
    } catch (error) {
        next(error);
    }
    
});

router.get("/:id", validateDbId, async (req, res, next) => {
    try {
        let data = await employeeCrud.getById(req.params.id);
        if (data) {
            res.send(data);
        } else {
            raiseRecord404Error(req, res);
        }
        
    } catch (error) {
        next(error);
    }
    
});

router.post("/", async (req, res, next) => {
    try {
    const data = await employeeCrud.create(req.body);
    res.status(201).json(data);
    } catch (error) {
        next(error);
    }
    
});

router.put("/:id", validateDbId, async (req, res, next) => {
    try {
        let data = await employeeCrud.update(req.params.id, req.body);
        if (data) {
            res.send(data);
        } else {
            raiseRecord404Error(req, res);
        }
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", validateDbId, async (req, res, next) => {
    try {
        let data = await employeeCrud.delete(req.params.id);
        if (data) {
            res.send(data);
        } else {
            raiseRecord404Error(req, res);
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;