import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import './memberCard.css'

function MemberCard(data) {

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
                <div className="absolute bottom-4 left-0 w-full px-2 text-center text-white">
                    <div className="text-amber-400 font-semibold text-lg cursor-default">{data.name}</div>
                    <div className="text-md mb-1 cursor-default">{data.desig}</div>
                    <div className="flex justify-center gap-4">
                        <a href={data.insta} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className=" scale-150 sm:scale-125 hover:scale-150 text-pink-500 hover:text-pink-400" icon={faInstagram} />
                        </a>
                        <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="scale-150 sm:scale-125 hover:scale-150 text-blue-400 hover:text-blue-300" icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MemberCard;