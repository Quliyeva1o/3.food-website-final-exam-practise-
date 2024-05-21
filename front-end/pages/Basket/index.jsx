import { useContext } from "react"
import { myBasket } from "../../context/Context"

const Basket = () => {

    const { basket, setBasket } = useContext(myBasket)
console.log(basket);
    return (
        <>
            {basket.map((item) => {
                return (<>
                    <h4>{item.name}</h4>
                    <p>{item.count}</p>
                    <img src={item.img} alt="" />
                  
                </>)
            })}
        </>
    )
}

export default Basket
