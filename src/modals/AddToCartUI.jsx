import { useState } from 'react';
import Button from '../components/ui/Button.jsx';
import { Card, CardContent } from '../components/ui/Card';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AddToCartUI() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
    setIsModalOpen(false);
    setIsCartOpen(true);
  };

  return (
    <div className="relative">
      {/* Order Online Button */}
      <Button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white p-2 rounded">
        Order Online
      </Button>

      {/* Add to Cart Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg relative w-96"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-4">Add to Cart</h2>
            <p>Product details...</p>
            <Button onClick={() => addItemToCart({ name: 'Sample Product', price: '$10' })} className="mt-4 bg-green-500 text-white p-2 rounded">
              Add to Cart
            </Button>
          </motion.div>
        </div>
      )}

      {/* Sliding Cart Section */}
      {isCartOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 overflow-y-auto"
        >
          <button
            onClick={() => setIsCartOpen(false)}
            className="absolute top-2 right-2 text-gray-500"
          >
            <X size={20} />
          </button>
          <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <Card key={index} className="mb-2 p-2">
                <CardContent>
                  <p>{item.name} - {item.price}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p>No items in cart.</p>
          )}
        </motion.div>
      )}
    </div>
  );
}
