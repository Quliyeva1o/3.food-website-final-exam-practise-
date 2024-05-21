import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import styles from './index.module.scss'
import ValidationSchema from '../../validations/Addvalidations';
import { Food } from '../../classes/class';
import { postOne } from '../../API/requests';
import { useContext } from 'react';
import { myContext } from '../../context/Context.jsx';
const Add = () => {
  const {setItems}= useContext(myContext)
  const formik = useFormik({
    initialValues: {
      name: '',
      img: '',
      desc: '',
      price: '',
    },
    onSubmit: values => {
      const newfood = new Food(values.name, values.price, values.img, values.desc)
      postOne(newfood)
      setItems((curr)=>([...curr,newfood]))
      formik.resetForm()
    },
    validationSchema: ValidationSchema
  })
  return (
    <>

      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextField id="outlined-basic" label="TITLE" variant="outlined" name='name' value={formik.values.name} onChange={formik.handleChange} />
        {formik.errors.name && <span style={{ color: "red" }}>{formik.errors.name}</span>}
        <TextField id="outlined-basic" label="IMG" variant="outlined" name='img' value={formik.values.img} onChange={formik.handleChange} />
        {formik.errors.img && <span style={{ color: "red" }}>{formik.errors.img}</span>}
        <TextField id="outlined-basic" label="PRICE" variant="outlined" name='price' value={formik.values.price} onChange={formik.handleChange} />
        {formik.errors.price && <span style={{ color: "red" }}>{formik.errors.price}</span>}
        <TextField id="outlined-basic" label="DESC" variant="outlined" name='desc' value={formik.values.desc} onChange={formik.handleChange} />
        {formik.errors.desc && <span style={{ color: "red" }}>{formik.errors.desc}</span>}

        <Button type="submit">Submit</Button>
      </form> </>
  )
}

export default Add
