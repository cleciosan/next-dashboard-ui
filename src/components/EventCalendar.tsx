"use client"

import { title } from "process";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary
const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Lorem dolor ipsum",
        time: "08:00 AM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        title: "Ipsum Dolor Lorem",
        time: "09:00 AM - 4:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());


    return (
        <div className='bg-white p-4 rounded-md'>
            <Calendar
                onChange={onChange}
                value={value} />
                <div className="flex flex-col gap-4">
                    {events.map(event=> (
                      <div className="" key={event.id}></div>
                    ))}
                </div>
        </div>
    )
}

export default EventCalendar