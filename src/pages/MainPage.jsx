const MainPage = () => {
  return (
    <>
      
      

    <div className="w-50 px-3 py-3 pt-5 
  pb-4 mx-auto text-center">
      <h1 className="display-4">Pricing</h1>
      <p className="lead">Quickly build an effective pricing table
        for your potential customers with this Bootstrap example.
        Its built with default Bootstrap components and utilities
        with little customization.</p>
    </div>

    <div className="container">
      <div className="card-deck mb-3 text-center d-flex justify-content-center ">
        <div className="card mb-4 shadow-sm border-primary m-3">
          <div className="card-header border-primary ">
            <h4 className="my-0 font-weight-normal">Free</h4>
          </div>
          <div className="card-body ">
            <h1 className="card-title ">$0
              <small className="text-muted">/ mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block 
          btn-outline-primary">Sign up for free</button>
          </div>




        </div>
        <div className="card mb-4 shadow-sm border-primary m-3">
          <div className="card-header border-primary">
            <h4 className="my-0 font-weight-normal">Pro</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$15
              <small className="text-muted">/ mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
          </div>
        </div>
        <div className="card mb-4 shadow-sm border-primary m-3">
          <div className="card-header border-primary">
            <h4 className="my-0 font-weight-normal">Enterprise</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
          </div>
        </div>
      </div>


    </div>
    </>
  )
}

export default MainPage