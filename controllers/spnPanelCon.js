const mongoose = require('mongoose');
const spnModel = require('./../models/spn');
const validation = require('./../middlewares/validation');
const {validationResult} = require('express-validator');

exports.create = async (req, res, next) => {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){

            return res.status(400).json({
                status: 'fail',
                message: 'خطای سرور',
                messageEN: 'Server error',
                err: errors
            });

        }
        
        const spn = await spnModel.create(req.body);

        return res.status(200).json({
            status: 'Success',
            data: {
                spn
            }
        })

    }catch(err){
        console.log(err);
        return res.status(400).json({
            status: 'fail',
            message: 'خطای سرور',
            messageEN: 'Server error'
        })
    }
}