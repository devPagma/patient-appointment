import React, { useState } from 'react';

const initialAppointments = [
  { id: 1, name: 'Rahul Kumar', reason: 'Routine Checkup', date: '2024-11-01', status: 'scheduled' },
  { id: 2, name: 'Rohit Urus', reason: 'Dental Cleaning', date: '2024-11-03', status: 'scheduled' },
  { id: 3, name: 'Kapil Dev', reason: 'Full Body Check-up', date: '2024-11-05', status: 'Appointment yet-to-take' }
];

const AppointmentList = () => {
  const [appointments, setAppointments] = useState(initialAppointments);

  // Count completed appointments
  const completedCount = appointments.filter(app => app.status === 'completed').length;

  // Function to mark an appointment as completed
  const markAsCompleted = (id) => {
    setAppointments(prevAppointments =>
      prevAppointments.map(app =>
        app.id === id ? { ...app, status: 'completed' } : app
      )
    );
  };

  // Styles
  const styles = {
    container: { 
      maxWidth: '600px', 
      margin: '0 auto', 
      textAlign: 'center', 
      fontFamily: 'Arial', 
      padding: '20px', 
      backgroundColor: '#f9f9f9', 
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    header: { 
      fontSize: '28px', 
      margin: '20px 0', 
      color: '#333' 
    },
    card: { 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      marginBottom: '15px', 
      backgroundColor: '#fff', 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
      transition: 'transform 0.3s'
    },
    cardHover: {
      transform: 'scale(1.02)'
    },
    completedText: { 
      textDecoration: 'line-through', 
      color: 'gray' 
    },
    button: { 
      marginTop: '15px', 
      padding: '10px 15px', 
      cursor: 'pointer', 
      backgroundColor: '#4CAF50', 
      color: '#fff', 
      border: 'none', 
      borderRadius: '5px', 
      fontSize: '16px', 
      transition: 'background-color 0.3s'
    },
    buttonHover: {
      backgroundColor: '#45a049'
    },
    footer: {
      marginTop: '20px',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Patient Appointments</h1>
      
      {appointments.map(app => (
        <div 
          key={app.id} 
          style={{ ...styles.card, ...(app.status === 'scheduled' ? styles.cardHover : {}) }}
        >
          <h2 style={app.status === 'completed' ? styles.completedText : {}}>{app.name}</h2>
          <p><strong>Reason:</strong> {app.reason}</p>
          <p><strong>Date:</strong> {app.date}</p>
          <p><strong>Status:</strong> {app.status}</p>
          {app.status === 'scheduled' && (
            <button 
              style={styles.button} 
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}
              onClick={() => markAsCompleted(app.id)}
            >
              Mark as Completed
            </button>
          )}
        </div>
      ))}

      <div style={styles.footer}>
        Total Completed Appointments: {completedCount}
      </div>
    </div>
  );
};

export default AppointmentList;
