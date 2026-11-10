import React, { useState } from 'react';

function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '18:00',
    guests: '2',
    specialRequests: ''
  });
  
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [reservationDetails, setReservationDetails] = useState(null);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const reservationId = 'TB-' + Math.floor(1000 + Math.random() * 9000);
    
    const details = {
      id: reservationId,
      ...formData,
      timestamp: new Date().toLocaleString()
    };
    
    setReservationDetails(details);
    setReservationSuccess(true);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '18:00',
      guests: '2',
      specialRequests: ''
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const timeOptions = [];
  for (let hour = 11; hour <= 22; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeOptions.push(timeString);
    }
  }
  
  const today = new Date().toISOString().split('T')[0];
  
  return (
    <section id="reservations">
      <div className="container">
        <div className="section-title">
          <h2>Make a Reservation</h2>
          <p>Book your table for an unforgettable dining experience</p>
        </div>
        
        {reservationSuccess && reservationDetails && (
          <div className="success-message">
            <h3>Reservation Confirmed! 🎉</h3>
            <p>Your table has been reserved successfully. Reservation ID: <strong>{reservationDetails.id}</strong></p>
            <p>We look forward to serving you!</p>
          </div>
        )}
        
        <div className="reservation-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="date">Reservation Date *</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  required 
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="time">Reservation Time *</label>
                <select 
                  id="time" 
                  name="time" 
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  {timeOptions.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="guests">Number of Guests *</label>
                <select 
                  id="guests" 
                  name="guests" 
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests</label>
              <textarea 
                id="specialRequests" 
                name="specialRequests" 
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Any special requirements or celebrations..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn">Book Table</button>
          </form>
          
          {reservationDetails && (
            <div className="reservation-summary">
              <h4>Reservation Summary</h4>
              <div className="summary-item">
                <span>Reservation ID:</span>
                <strong>{reservationDetails.id}</strong>
              </div>
              <div className="summary-item">
                <span>Name:</span>
                <span>{reservationDetails.name}</span>
              </div>
              <div className="summary-item">
                <span>Date & Time:</span>
                <span>{reservationDetails.date} at {reservationDetails.time}</span>
              </div>
              <div className="summary-item">
                <span>Guests:</span>
                <span>{reservationDetails.guests} people</span>
              </div>
              <div className="summary-item">
                <span>Booked On:</span>
                <span>{reservationDetails.timestamp}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Reservations;