import React from 'react'
import { TiTick } from 'react-icons/ti';

const Commonly = () => {
    const items = [
        "PS1583 - Application for Delivery of Mail Through Agent",
        "Designating Beneficiary(ies) for a Retirement Account & Death Benefit",
        "Uniform Consent to Service of Process",
        "Affidavit of Heirship",
        "Unclaimed Property Inquiry",
        "Notice of Lien, Lien Release, or Authorization to Add/Remove Name from Title",
        "212243 - U.S. Department of State. Issuance of a U.S. Passport to a Minor Under Age 16",
        "Vehicle Certificate of Ownership/Title Application",
        "Advanced Health Directive Forms",
        "Applications for Admission to Practice as an Attorney",
        "Acknowledgments, Jurats",
        "Handgun Permits",
        "Identity Theft Victim's Complaint and Affidavit",
        "Power of Attorney (POA)",
        "Bank Transfer Service Forms",
        "Supplemental Marriage License Applications",
        "Temporary Guardianship Agreement",
        "Medical Authorization for Minors",
        "Motor Vehicle Bill of Sale",
        "Character Reference Letter",
        "Adoption Documents"
    ]
  return (
    <section>
    <div className="flex flex-col md:flex-row-reverse md:items-center">
        <div className='h-1/2'>
        <img  className="p-5" src="/img1.png"/>
        </div>

        <section className="container mx-auto py-8 px-4">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Commonly Notarized Documents</h2>
                <ul className="list-none space-y-4 grid md:grid-cols-2 gap-x-3">
                    {items.map((item, index) => {
                        return (
                            <li key={index} className="flex items-center gap-2">
                                <div className='h-5 w-5'>
                                <TiTick size={20} className='!stroke-green-400 text-green-400' />
                                </div>
                                {item}
                            </li>
                        );
                    }
                    )}
                    
                </ul>
            </div>
</section>
    </div>
</section>
  )
}

export default Commonly