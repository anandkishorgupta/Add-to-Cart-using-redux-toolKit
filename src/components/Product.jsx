import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/cartSlice";
const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };
  return (
    <div className="flex flex-col items-center justify-between hover:scale-105 transition duration-300 ease-in-out gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left w-40 mt-1 truncate">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "....."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full object-contain" />
      </div>
      <div className="flex flex-row justify-between w-full items-center">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>

        {cart.some((p) => p.id == post.id) ? (
          <button
            onClick={removeFromCart}
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] uppercase
        hover:text-white hover:bg-gray-700 transition duration-300 ease-in-out
        px-4 py-2
        "
          >
            Remove item
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] uppercase
        hover:text-white hover:bg-gray-700 transition duration-300 ease-in-out
        px-4 py-2
        "
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
