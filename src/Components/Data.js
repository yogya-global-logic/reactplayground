import React from "react";
// import ChildComp from "./ChildComp";
import DataReceiver from "./DataReceiver";
import DataReceiver2 from "./DataReceiver2";
// import ParentComp from "./ParentComp";
function Data(){
    const name = "yogya";
    const company = "Gl";
    const mobile = 1234567890;
    const email = 'yogya.singhal@gl';
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
            <h1>Data</h1>
            <DataReceiver data={data}></DataReceiver>
            <DataReceiver2 data={data}></DataReceiver2>
            {/* <ParentComp name={name} company={company} ></ParentComp> */}
            {/* <ChildComp name={name}></ChildComp> */}
        </div>
    )
}
export default Data;