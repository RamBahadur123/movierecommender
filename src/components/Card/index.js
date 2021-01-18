import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <div>
                <div style={{textAlign:'center'}}>
                <h3>Services</h3>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">WebApplication</h5>
        <p className="card-text">This is the services provided to yor for any kind of 
        of website development like e-commerce application, online application, business application personal organization etc.
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Cloud services</h5>
        <p className="card-text">To provide any server resource to the resources you required for any kind of resources you needed.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Other Application</h5>
        <p className="card-text">Also we build mobile application according to your requirements.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
</div>
);
}
}

export default index;