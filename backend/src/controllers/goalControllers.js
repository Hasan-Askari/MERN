const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel')

// @desc    Get goals
// @route   GET /api/goals
// @access  PRIVATE
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
});

// example controller for manual handler
const getUsers = async (req, res, next) => {
    try {
        if (!req.body.text) {
            throw new Error('Please add text')
        }

        const newGoal = new Goal({ text });
        const saveGoal = await newGoal.save();
        if (saveGoal) {
            res.status(200).json({ success: 'Goal created' });
        }
    } catch(error) {
        console.log('error ==>', error);
        res.status(400).json({ error: error.toString() });
        next(error);
    }
}

// @desc    Set goals
// @route   SET /api/goals
// @access  PRIVATE
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.fname){
        res.status(400);
        throw new Error('Please add value to fname field');
    }
    
    else if(!req.body.lname){
        res.status(400);
        throw new Error('Please add value to lname field');
    }
    
    else if(!req.body.age){
        res.status(400);
        throw new Error('Please add value to age field');
    }
    
    else if(!req.body.description){
        res.status(400);
        throw new Error('Please add value to description field');
    }
    
    const goal = await Goal.create({
        fname: req.body.fname,
        lname: req.body.lname,
        age: req.body.age,
        description: req.body.description
    })
    res.status(200).json({ message: `Set goals` });
});

// @desc    Put goal
// @route   PUT /api/goal/:id
// @access  PRIVATE
const updateGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedGoal);
});

// @desc    delete goal 
// @route   DELETE /api/goals/:id
// @access  PRIVATE
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }

    await goal.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}