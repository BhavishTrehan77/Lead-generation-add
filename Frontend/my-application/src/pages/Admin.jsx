    import { useEffect,useState } from 'react'

    import axios from 'axios'

    function Admin(){

        const [leads,setLeads] = useState([])

        const [search,setSearch] = useState('')

        const [filter,setFilter] = useState('all')

        useEffect(()=>{

            fetchLeads()

        },[])

        async function fetchLeads(){

            const resp = await axios.get(

                'http://localhost:3000/api/data/leads'

            )

            setLeads(resp.data.leads)

        }

        async function updateStatus(id,status){

            await axios.put(

                `http://localhost:3000/api/data/lead/${id}`,

                { status }

            )

            fetchLeads()

        }

        async function deleteLead(id){

            await axios.delete(

                `http://localhost:3000/api/data/lead/${id}`

            )

            fetchLeads()

        }

        const filteredLeads = leads.filter((lead)=>{

            const matchesSearch = lead.name
            .toLowerCase()
            .includes(search.toLowerCase())

            const matchesFilter = filter === 'all'

            || lead.status === filter

            return matchesSearch && matchesFilter

        })

        const totalLeads = leads.length

        const newLeads = leads.filter(

            (lead)=>lead.status === 'new'

        ).length

        const closedLeads = leads.filter(

            (lead)=>lead.status === 'closed'

        ).length

        return(

            <div className="p-10">

                <h1 className="text-5xl font-bold">

                    CRM Dashboard 🚀

                </h1>

                {/* ANALYTICS */}

                <div className="grid md:grid-cols-3 gap-6 mt-10">

                    <div className="border p-6 rounded-xl">

                        <h2 className="text-2xl font-bold">

                            Total Leads

                        </h2>

                        <p className="text-4xl mt-4">

                            {totalLeads}

                        </p>

                    </div>

                    <div className="border p-6 rounded-xl">

                        <h2 className="text-2xl font-bold">

                            New Leads

                        </h2>

                        <p className="text-4xl mt-4">

                            {newLeads}

                        </p>

                    </div>

                    <div className="border p-6 rounded-xl">

                        <h2 className="text-2xl font-bold">

                            Closed Leads

                        </h2>

                        <p className="text-4xl mt-4">

                            {closedLeads}

                        </p>

                    </div>

                </div>

                {/* SEARCH */}

                <input

                    type="text"

                    placeholder="Search Leads"

                    value={search}

                    onChange={(e)=>setSearch(e.target.value)}

                    className="border p-4 w-full mt-10"

                />

                {/* FILTER */}

                <div className="flex gap-4 mt-6">

                    <button onClick={()=>setFilter('all')}>

                        All

                    </button>

                    <button onClick={()=>setFilter('new')}>

                        New

                    </button>

                    <button onClick={()=>setFilter('contacted')}>

                        Contacted

                    </button>

                    <button onClick={()=>setFilter('closed')}>

                        Closed

                    </button>

                </div>

                {/* TABLE */}

                <table className="w-full border mt-10">

                    <thead>

                        <tr>

                            <th>Name</th>

                            <th>Email</th>

                            <th>Phone</th>

                            <th>Status</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            filteredLeads.map((lead)=>(

                                <tr key={lead._id}>

                                    <td>{lead.name}</td>

                                    <td>{lead.email}</td>

                                    <td>{lead.phone}</td>

                                    <td>{lead.status}</td>

                                    <td>

                                        <button

                                        onClick={()=>updateStatus(

                                            lead._id,

                                            'contacted'

                                        )}

                                        >

                                            Contacted

                                        </button>

                                        <button

                                        onClick={()=>updateStatus(

                                            lead._id,

                                            'closed'

                                        )}

                                        >

                                            Closed

                                        </button>

                                        <button

                                        onClick={()=>deleteLead(

                                            lead._id

                                        )}

                                        >

                                            Delete

                                        </button>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        )

    }

    export default Admin