import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { admin_getusersAction, admin_userBlocUnblockAction } from '../../redux/admin/adminActions'

const Users = () => {
    const [personData, setPersonData] = useState()
    console.log(personData);
const dispath = useDispatch()
const {users} = useSelector(state => state.admin)
useEffect(()=>{
     dispath(admin_getusersAction())
},[])

    const [show, setShow] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const userschaArray = ["john", "kate", "ross", "joe"]
    const userContent = users && users.map(item => <li key={item._id} className="list-group-item d-flex justify-content-between">{item.name}
        <button onClick={e => { setShow(true); setShowForm(false) ;setPersonData(item)} } type="button" class="btn btn-primary btn-sm">
            <i className='bi bi-zoom-in'></i>
        </button>
    </li>)
    return <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <ul class="list-group">
                                {userContent}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    {
                        show && personData
                            ? <>
                                <div class="card">
                                    <div class="card-header d-flex justify-content-between">
                                    {personData.name} Profile
                                        <button onClick={e => setShowForm(!showForm)} type="button" class="btn btn-outline-warning btn-sm">
                                            <i className='bi bi-pencil'></i>
                                        </button>
                                    </div>
                                    <div class="card-body">
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <label className='fs-5'>Name </label>
                                            <strong>{personData?.name}</strong> 
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <label className='fs-5'>Email </label>
                                            <span>{personData?.email}</span> 
                                        </div>
                                    </div>
                                </div>
                            </>
                            : <>Plese Select User</>
                    }
                </div>
                <div className="col-sm-4">
                    {
                        showForm
                            ? <>

                                <div class="card">
                                    <div class="card-header">
                                        Edit {personData?.name} Profile
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-group">
                                            <li class="list-group-item d-flex justify-content-between">
                                                <strong>Account</strong>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" 
                                                    type="checkbox" id="id"
                                                     checked={personData.active}
                                                     onChange={e=>{
                                                        dispath(admin_userBlocUnblockAction({
                                                            userId : personData._id,
                                                            active : e.target.checked
                                                        }))
                                                        setPersonData({...personData , active : e.target.checked})
                                                    }
                                                    }
                                                    />

                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </>
                            : <>click on edit to edit this user</>
                    }
                </div>
            </div>
        </div>
    </>
}

export default Users