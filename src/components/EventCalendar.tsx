"use client"

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


const EventCalendar = () => {
  return (
    <div className=''>EventCalendar</div>
  )
}

export default EventCalendar