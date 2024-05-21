import * as Yup from 'yup'
const ValidationSchema=Yup.object({
    name: Yup.string().required(),
    img: Yup.string().url().required(),
    desc: Yup.string().required(),
    price: Yup.number().required(),
})

export default ValidationSchema