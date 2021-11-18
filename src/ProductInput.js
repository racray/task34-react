import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';

const formValidationSchema = yup.object({
  title: yup
    .string()
    .min(5, "Need bigger Title")
    .required("fill title please"),
  picture: yup
    .string()
    .min(8, "require longer picture address")
    .required("fill picture please"),
  price: yup
    .number("enter only numbers")
    .min(0, "require price greater than 0")
    .required("fill price please"),
  description: yup
    .string()
    .min(5, "require longer description")
    .required("fill description please"),


})


export function ProductInput({ products, setProducts }) {
  const history = useHistory();
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: { title: "", picture: "", price: "", description: "" },
    validationSchema: formValidationSchema,
    onSubmit: (newproduct) => {
      setProducts([...products, newproduct]);

      history.push("/")
    }
  });


  return(
  <form onSubmit={handleSubmit} className="product-edit">

    <TextField placeholder="Enter Movie Title"
      id="title"
      name="title"
      value={values.title}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={errors.title && touched.title && errors.title}
      variant="standard" />

    <TextField placeholder="Enter Movie image address"
      id="picture"
      name="picture"
      value={values.picture}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={errors.picture && touched.picture && errors.picture}
      variant="standard" />

    <TextField placeholder="Enter Movie price"
      id="price"
      name="price"
      value={values.price}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={errors.price && touched.price && errors.price}
      variant="standard" />

    <TextField placeholder="Enter Movie description"
      id="description"
      name="description"
      value={values.description}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={errors.description && touched.description && errors.description}
      variant="standard" />


    <Button type="submit" variant="contained" className="add-button">Add Movie</Button>
  </form >);
}
