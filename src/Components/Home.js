import React from "react";

function Home(){
    console.log("inside home");
    const name = "Yogya";
    const companyName = 'GL';
    const tech = 'Sept';
    const val = 2**10;
    const element = <h2>we are using ReactJS</h2>;
    const element2 = <h2>Current Month:{tech}</h2>;
    const element3 = <h2>{val}</h2>
    const mydiv = 
    <div>
        <p>this is para under mydiv</p>
        <p>this is second para</p>
    </div>
    const mydiv2 = <div className="bg-warning w-50 m-auto p-2"> Coloured Div</div>
    return(
        <div>
            <h1>Home</h1>
            <h2>Welcome {name} </h2>
            <h2>Current Date =  {new Date().toLocaleTimeString()}</h2>
            <h3>Company - {companyName}</h3>
            {element}
            {element2}
            {element3}
            {mydiv}
            {mydiv2}
        </div>
    )
}

export default Home;