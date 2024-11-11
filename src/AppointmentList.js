import React, { useState } from 'react';

const initialAppointments = [
  { id: 1, name: 'Rahul Kumar', reason: 'Routine Checkup', date: '2024-11-01', status: 'scheduled' },
  { id: 2, name: 'Rohit Urus', reason: 'Dental Cleaning', date: '2024-11-03', status: 'scheduled' },
  { id: 3, name: 'Kapil Dev', reason: 'Full Body Check-up', date: '2024-11-05', status: 'Appointment yet-to-take' }
];

const AppointmentList = () => {
  const [appointments, setAppointments] = useState(initialAppointments); //usestate is hook to manage state in functional component

  // Count completed appointments
  const completedCount = appointments.filter(app => app.status === 'completed').length; //filter is used to filter the array based on condition   

  // This is to make  the appointments list to be updated 
  const markAsCompleted = (id) => {
    setAppointments(prevAppointments =>
      prevAppointments.map(app =>
        app.id === id ? { ...app, status: 'completed' } : app
      )
    ); //map is used to iterate over the array and update the array based on condition
    //markascompleted is a function which is called when the button is clicked and it updates the status of the appointment to completed
  }; //setAppointments is used to update the state of the appointments

  const styles = {
    container: { 
      maxWidth: '800px', 
      margin: '20px auto', 
      padding: '30px', 
      backgroundColor: '#f0f4f8', 
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
    },
    header: { 
      fontSize: '32px', 
      marginBottom: '30px', 
      color: '#2c3e50',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    card: { 
      padding: '25px', 
      border: 'none', 
      borderRadius: '12px', 
      marginBottom: '20px', 
      backgroundColor: '#fff', 
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)', 
      transition: 'all 0.3s ease'
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)'
    },
    completedCard: {
      backgroundColor: '#e8f5e9',
      opacity: 0.8
    },
    patientName: {
      fontSize: '24px',
      color: '#34495e',
      marginBottom: '10px'
    },
    appointmentInfo: {
      fontSize: '16px',
      color: '#7f8c8d',
      marginBottom: '5px'
    },
    statusTag: {
      display: 'inline-block',
      padding: '5px 10px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    scheduledStatus: {
      backgroundColor: '#3498db',
      color: '#fff'
    },
    completedText: { 
      textDecoration: 'line-through', 
      color: 'gray' 
    },
    
    completedStatus: {
      backgroundColor: '#2ecc71',
      color: '#fff'
    },
    button: { 
      marginTop: '15px', 
      padding: '10px 20px', 
      cursor: 'pointer', 
      backgroundColor: '#3498db', 
      color: '#fff', 
      border: 'none', 
      borderRadius: '25px', 
      fontSize: '16px', 
      transition: 'all 0.3s ease',
      outline: 'none'
    },
    buttonHover: {
      backgroundColor: '#2980b9',
      transform: 'scale(1.05)'
    },
    footer: {
      marginTop: '30px',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#2c3e50',
      textAlign: 'center'
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
