import React from 'react'
import {Link} from "react-router-dom"
import {useFormik} from "formik"
import {useDispatch} from "react-redux"
import * as yup from "yup"
import { registerUser } from '../../redux/user/userAction'
const Register = () => {
  const dispath =  useDispatch()
   const formik = useFormik({
     initialValues : {
         name : "",
         email : "",
         password : "",
         cPassword : ""
     },
     validationSchema : yup.object({
      name :  yup.string().required(),
      email :  yup.string().required().email(),
      password :  yup.string().required(),
      cPassword :  yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match'),
     }),
     onSubmit : (values , {resetForm})=>{
          dispath(registerUser(values))
     }
   })
  return <>
     <div className="container">
           <div className="row">
             <div className="col-sm-6 offset-sm-3">
               <div className="card mt-5">
                 <div className="card-header">Signup</div>
                 <form onSubmit={formik.handleSubmit}>
                 <div className="card-body">
                   <div>
                     <label for="name" className="form-label">First name</label>
                     <input
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                       name = "name"
                       className={formik.touched.name && formik.errors.name ? "is-invalid form-control" : "form-control"}
                       type="text" 
                       id="name"
                       placeholder="Enter your name"
                     />
                     <div className="valid-feedback">Looks good!</div>
                     <div className="invalid-feedback">Please choose a username.</div>
                   </div>
                   <div className="mt-2">
                     <label for="email" className="form-label">First Email</label>
                     <input
                       type="text"
                       onChange={formik.handleChange}
                       value={formik.values.email}
                       onBlur={formik.handleBlur}
                        name = "email"
                        className={formik.touched.email && formik.errors.email ? "is-invalid form-control" : "form-control"}
                       id="email"
                       placeholder="Enter Your Email"
                     />
                     <div className="valid-feedback">Looks good!</div>
                     <div className="invalid-feedback">Please choose a username.</div>
                   </div>
                   <div className="mt-2">
                     <label for="password" className="form-label">Password</label>
                     <input
                       type="text"
                       onChange={formik.handleChange}
                       value={formik.values.password}
                       onBlur={formik.handleBlur}
                        name = "password"
                        className={formik.touched.password && formik.errors.password ? "is-invalid form-control" : "form-control"}
                       id="password"
                       placeholder="Enter Your Password"
                     />
                     <div className="valid-feedback">Looks good!</div>
                     <div className="invalid-feedback">Please choose a password.</div>
                   </div>
                   <div className="mt-2">
                     <label for="cpassword" className="form-label"
                       >Confirm Password</label
                     >
                     <input
                       type="text"
                       onChange={formik.handleChange}
                       value={formik.values.cPassword}
                       onBlur={formik.handleBlur}
                        name = "cPassword"
                        className={formik.touched.cPassword && formik.errors.cPassword ? "is-invalid form-control" : "form-control"}
                       id="cpassword"
                       placeholder="Confirm Your Password"
                     />
                     <div className="valid-feedback">Looks good!</div>
                     <div className="invalid-feedback">
                       Please Recheck Your Password.
                     </div>
                   </div>
                   <button type="submit" className="btn btn-primary w-100 mt-3">
                     Signup
                   </button>
                   <p className="text-center mt-3">
                     Already Have Account? <Link to="/login">Login</Link>
                   </p>
                 </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
  </>
}

export default Register