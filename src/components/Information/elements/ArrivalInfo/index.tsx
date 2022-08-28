import React, {FC} from 'react';

export const ArrivalInfo:FC = () => {
    return (
        <section id="arrivalinfo">
            <h2>Arrival Information</h2>
            <ul>
                <li><strong>Check-in:</strong> 3:00 PM</li>
                <li><strong>Check-out:</strong> 11:00 AM</li>
                <li><strong>Parking:</strong> Self-parking in the underground garage is ￡15 per day and valet-parking is ￡50 per day.</li>
                <li><strong>Airport Shuttle:</strong> Our complimentary airport shuttles leave every hour on the hour, and make trips to Heathrow and Gatwick airports.</li>
                <li><strong>Trains:</strong> The nearest Underground station is at Leicester Square.</li>
                <li><strong>Pet Policy:</strong> Pets of all sizes and types are allowed in designated pet rooms, and the specified common areas. Service animals are allowed everywhere.</li>
            </ul>
        </section>
    );
};
