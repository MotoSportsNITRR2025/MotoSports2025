import Timeline from "../timeline/timeline";

function Phases(...data) {
    
    return (
        <div className="phases flex">
            <div className="flex justify-center items-center" style={{ width: '50%', height: 'auto' }}>
                <img src={data[0].img} alt="" className='img' />
            </div>
            <Timeline events={data[0].events} />  
        </div>
    )
}

export default Phases;