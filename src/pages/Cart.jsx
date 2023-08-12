import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartItem from "../components/CartItem"


const Cart = () => {
    const { cart } = useSelector((state) => state)
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart])
    return (
        <div className="flex  gap-x-20 justify-center space-x-5">
            <div className="flex flex-col gap-y-10 max-w-[550px]">
                {
                    cart.length > 0 ? (<div>
                        {
                            cart.map((item, index) => (
                                <CartItem key={item.id} item={item} itemIndex={index} />
                            ))
                        }
                    </div>) : (
                        <div className="flex flex-col justify-center items-center h-[90vh] gap-y-9">
                        <h1>Cart Empty</h1>
                        <Link
                          to={"/"}
                          className="border w-[300px] rounded-md bg-green-700 py-2 px-4 text-white flex items-center justify-center hover:bg-green-500 transition duration-300 ease-in-out "
                        >
                          <button className="text-center ">Shop Now</button>
                        </Link>
                      </div>
                      
                    )
                }
            </div>
            {
                cart.length > 0 &&
                <div className="flex flex-col h-[70vh] justify-between mt-10">
                    <div>
                        <div className="text-green-800 uppercase">Your Cart</div>
                        <div className="text-green-800 text-2xl font-extrabold uppercase">Summary</div>
                        <p>
                            <span className="text-green-950 font-bold">Total Items:{cart.length}</span>
                        </p>
                    </div>
                    <div >
                        <p>Total Amount: <span className="font-bold">

                            ${totalAmount}
                        </span>
                        </p>
                        <button className="border w-[300px] rounded-md py-2 px-4 mt-3 bg-green-800 text-white hover:bg-green-700 transition ease-in-out duration-300 ">CheckOut Now</button>
                    </div>
                </div>
            }

        </div>
    )
}

export default Cart