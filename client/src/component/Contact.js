import React from 'react'

export const Contact = () => {
  return (
    <>
        <div className='container-fluid my-5 h-100 d-flex align-items-center justify-content-center '>
        <form style={{width: "26rem"}}>

        <div data-mdb-input-init class="form-outline mb-4">
            <input type="text" id="form4Example1" class="form-control" />
            <label class="form-label" for="form4Example1">Name</label>
        </div>

  
        <div data-mdb-input-init class="form-outline mb-4">
            <input type="email" id="form4Example2" class="form-control" />
            <label class="form-label" for="form4Example2">Email address</label>
        </div>


        <div data-mdb-input-init class="form-outline mb-4">
            <textarea class="form-control" id="form4Example3" rows="4"></textarea>
            <label class="form-label" for="form4Example3">Message</label>
        </div>


        <div class="form-check d-flex justify-content-center mb-4">
            <input
            class="form-check-input me-2"
            type="checkbox"
            value=""
            id="form4Example4"
            checked
            />
            <label class="form-check-label" for="form4Example4">
            Send me a copy of this message
            </label>
        </div>

        <div data-mdb-input-init class="form-outline mb-4">
        <button type="button" class="btn btn-primary btn-lg btn-block w-100 mb-4">Send</button></div>
</form>
</div>
    </>
  )
}

export default Contact
