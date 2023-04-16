import React from 'react'

const Account = () => {
  return <>
    <div className="container mt-5">
      <div className="row">
      <div className="col-sm-4">
            <div class="card">
              <div class="card-body">
                <p className='fs-2'>Total : 5</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              </div>
            </div>
        </div>
        <div className="row col-sm-4">
            <div class="card">
              <div class="card-body">
                <p className='fs-2'>Publish : 2</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              </div>
            </div>
        </div>
        <div className="row col-sm-4">
            <div class="card">
              <div class="card-body">
                <p className='fs-2'>Pending : 3</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
    
   </>
}

export default Account