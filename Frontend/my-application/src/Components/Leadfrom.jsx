import axios from 'axios'

import { useState } from 'react'

function LeadForm(){

    const [name,setName] = useState('')

    const [email,setEmail] = useState('')

    const [phone,setPhone] = useState('')

    const handleSubmit = async(e)=>{

        e.preventDefault()

        const resp = await axios.post(

            'http://localhost:3000/api/data/lead',

            {
                name,
                email,
                phone
            }

        )

        if(window.fbq){

            window.fbq('track','Lead')

        }

        alert("Lead submitted")

        console.log(resp.data)

    }

    return(

        <form

            onSubmit={handleSubmit}

            className="max-w-lg mx-auto p-10"

        >

            <input

                type="text"

                placeholder="Name"

                value={name}

                onChange={(e)=>setName(e.target.value)}

                className="border p-4 w-full mb-4"

            />

            <input

                type="email"

                placeholder="Email"

                value={email}

                onChange={(e)=>setEmail(e.target.value)}

                className="border p-4 w-full mb-4"

            />

            <input

                type="text"

                placeholder="Phone"

                value={phone}

                onChange={(e)=>setPhone(e.target.value)}

                className="border p-4 w-full mb-4"

            />

            <button

                type="submit"

                className="bg-black text-white px-6 py-3"

            >

                Submit

            </button>

        </form>

    )

}

export default LeadForm