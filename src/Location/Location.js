import React, { Component } from "react";
import StoreMap from "./StoreMap"

class Location extends Component{
    render(){
        return(
            <div className="location-container">
                <div className="deliver-info">
                    <p>Estimate delivery time is 45 to 60 minutes.</p>
                    <p>Delivery fee is $2 in 3 miles range,
                    $4 in 5 miles range</p>
                    <p>We do not deliver beyond 5 miles.</p>
                </div>
                <div className="contact-info">
                    <p>47 Montauk Hwy<br/>Copiague, NY 11726</p>
                    <p>Phone: (631) 789-8866</p>
                </div>
                
                <div className="hours">
                    <p className="table-name">Store Hours:</p>
                    <table>
                        <tr>
                            <th scope="col">Monday:</th>
                            <td>Closed</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="col">Tuesday:</th>
                            <td>11:00 AM</td>
                            <td>10:00 PM</td>
                        </tr>
                        <tr>
                            <th scope="col">Wednesday:</th>
                            <td>11:00 AM</td>
                            <td>10:00 PM</td>
                        </tr>
                        <tr>
                            <th scope="col">Thursday:</th>
                            <td>11:00 AM</td>
                            <td>10:00 PM</td>
                        </tr>
                        <tr>
                            <th scope="col">Friday:</th>
                            <td>11:00 AM</td>
                            <td>11:00 PM</td>
                        </tr>
                        <tr>
                            <th scope="col">Saturday:</th>
                            <td>11:00 AM</td>
                            <td>11:00 PM</td>
                        </tr>
                        <tr>
                            <th scope="col">Sunday:</th>
                            <td>12:00 PM</td>
                            <td>10:00 PM</td>
                        </tr>
                    </table>
                </div>
                <StoreMap/>
            </div>
        )
    }
}

export default Location;