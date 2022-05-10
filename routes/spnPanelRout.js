const router = require('express').Router();
const spnController = require('./../controllers/spnPanelCon');
const validation = require('./../middlewares/validation');

router.route('/')
.post(validation.validate('spn'), spnController.create)
//.get()


module.exports = router;