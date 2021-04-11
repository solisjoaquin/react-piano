import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="flex items-center  justify-between h-16 lg:mx-8 ">
            <div className="font-bold text-white text-xl px-4"><Link href="/">Piano con Diana &#127929;</Link></div>
            <div className="mx-4 text-gray-200 flex items-center">
                <Link href="/clase1">Clase 1</Link>
                {/*                 <div className="rounded-lg bg-blue-700 px-4 mx-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cyan-500"><a href="/">Aplica</a></div>
 */}            </div>
        </div>
    )
}