import { TextField,Button,Typography,Box } from '@mui/material'
import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
const ContactUs = () => {
    const formik=useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            phone:"",
            message:""
        },
        validationSchema:Yup.object({
            firstName:Yup.string().required("This is required field"),
            lastName:Yup.string().required("This is required field"),
            phone:Yup.string().required("This is required field"),
            message:Yup.string().required("This is required field")
        }),
        onSubmit:(values)=>{
            console.log("form submitted",values)
        }
    })
  return (
    <>
    <Typography variant="h4" mt={6} mb={6}>Contact Us</Typography>
    <Box
    component="form"
    onSubmit={formik.handleSubmit}
    >
    <TextField 
     label="First Name"
     type="text"
     variant="outlined"
     name="firstName"
     onChange={formik.handleChange}
     sx={{width:"300px",m:1}}
     error={formik.touched.firstName && Boolean(formik.errors.firstName)}
     onBlur={formik.handleBlur}
     helperText={formik.touched.firstName && formik.errors.firstName}
    />
    <TextField 
     label="Last Name"
     type="text"
     variant="outlined"
     name="lastName"
     onChange={formik.handleChange}
     sx={{width:"300px",m:1}}
     error={formik.touched.lastName && Boolean(formik.errors.lastName)}
     onBlur={formik.handleBlur}
     helperText={formik.touched.lastName && formik.errors.lastName}
    />
    <TextField 
     label="Phone Number"
     type="number"
     variant="outlined"
     name="phone"
     onChange={formik.handleChange}
     sx={{width:"300px",m:1}}
     error={formik.touched.phone && Boolean(formik.errors.phone)}
     onBlur={formik.handleBlur}
     helperText={formik.touched.phone && formik.errors.phone}
    />
    <TextField 
     label="Message"
     type="text"
     variant="outlined"
     name="message"
     onChange={formik.handleChange}
     multiline
     rows={4}
     fullWidth
     sx={{m:1}}
     error={formik.touched.message && Boolean(formik.errors.message)}
     onBlur={formik.handleBlur}
     helperText={formik.touched.message && formik.errors.message}
    />
    <Button size="large" variant="contained" type="submit" sx={{m:1}}>Send</Button>
    </Box>
    </>
  )
}

export default ContactUs;