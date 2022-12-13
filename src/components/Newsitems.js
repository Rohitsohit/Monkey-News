import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let { title, description, imageurl,readurl } = this.props;

    return (
      <>
        <div className="card" style={{ width: "15rem" }}>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={readurl} target='_blank' className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>

          

        </div>
      </>
    );
  }
}

export default Newsitems;
