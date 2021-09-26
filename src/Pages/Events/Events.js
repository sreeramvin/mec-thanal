import './Events.css'
import heart from '../../Assets/heart.png';
import box from '../../Assets/box.png';
import tbox from '../../Assets/ODORImg.png';
import axios from 'axios'
import { useState } from 'react';
import DonationOverlay from '../../Components/Events/DonationOverlay';



export default function Events() {
    const [name, setName] = useState("");
    const [amt, setAmount] = useState(20)
    const [doverlay, setDoverlay] = useState(false)
    const [success, setSuccess] = useState(false)
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // creating a new order
        const result = await axios.post(`http://localhost:5000/payment/orders/${parseInt(amt) * 100}`);
        console.log(result.data)
        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        // Getting the order details back
        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_2W8yycXXxR58JD",
            amount: amount.toString(),
            currency: currency,
            name: name,
            description: "Thanal Donation",
            image: { heart },
            order_id: order_id,
            handler: async function (response ) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:5000/payment/success", data);

                if(result.data.success)
                    setSuccess(true)
            },
            prefill: {
                name: "Thanal",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Govt. Model Engineering College",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    return (
        <div className="events-header">
            {doverlay ? <DonationOverlay changeName = {setName} changeAmount = {setAmount} closeOverlay = {() => setDoverlay(false)} donate = {displayRazorpay} success = {success}/> : null}
            <h1 className="heading">Events</h1>
            <div className="events">
                <div className="event">
                    <h1>One Day</h1>
                    <h1>One Rupee</h1>
                    <img src={tbox} alt="pic" />
                    <h1 onClick={() => setDoverlay(true)} className="event-donate">
                        Dontate
                    </h1>
                </div>
                <div className="event">
                    <h1>Food Packet</h1>
                    <h1>Collection</h1>
                    <img src={box} alt="pic" />
                    <h1 className="event-donate">
                        Dontate
                    </h1>
                </div>
                <div className="event">
                    <h1>Thanal</h1>
                    <h1>Stall</h1>
                    <img src={heart} alt="pic" />
                    <h1 className="event-donate">Dontate</h1>
                </div>
            </div>

        </div>
    )
}