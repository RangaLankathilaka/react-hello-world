import React from "react"
import ContactCard from "./ContactCard";

function PageCardDetail() {


    return(
        <div className="contact-detail">

            <ContactCard
            contact={{imgUrl:"https://www.gstatic.com/webp/gallery3/1.png" ,name: "Ranga", address:"ingiriya", contact:"066273881"}}

            />
            <ContactCard

                contact={{imgUrl:"https://www.gstatic.com/webp/gallery3/1.png" ,name: "Sanka", address:"ingiriya", contact:"066233881"}}
            />
            <ContactCard

                contact={{imgUrl:"https://www.gstatic.com/webp/gallery3/1.png" ,name: "Isuru", address:"Maharagama", contact:"0662336888"}}

            />
            <ContactCard


                contact={{imgUrl:"https://www.gstatic.com/webp/gallery3/1.png" ,name: "Shan", address:"Ambalangoda", contact:"0662454888"}}

            />


        </div>

    )
}

export default PageCardDetail