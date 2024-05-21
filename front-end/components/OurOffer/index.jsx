import { useContext } from 'react'
import styles from './index.module.scss'
import { myBasket, myContext } from '../../context/Context'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { delOne } from '../../API/requests';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const OurOffer = () => {
    const { items, setItems } = useContext(myContext)
    const { basket, setBasket } = useContext(myBasket)
    const handleDel = (id) => {
        console.log(id);
        delOne(id)
        const filtered = items.filter((x) => (x._id != id))
        setItems(filtered)

    }

    const handleBasket = (item) => {
        console.log("item", item);
        const found = basket.find((x) => (x._id == item._id))
        if (found) {
            found.count += 1
            setBasket([...basket]);
            localStorage.setItem("basket",JSON.stringify([...basket]))
        }
        else {
            const newItem = {
                count: 1,
                ...item
            }
            setBasket([...basket, newItem])
            localStorage.setItem("basket",JSON.stringify([...basket,newItem]))

        }
    }
    console.log("basket", basket);
    return (
        < >
            <div className={styles.hero}>
                <div className="container">
                    <div className="taxtContent">
                        <h4>OUR OFFERS</h4>
                        <h1>Our Offer This Summer</h1>
                        <p className='col-md-7 m-auto '>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            items.map((item, idx) => {
                                return (
                                    <SwiperSlide className={styles.card} key={idx}>
                                        <img src={item.img} alt="" />
                                        <h4 >{item.price}</h4>
                                        <h1>{item.name}</h1>
                                        <p>{item.desc}</p>
                                        <Button onClick={() => { handleDel(item._id) }}>  <DeleteIcon />
                                        </Button>
                                        <Button onClick={() => { handleBasket(item) }}>  <ShoppingBasketIcon />
                                        </Button>
                                        <Link to={`/${item._id}`}>detail</Link>

                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default OurOffer
