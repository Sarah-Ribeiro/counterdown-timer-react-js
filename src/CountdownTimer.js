import React from "react";
import { useCountdown } from "./useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate)

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        )
    }
}

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
    )
}

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <a
                href="https://tapasadhikary.com"
                target="_blank"
                rel="noopener noreferrer"
                className="countdown-link"
            >
                <DateTimeDisplay value={days} type={'Dias'} isDanger={days <= 8} />
                <p>:</p>
                <DateTimeDisplay value={hours} type={'Horas'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={minutes} type={'Minutos'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={seconds} type={'Segundos'} isDanger={false} />
            </a>
        </div>
    )
}

export default CountdownTimer