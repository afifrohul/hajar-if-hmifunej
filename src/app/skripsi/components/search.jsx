import Image from "next/image"

export default function SearchBar(props) {
    return (
        <form className={`flex justify-between p-2 rounded outline outline-1 ${props.span}`}>
            <input className="w-full outline-none" type="text" id={props.text} name={props.text} placeholder={props.text} />
            <button>
                <Image src={props.asset} />
            </button>
        </form>
    )
}