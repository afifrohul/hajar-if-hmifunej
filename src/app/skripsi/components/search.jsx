import Image from "next/image"

export default function SearchBar(props) {
    return (
        <div className="flex justify-center">
            <h1 className='invisible lg:visible ml-[200px] text-center text-[#51535E] font-bold text-[600px]'>“</h1>
            <form className={`absolute mt-[300px] h-[50px] w-[250px] mr-[150px] p-4 lg:mr-[0px] lg:h-[60px] lg:w-[418px] lg:mt-[280px] lg:py-[24px] lg:px-[48px] bg-primary flex rounded outline outline-white outline-1 ${props.span}`}>
                <input className="w-full bg-primary text-white outline-none text-[12px] lg:text-[16px]" type="text" id={props.text} name={props.text} placeholder={props.text} />
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_1051_109)">
                            <path d="M23.7058 22.2937L17.7368 16.3247C19.3634 14.3353 20.1632 11.7968 19.9707 9.23427C19.7781 6.67174 18.608 4.28124 16.7024 2.55723C14.7968 0.833216 12.3014 -0.0924026 9.73245 -0.0281708C7.1635 0.036061 4.71751 1.08523 2.90042 2.90232C1.08333 4.71941 0.0341613 7.1654 -0.0300705 9.73435C-0.0943024 12.3033 0.831316 14.7987 2.55533 16.7043C4.27934 18.6099 6.66984 19.78 9.23237 19.9726C11.7949 20.1651 14.3334 19.3653 16.3228 17.7387L22.2918 23.7077C22.4804 23.8899 22.733 23.9907 22.9952 23.9884C23.2574 23.9861 23.5082 23.8809 23.6936 23.6955C23.879 23.5101 23.9842 23.2593 23.9865 22.9971C23.9888 22.7349 23.888 22.4823 23.7058 22.2937ZM9.99881 18.0007C8.41656 18.0007 6.86984 17.5315 5.55424 16.6525C4.23865 15.7734 3.21327 14.524 2.60777 13.0622C2.00227 11.6004 1.84384 9.99183 2.15252 8.43998C2.4612 6.88813 3.22313 5.46267 4.34195 4.34385C5.46077 3.22503 6.88624 2.4631 8.43808 2.15442C9.98993 1.84574 11.5985 2.00417 13.0603 2.60967C14.5221 3.21517 15.7715 4.24055 16.6506 5.55614C17.5296 6.87174 17.9988 8.41846 17.9988 10.0007C17.9964 12.1217 17.1528 14.1552 15.653 15.6549C14.1533 17.1547 12.1198 17.9983 9.99881 18.0007Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1051_109">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </form>
        </div>
    )
}