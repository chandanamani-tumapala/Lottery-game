import { useState } from "react";
import "./lottery.css"
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";


export default function Lottery({n=3,winCondition}) {

    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);
    let buyticket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <br></br>
            <button onClick={buyticket}>Buy new ticket</button>
            <h3>{isWinning && 'Congratulations, you won! '}</h3>
        </div>
    );
}