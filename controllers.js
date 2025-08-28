const {payment} = require(`./models`)

const getPaymet = async (req , res , next)=>{
    try {
        const buscar = await payment.find()
        res.status(200).json({message : `buscando payment` , data : buscar})
    } catch (error) {
        next(error)
    }
}

const postPayment = async (req , res , next)=>{
    try {
        const {src , monto , lugar} = req.body
        const nuevo = new payment({
            src : src,
            monto : monto,
            lugar : lugar
        })
        await nuevo.save()
        const buscar = await payment.find()
        res.status(200).json({message : `nuevo payment agregado` , data : buscar})
    } catch (error) {
        next(error)
    }
}

const deletePayment = async (req , res , next)=>{
    try {
        const {_id} = req.params
        const buscar = await payment.findByIdAndDelete(_id)
        res.status(200).json({message : `Borrando id numero ${_id}` , data : buscar})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getPaymet,
    postPayment,
    deletePayment
}