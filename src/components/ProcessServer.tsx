import React from 'react'
import Heading from './Heading'
import { TiTick } from 'react-icons/ti'

const ProcessServer = () => {
//     General Civil Litigation
// Summons & Complaints
// Restraining orders
// Government
// Local & Federal government
// courts
// City municipalities
// Government agencies
// Police departments
// Jails & detention facilities
// Real Estate
// Foreclosure documents
// Eviction Notices / 30 Day Notice to
// Correct or Vacate
// Landlord & Tenant documents
// Bank levies
// Wage garnishments
// Family Law
// Divorce papers
// Paternity determination
// Child support
// Custody
// Visitation papers

const items = [
    "General Civil Litigation", "Summons & Complaints", "Restraining orders", "Government", "Local & Federal government", "Courts", "City municipalities", "Government agencies", "Police departments", "Jails & detention facilities", "Real Estate", "Foreclosure documents",  "Landlord & Tenant documents", "Bank levies", "Wage garnishments", "Family Law", "Divorce papers", "Paternity determination", "Child support", "Custody", "Visitation papers","Eviction Notices",
]
  return (
    <div className='py-14 container'>
        <Heading title='Process Server Services'/>

        <div className="grid md:grid-cols-5  gap-x-4">
            {
                items.map((item, index) => (
                    <div key={index} className="p-2 flex items-center gap-2 ">
                        <TiTick className='!text-green-400 !h-5 !w-5'/>
                        <h3 className="text-sm font-semibold">
                            {item}
                        </h3>
                    </div>
                ))
            }
        </div>
    </div>

  )
}

export default ProcessServer