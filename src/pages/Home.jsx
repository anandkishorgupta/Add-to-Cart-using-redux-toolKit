import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  async function fetchProductData() {
    setLoading(true)
    try {
      const { data } = await axios.get(API_URL)
      console.log(data)
      setPosts(data)
    } catch (error) {
      console.log(error)
      setPosts([])
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchProductData()
  }, [])
  return (
    <div>
      {
        loading ? (<Spinner />) : (
          posts.length > 0 ? (<div>
            {
              posts.map((post) => (
                <Product key={post.id} post={post} />
              ))
            }
          </div>) : (
            <div>no data </div>
          )
        )
      }
    </div>
  )
}

export default Home