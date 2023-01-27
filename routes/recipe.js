const express = require('express');
const verifyUser = require('../middleware/verifyUser');
const Recipe = require('../models/recipe');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("recipe working fine")
})

router.post('/add', verifyUser, async (req, res) => {
    try {
        req.body.chef = req.userData.userId
        const recipe = new Recipe(req.body)
        const result = await recipe.save();
        if (result) {
            res.json({ status: true, message: 'recipe added successfully' })
        }
    } catch (error) {
        console.log(error, ":error")
        res.json({ status: false, message: 'Something Went Wrong' })

    }
})

router.post('/edit/:recipeId', verifyUser, async (req, res) => {
    try {
        const result = await Recipe.findOneAndUpdate({ _id: req.params.recipeId}, req.body)
        if (result) {
            res.json({ status: true, message: 'recipe updated ' })
        }
    } catch (error) {
        console.log(error, ":error")
        res.json({ status: false, message: 'Something Went Wrong' })

    }
})

router.get('/get-all', async (req, res) => {
    try {
        const result = await Recipe.find();
        if (result) {
            res.json({ status: true, message: 'recipe added successfully', payload: result })
        }
    } catch (error) {
        console.log(error, ":error")
        res.json({ status: false, message: 'Something Went Wrong' })

    }
})

router.get('/get/:recipeId', async (req, res) => {
    try {
        const result = await Recipe.findById(req.params.recipeId);
        if (result) {
            res.json({ status: true, message: 'recipe found', payload: result })
        }
    } catch (error) {
        console.log(error, ":error")
        res.json({ status: false, message: 'Something Went Wrong' })

    }
})

router.delete('/delete/:recipeId', async (req, res) => {
    try {
        const result = await Recipe.findOneAndDelete({_id: req.params.recipeId});
        if (result) {
            res.json({ status: true, message: 'Recipe Deleted' })
        }
    } catch (error) {
        console.log(error, ":error")
        res.json({ status: false, message: 'Something Went Wrong' })

    }
})

module.exports = router