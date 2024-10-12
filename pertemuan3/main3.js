const event = {
  eventName: 'Workshop KSM Android',
  date: '2024-10-10',
  attendees: ['Valtrizt', 'Billy'],
};

let { eventName, date, attendees } = event;

function addAttendees(newAttendees) {
  const updatedAttendees = [...attendees, ...newAttendees];

  const updatedEvent = {
    eventName,
    date,
    attendees: updatedAttendees,
  };

  console.log(updatedEvent);
}

const newAttendees = ['Rizky', 'Pak Sengklek'];
addAttendees(newAttendees);
