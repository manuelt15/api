const mongoose = require(`mongoose`)

const paymentSchema = mongoose.Schema(
{src : String , monto: Number , lugar : String },
{collection: `payment`}
)

const payment = mongoose.model(`payment` , paymentSchema)

module.exports = {
    payment
}