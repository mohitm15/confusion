import React from 'react';

function Contact(props) {
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                <h5>Our Address</h5>
                    <address style={{ color:'black'}}>
		              A-22, Subhash Road<br />
		              Subhash Nagar, Bhopal, MP<br />
		              INDIA<br />
		              <i className="fa fa-phone fa-lg"></i>: +91 98931 92614<br />
		              <i className="fa fa-fax fa-lg"></i>: (0755) 277 772<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:mmaroliya@gmail.com">
                      mohitkadhabba@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+91 9893192614"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="/contactus"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:mmaroliya@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;