import { useState } from "react";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { X } from "lucide-react";

export default function AddToCartModal({ isOpen, onClose, product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-full p-6 rounded-2xl shadow-xl bg-white relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          <X size={24} />
        </button>

        {/* Product Info */}
        <div className="flex flex-col items-center text-center">
          <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-lg shadow-md" />
          <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600 mt-2">${(product.price * quantity).toFixed(2)}</p>
        </div>

        {/* Quantity & Actions */}
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex items-center justify-center space-x-4">
            <Button variant="outline" onClick={() => handleQuantityChange(-1)}>-</Button>
            <span className="text-lg font-medium">{quantity}</span>
            <Button variant="outline" onClick={() => handleQuantityChange(1)}>+</Button>
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg" onClick={() => addToCart(product, quantity)}>
            Add to Cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
