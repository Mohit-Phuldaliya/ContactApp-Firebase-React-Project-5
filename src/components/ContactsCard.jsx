import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
export default function ContactsCard({ contact }) {
  return (
    <div>
      <div
        key={contact.id}
        className="bg-yellow p-2 flex justify-between items-center rounded-lg"
      >
        <div className="flex gap-1">
          <HiOutlineUserCircle className="text-4xl text-orange" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine />
          <IoMdTrash className="text-orange" />
        </div>
      </div>
    </div>
  );
}
