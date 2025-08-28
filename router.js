const express = require(`express`)
const router = express.Router()
const {middleware404 , middleware500} = require(`./middlewares`)
const {getPaymet , postPayment , deletePayment} = require(`./controllers`)

router.route(`/payment`)
.get(getPaymet)
.post(postPayment)

router.route(`/payment/:_id`)
.delete(deletePayment)

router.all(`/{*splat}` , middleware404)
router.use(middleware500)

module.exports = {
    router
}