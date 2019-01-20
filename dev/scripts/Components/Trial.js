import React, { Component } from 'react'

export default class Trial extends Component {
  render() {
    return (
      <section className="trial">
          <div className="container">
            <div className="box">
                <div className="overlay">
                    <img src="../img/yoga.png" alt=""/>
                </div>
            </div>
            <div className="box">
                <div className="overlay">
                    <img src="../img/SURF.png" alt=""/>
                </div>
            </div>
            <div className="box">
                <div className="overlay">
                    <img src="../img/yoga.png" alt=""/>
                </div>
            </div>
          </div>
      </section>
    )
  }
}
