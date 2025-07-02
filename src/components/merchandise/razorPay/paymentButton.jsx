import React, { useEffect } from 'react';

const RazorpayButton = () => {
    useEffect(() => {
        if (!document.querySelector(`script[src="https://checkout.razorpay.com/v1/payment-button.js"]`)) {
            const script = document.createElement('script');
            script.src = "https://checkout.razorpay.com/v1/payment-button.js";
            script.setAttribute('data-payment_button_id', 'pl_O6yb4hZFjbgHIN');
            script.async = true;

            const form = document.getElementById('razorpay-form');
            if(form){
            form.appendChild(script);
            }
        }
    }, []);

    return (
        <div id="razorpay-button-container">
            <form id="razorpay-form"></form>
        </div>
    );
};

export default RazorpayButton;