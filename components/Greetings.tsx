import React from 'react'

type MyProps = {
    name:string;
};
const Greetings: React.FC<MyProps> = ({name}) =>{
    return(
        <div>
            Hello {name}
        </div>
    )
}

export default Greetings