import MemberCard from "../../memberCard/memberCard";
import './domain.css'

function DomainComp(d) {
    const data = d.data;

    return (
        <>
            {data.domain && (
                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>
                    {data.domain}
                </h1>
            )}

            <div className='domain m-auto'>
                <div className='m-auto domainMembers'>
                    <div className='resp mt-3 flex flex-wrap justify-evenly items-center'>
                        {data.domainHead.map((m, index) => (
                            <MemberCard key={index} {...m} />
                        ))}
                    </div>
                </div>
                <div className='m-auto domainMembers'>
                    <div className='resp mt-5 mb-32 flex flex-wrap justify-evenly items-center'>
                        {data.members.map((m, index) => (
                            <MemberCard key={index} {...m} />
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default DomainComp;