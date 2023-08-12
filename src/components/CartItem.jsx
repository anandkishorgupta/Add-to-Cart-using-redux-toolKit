import { toast } from "react-hot-toast";
import { FcDeleteColumn } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlice";
const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed ");
  };
  return (
    <div className="mt-10">
      <div className="flex gap-x-10 justify-center items-center">
        <div className="h-[200px] w-[200px]">
          <img src={item.image} className="h-full object-contain" />
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="font-bold text-xl">{item.title}</h1>
          <h1 >{item.description.split(" ").slice(0, 15).join(" ") + "...."}</h1>
          <div className="flex justify-between items-center">
            <p className="text-green-800 font-bold text-xl ">${item.price}</p>
            <div onClick={removeFromCart} className="w-10 h-10 bg-red-100 flex justify-center items-center rounded-full">
              <FcDeleteColumn />
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-black mt-4">

      </div>
    </div>
  );
};

export default CartItem;
