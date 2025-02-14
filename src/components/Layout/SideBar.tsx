import { NavLink } from "react-router-dom"
import { navLink } from "../../data"
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { BellIcon, EnterIcon } from "@radix-ui/react-icons";

const SideBar = () => {
    let navigate = useNavigate()
    const logOutHandler = () => {
        localStorage.removeItem("tokenMunicipality")
        setTimeout(() => {
            navigate("/login")
        }, 1000);
    }

    return (
        <nav className="bg-[#F8F0E5] px-7 right-0 top-0 fixed py-10 text-gray-500 w-1/5 h-screen">
            <div className="flex flex-col space-y-10 items-center justify-start h-full">
                <div className="flex w-4/5 flex-col space-y-3 items-center justify-center">
                    <div className="flex items-center  justify-center">
                        <img className="w-10 h-10" src="/images/logo.png" alt="logo" />
                        <h3 className="text-[#524F4D] font-bold text-lg">بلدية ضاحية الأسد</h3>
                    </div>
                    <div className="bg-primary w-full rounded-full flex items-center justify-between py-1 px-5">
                        <div className="flex items-center justify-center gap-1">
                            <img className="w-8 h-8 rounded-full" src="/images/admin.jfif" alt="boss" />
                            <div className="">
                                <h2 className="text-sm text-white">مازن سعيد</h2>
                                <h3 className="text-sm">مدير</h3>
                            </div>
                        </div>
                        <div>
                            <BellIcon width={20} height={20} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-5 space-y-3 border-y-2 border-gray-300 items-center justify-center gap-4 text-lg">
                    {navLink.map((item, i) => <NavLink key={i} to={item.link}>{item.text}</NavLink>)}
                </div>
                <Button variant="ghost" onClick={logOutHandler} >
                   <EnterIcon className="me-2" height={20} width={20} />
                    تسجيل الخروج
                </Button>
            </div>
        </nav>
    )
}

export default SideBar
