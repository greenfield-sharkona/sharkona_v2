import React from 'react'
import calen from './eventpic/calender.png'
import book from './eventpic/book.png'
import clock from './eventpic/clock.png'

const CardOrg = ({ title, sDate, sTime, eDate, eTime, location, phoneNumber }) => {


    return (
        <div className="card " id="cardEv">
            <a>
                <img className="img-fluid" src={`https://unsplash.it/350/140/?${Math.floor(Math.random(0, 100) * 100)}`} alt="portfolio_img" />
            </a>
            <ul class=" list-group my-0 pl-1">
                {/* <strong className="pEvent"> {title} </strong><br /> */}
                <li class="list-inline-item" className="pEvent"><i class="fas fa-calendar-check" > &nbsp;{title}</i> </li>
                <li class="list-inline-item" className="pEvent"><i class="fas fa-calendar-check" > &nbsp; <img className="clockStyle" src={clock} /> Start Event:&nbsp; {sTime}</i> &nbsp; <i class="fas fa-calendar-check" > <img className="clockStyle" src={clock} />End Event:&nbsp; {eTime}  &nbsp; </i></li><br />
                <li class="list-inline-item" className="pEvent"><i class="fas fa-calendar-check" >  &nbsp; <img className="clockStyle" src={calen} />Start Date:&nbsp;{sDate}</i> &nbsp; <i class="fas fa-calendar-check" > <img className="clockStyle" src={calen} />End Date:&nbsp;{eDate}  &nbsp; </i></li><br />
                <li class="list-inline-item" className="pEvent"><i class="fas fa-calendar-check" >  &nbsp; Event Location:&nbsp;{location}</i> &nbsp; <i class="fas fa-calendar-check" >Phone Number:&nbsp; {phoneNumber}  &nbsp; </i></li><br />
            </ul>
            <div>
                <button type="button" class="btn btn-warning">   delete</button>&nbsp;&nbsp;
                <button type="button" class="btn btn-warning">   update</button>


            </div>

        </div>
    )
}


export default CardOrg