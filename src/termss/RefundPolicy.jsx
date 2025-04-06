import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
                <h1 className="text-3xl font-bold text-center mb-6">Refund Policy</h1>
                <p className="text-lg mb-4">
                    At <strong>Celebration Bakers</strong>, customer satisfaction is our priority. If you are not satisfied with your purchase, we offer the following refund policy.
                </p>

                <h2 className="text-2xl font-semibold mt-6">1. Order Cancellation</h2>
                <p className="text-lg mb-4">
                    Orders can be canceled within 24 hours of placing the order. If you wish to cancel your order, please contact us immediately via email or phone. Orders canceled after this period will not be eligible for a refund.
                </p>

                <h2 className="text-2xl font-semibold mt-6">2. Product Defects</h2>
                <p className="text-lg mb-4">
                    If your product is damaged or defective upon delivery, please contact us within 24 hours with clear photos of the product. We will either provide a replacement or issue a full refund, depending on the situation.
                </p>

                <h2 className="text-2xl font-semibold mt-6">3. Non-Refundable Items</h2>
                <p className="text-lg mb-4">
                    Customized cakes and baked goods are non-refundable once the order has been processed. We encourage you to review your order carefully before placing it.
                </p>

                <h2 className="text-2xl font-semibold mt-6">4. Refund Processing</h2>
                <p className="text-lg mb-4">
                    If eligible for a refund, the amount will be processed to your original payment method. Please allow 5-7 business days for the refund to appear in your account.
                </p>

                <h2 className="text-2xl font-semibold mt-6">5. Changes to Refund Policy</h2>
                <p className="text-lg mb-4">
                    We reserve the right to modify or update this Refund Policy at any time. Any changes will be posted here, and we encourage you to review it regularly.
                </p>
            </div>
        </div>
    );
};

export default RefundPolicy;
