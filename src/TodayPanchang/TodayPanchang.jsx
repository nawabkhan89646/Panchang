import React from 'react'
import './TodayPanchang.css'

const TodayPanchang = () => {
  return (
    <div className="panchang-card">
        <h2>Panchang</h2>
        <hr />
        <p className="location">New Delhi, India (3 February, 2025)</p>
        <hr />

        <div className="details">
            <p><strong>Tithi:</strong> Shukla <span className="highlight"><a href="">Shashti</a></span> upto <span className="time"><a href="">28:39:25</a></span></p>
            <p><strong>Month Amanta:</strong> Magha</p>
            <p><strong>Month Purnimanta:</strong> Magha</p>
            <p><strong>Day:</strong> Somavara | <strong>Samvat:</strong> 2081</p>
            <hr />
            <p><strong>Nakshatra:</strong> <span className="highlight"><a href="">Revati</a></span> upto <span className="time">23:17:29</span></p>
            <p><strong>Yoga:</strong> <span className="highlight"><a href="">Sadhya</a></span> upto <span className="time"><a href="">27:02:08</a></span></p>
            <p><strong>Karan:</strong> <span className="highlight"><a href="">Kolav</a></span> upto <span className="time">17:46:11</span>, <span className="highlight"><a href="">Tetil</a></span> upto <span className="time"><a href="">28:39:25</a></span></p>
            <hr />
        </div>

        <button className="panchang-button">TODAY PANCHANG</button>
    </div>
  )
}

export default TodayPanchang


