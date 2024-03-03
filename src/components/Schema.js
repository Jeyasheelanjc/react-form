import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from 'react-router-dom'



const schema = yup.object().shape({
    fname: yup.string().required("Kindly Enter your Name"),
    email: yup.string().email().required("Enter a valid mail"),
    age: yup.number().integer().required().min(2, "enter a valid age"),
    number: yup.number("enter number only").integer("Enter number only").required("enter the number").min(9, "Enter 10 digits of your number"),
    radioOption: yup.string().required('Please select an option'),
    password: yup.string().required("Enter the Password").min(4, "enter above four digits").max(12, "Password cannnot so long"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
})


const Schema = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })
    const Submit = (data) => {
        localStorage.setItem('data', JSON.stringify(data));
        navigate('/result');
    }
    console.log(errors);
    return (
        // <div>
        <div className="formContainer">
            <div className="container-fluid">
                <div className="row justify-content-center ">

                    <div className="col-lg-4 col-md-6 col-sm-7 formscenter">
                        <form className='formStyle' onSubmit={handleSubmit(Submit)}>
                            <h4 className="text-center py-3 ">React Hook Form</h4>
                            <div className="formcontrol  gap-2 ">
                                {/* <label htmlFor="Name">Name:</label> */}
                                <input {...register("fname")} type="text" placeholder='Name' />
                                <p className='wid'>{errors.fname?.message}</p>
                                {/* <p className='wid'>(errors?fname:errors.fname.message)</p> */}
                            </div>
                            <div className="formcontrol  gap-2 py-2 ">
                                {/* <label htmlFor="Email">Email:</label> */}
                                <input {...register("email")} type="email" placeholder='Email' />
                                <p className='wid'>{errors.email?.message}</p>
                            </div>
                            <div className="formcontrol  gap-2 py-2 ">
                                {/* <label htmlFor="number">Number:</label> */}
                                <input {...register("number")} type="number" placeholder='Phone Number' />
                                <p className='wid'>{errors.number?.message}</p>
                            </div>
                            <div className="formControl py-2">
                                <input
                                    type="radio"
                                    id="option1"
                                    name="radioOption"
                                    value="Male"
                                    {...register("radioOption")}
                                />
                                <label className='ms-2' htmlFor="option1">Male</label>
                            </div>
                            <div className="formControl py-2">
                                <input
                                    type="radio"
                                    id="option2"
                                    name="radioOption"
                                    value="Female"
                                    {...register("radioOption")} 
                                />
                                <label className='ms-2' htmlFor="option2">Female</label>
                            </div>
                           <p className="wid"> {errors.radioOption?.message}</p>
                            <div className='formControl   gap-2  py-2 '>
                                {/* <label htmlFor='age'>Age:</label> */}
                                <input {...register("age")} type='number' placeholder='Age' />
                                <p className='wid'>{errors.age?.message}</p>
                            </div>
                            <div className='formControl   gap-2  py-2 '>
                                {/* <label htmlFor='password'>Password:</label> */}
                                <input {...register("password")} type='password' placeholder='Password' />
                                <p className='wid'>{errors.password?.message}</p>
                            </div>
                            <div className='formControl   gap-2  py-2 '>
                                {/* <label htmlFor='confirmPassword'>Confirm Password:</label> */}
                                <input {...register("confirmPassword")} type='password' placeholder='Confirm Password' />
                                <p className='wid'>{errors.confirmPassword?.message}</p>
                                {/* <p className='wid'>(errors?confirPassword:errors.confirmPassword.message)</p> */}
                            </div>
                            <div className="formcontrol text-center  py-2 ">
                                <button type="submit" className="py-2 px-5 but1" disabled={isDirty && !isValid} >SUBMIT </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Schema
