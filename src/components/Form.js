import React from 'react'
import { useForm } from 'react-hook-form'


const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    // console.log(errors);
    const fname = watch("firstName")
    return (
        // <div>
        <div className="formContainer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 formscenter mx-auto ">
                        <form onSubmit={handleSubmit((data) => { console.log(data) })}>
                            <h4 className="text-center py-3 ">React Hook Form</h4>
                            <div className="formcontrol d-flex gap-2 ">
                                <label htmlFor="Name">Name:</label>
                                <input {...register('firstName', { required: "Enter the name" })} type="text" />
                                <small>{errors?.firstName && <p>{errors.firstName.message}</p>}</small>
                            </div>
                            <div className="formcontrol d-flex gap-2 py-2 ">
                                <label htmlFor="Email">Email:</label>
                                <input {...register('lastName', { required: true })} type="email" />
                            </div>
                            <div className="formcontrol d-flex gap-2 py-2 ">
                                <label htmlFor="number">Number:</label>
                                <input {...register('number', { required: "Enter the Number", minLength: { value: 5, message: 'enter atleast 5 char' } })} type="number" />
                            </div>
                            <div className='formControl d-flex  gap-2  py-2 '>
                                <label htmlFor='age'>Age:</label>
                                
                                <input type='number'/>
                            </div>
                            <div className='formControl d-flex  gap-2  py-2 '>
                                <label htmlFor='pass1'>Password:</label>
                                
                                <input type='password'/>
                            </div>
                            <div className='formControl d-flex  gap-2  py-2 '>
                                <label htmlFor='age'>Confirm Password:</label>
                                
                                <input type='password'/>
                            </div>
                            <div className="formcontrol text-center  py-2 ">
                                <button type="submit" className="py-2 px-4 btn btn-success">SUBMIT </button>
                            </div>
                        </form>
                        <div><p>
                            {fname}
                        </p></div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Form
