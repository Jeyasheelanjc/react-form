import React from 'react'
import DownloadPDF from './DownloadPDF';
import { useNavigate } from 'react-router-dom'

const Result = () => {
    const navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem('data'))
    console.log(data);
    const goBack = () => {
        navigate('/')
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <h3 className='text-center fst-italic py-4 '>Form Details</h3>
                        <table className='table table-striped  mt-5' id="myTable">
                            <thead>
                                <tr>
                                    <th>Name:</th>
                                    <td>{data.fname}</td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td>{data.email}</td>
                                </tr>
                                <tr>
                                    <th>Number:</th>
                                    <td>{data.number}</td>
                                </tr>
                                <tr>
                                    <th>Gender:</th>
                                    <td>{data.radioOption}</td>
                                </tr>
                                <tr>
                                    <th>Age:</th>
                                    <td>{data.age}</td>
                                </tr>
                                <tr>
                                    <th>Password:</th>
                                    <td>{data.confirmPassword}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className='me-3 px-3 py-1 bt1' onClick={goBack}>Go Back</button>
                <DownloadPDF tableId="myTable" />
            </div>
        </>
    )
}

export default Result
