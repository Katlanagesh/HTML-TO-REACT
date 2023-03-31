import React from "react";

export default function Card({ title, price, user, storage, subdomain }) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{title}</h5>
                    <h6 className="card-price text-center">{price}<span className="period">/month</span></h6>

                    <ul className="fa-ul"><li>  <span className="fa-li">    <i className="fas fa-check"></i>  </span>  {title === "FREE" ?
                        (<span>{user}</span>) : (<strong>{user}</strong>)} </li>

                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{storage}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>

                        {title === "FREE" ? (<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited
                            Private Projects</li>) : (<li>  <span className="fa-li">    <i className="fas fa-check"></i></span>Unlimited Private Projects</li>)}


                        {title === "FREE" ? (<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated
                            Phone Support</li>) : (<li>  <span className="fa-li">    <i className="fas fa-check"></i></span>DedicatedPhone Support </li>)}


                        {title === "FREE" ? (<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>
                            {subdomain}</li>) : (<li>  <span className="fa-li">    <i className="fas fa-check"></i></span>
                                {title === "PRO" ? (<span>  <strong>Unlimited</strong>{subdomain}</span>
                                ) : (<span>{subdomain}</span>)} </li>)}


                        {title === "PRO" ? (<li> <span className="fa-li"><i className="fas fa-check"></i></span>Monthly StatusReports</li>) :
                            (<li className="text-muted">  <span className="fa-li">  <i className="fas fa-times"></i></span>Monthly StatusReports </li>)}
                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
