import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import './memberCard.css'

function FacultyCard(data) {

    return (
        <>
            <div
                className="relative h-[400px] w-[266px] sm:h-[300px] sm:w-[200px] my-5 mx-2 rounded-xl overflow-hidden border border-black shadow-md transform transition-transform duration-300 hover:scale-110 "
            >
                {/* Background image + gradient overlay */}
                <div
                    style={{ backgroundImage: `url(${data.img})` }}
                    className="h-full w-full bg-cover bg-center bg-no-repeat"
                >
                    {/* Gradient overlay */}
                    <div className="h-full w-full bg-gradient-to-t from-black via-transparent" />
                </div>

                {/* Overlay content */}
                <div className="absolute bottom-4 left-0 w-full px-2 text-center text-white cursor-default">
                    <div className="text-amber-400 font-semibold text-lg">{data.name}</div>
                    <div className="text-md mb-1">{data.desig}</div>
                    
                </div>
            </div>

        </>
    )
}

export default FacultyCard;