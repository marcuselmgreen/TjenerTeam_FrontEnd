import React from 'react';

const Active = (props) => {

    const {activeBookings} = props;
    return (
        <div>
            {activeBookings}

            <h1>Aktive Bookings</h1>
        </div>
    );
};

export default Active;
