import { FcDeleteColumn } from "react-icons/fc"
const CartItem = ({item,itemIndex}) => {
  return (
    <div>
      <div>
        <div>
          <img src={item.image}/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div>
              <FcDeleteColumn/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CartItem