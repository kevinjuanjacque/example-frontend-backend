const { Router } = require("express");



const router = Router()

const usuarios = [
    'albertos ',
    'albertos ',
    'albertos ',
    'albertos ',
    'albertos ',
    'albertos ',
    'albertos '
]

router.get('/',(req,res)=>{
    res.json({
        msg:'ok users',
        data: usuarios
    })
})


module.exports = router;