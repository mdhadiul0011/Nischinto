import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";

export const PriceData = [
    {
        price: "$39",
        name: "Blood Test",
        des: ["Frist Description", "Second Description", "Third Description", "Fourth Description", "Fifth Description"],
        icon: [<IoCheckmarkSharp className="ns-pricing-check"/>, <RxCross2 className="ns-pricing-cross"/>]
    },
    {
        price: "$150",
        name: "Hemoglobin Test",
        des: ["Frist Description", "Second Description", "Third Description", "Fourth Description", "Fifth Description"],
        icon: [<IoCheckmarkSharp className="ns-pricing-check"/>, <RxCross2 className="ns-pricing-cross"/>]
    },
    {
        price: "$89",
        name: "Homocysteine",
        des: ["Frist Description", "Second Description", "Third Description", "Fourth Description", "Fifth Description"],
        icon: [<IoCheckmarkSharp className="ns-pricing-check"/>, <IoCheckmarkSharp className="ns-pricing-check"/>]
    },
]