require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.MAILUSER,
      pass: process.env.MAILPASS
    }
});
  
const mailOptions = (order) => {
  let total = 0;
  order.itemIds.map((id) => {
    total += order.shoppingCart[id].cost * order.shoppingCart[id].amount
  })

    return {
        from: 'donotusemygenitals@hotmail.com',
        to: 'paragoria@gmail.com',
        cc: order.customer.email,
        subject: 'Your order...',
        html: `<h1>New Order:</h1>
        <h2>Shipping to:</h2>
        <address>${order.customer.name} ${order.customer.surname}<br />
        ${order.customer.street}<br />
        ${order.customer.post}<br />
        ${order.customer.city}<br />
        ${order.customer.country}</address>
        <p>Email: ${order.customer.email}</p>
        <br />
        <h2>Items:</h2>
        <table style="width:100%; border:1px solid black">
        <tr style="background-color:#999; border:1px solid black">
          <th>Item</th>
          <th>Size</th>
          <th>Amount</th>
          <th>Cost</th>
        </tr>
          ${order.itemIds.map(id => `<tr>
            <td>${order.shoppingCart[id].item}</td>
            <td>${order.shoppingCart[id].size}</td>
            <td>${order.shoppingCart[id].amount}</td>
            <td>${order.shoppingCart[id].cost}</td>
          </tr>`)}
          <tr>
            <td><b>TOTAL:</b></td>
            <td></td>
            <td></td>
            <td><b>${total} + shipping</b></td>
          </tr>
        </table>
        `
    }
};

module.exports = { transporter, mailOptions }