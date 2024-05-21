import { Link, useParams } from "react-router-dom"
import { getOne } from "../../API/requests"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"

const Detail = () => {
  const { id } = useParams()
  const [item, setItem] = useState([])
  useEffect(() => { })
  getOne(id).then((res) => {
    setItem(res.data)
  }, [])
  return (
    <>
      <div style={{padding:"200px auto"}}>
        <img src={item.img} alt="" />
        <h4 >{item.price}</h4>
        <h1>{item.name}</h1>
        <p>{item.desc}</p>
        {/* <Button onClick={() => { handleDel(item._id) }}>  <DeleteIcon /> */}
        {/* </Button> */}
        <Link to={`/`}>go back</Link>
      </div>
    </>
  )
}

export default Detail
