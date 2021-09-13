import React from "react";

function Array(){
    const Students=[
        {
            id:1,
            name:"Mark"
        },
        {
            id:2,
            name:"Elon"
        },
        {
            id:3,
            name:"Bill"
        }
    ]
    return(
        <div>
            <h1>Arrays in Students</h1>
            {Students.map((student) =>(
                <h1>{student.name}</h1>

            ))}
        </div>
    )
}
export default Array;