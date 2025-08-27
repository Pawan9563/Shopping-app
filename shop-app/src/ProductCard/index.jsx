
export const ProductCard = ({ product }) => {
  return (
    <div className="w-64 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
      <img
        src={product.images[0]}
        alt={product.title}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{product.title}</h2>
        <p className="text-gray-600 text-sm">{product.category?.name}</p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-green-600 font-bold">₹ {product.price}</span>
          <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
