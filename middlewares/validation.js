const {check} = require('express-validator');

exports.validate = (method) => {
    switch(method){
        case 'spn':
            return[
                check('EV', 'انتخا نوع خودرو اجباری است').exists().isIn(['EV', 'EBUS', 'EBike']),
                check('spn', 'خطای ورودی SPN').exists().isInt(),
                check('source', 'خطای ورودی Source').exists().isIn([0, 1, 2, 3, 4, 5]),
                check('topic', 'خطای ورودی Topic').exists().isIn(['Location', 'Data', 'Alarm']),
                check('name', 'خطای ورودی نام spn').exists().isString(),
                check('description', 'خطای ورودی نام توضیحات').exists().isLength({min: 6}),
                check('dimenssion', 'خطای ورودی واحد اندزه گیری').exists()
            ]
    }
}