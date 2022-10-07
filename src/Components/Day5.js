import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import ErrorTest from "./ErrorTest";
import FRparentInput from "./FRparentInput";

function Day5(){
    const data= [{
        "userId": 1,
        "firstName": "Krish",
        "lastName": "Lee",
        "phoneNumber": "123456",
        "emailAddress": "krish.lee@learningcontainer.com"
      },
      {
        "userId": 2,
        "firstName": "racks",
        "lastName": "jacson",
        "phoneNumber": "123454",
        "emailAddress": "racks.jacson@learningcontainer.com"
      },
      {
        "userId": 3,
        "firstName": "denial",
        "lastName": "roast",
        "phoneNumber": "123457",
        "emailAddress": "denial.roast@learningcontainer.com"
      },
      {
        "userId": 4,
        "firstName": "devid",
        "lastName": "neo",
        "phoneNumber": "222222222",
        "emailAddress": "devid.neo@learningcontainer.com"
      },
      {
        "userId": 5,
        "firstName": "jone",
        "lastName": "mac",
        "phoneNumber": "111111111",
        "emailAddress": "jone.mac@learningcontainer.com"
      }]
    return(
        <div>
            <h1>Day5</h1>
            <ErrorBoundary>
                <ErrorTest name="yogya"></ErrorTest>
            </ErrorBoundary>
            <ErrorBoundary>
                <ErrorTest name="tony"></ErrorTest>
            </ErrorBoundary>

            <h2 className="m-2 bg-success">REF</h2>
                <FRparentInput></FRparentInput>
            <h1 className="m-2 bg-info">Lists</h1>
            {
                data.map((item)=>(
                    <ul className="m-2 bg-warning">
                        <li>{item.firstName} {item.lastName}</li>
                        <li>{item.phoneNumber}</li>
                        <li>{item.emailAddress}</li>
                    </ul>
                ))
            }
        </div>
    )
}
export default Day5;