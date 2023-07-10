import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactsCard from "./components/ContactsCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getContact = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        // console.log(contactsSnapshot);
        const contactList = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        // console.log(contactList);
        setContacts(contactList);
      } catch (error) {}
    };
    getContact();
  }, []);
  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="text-3xl ml-1 text-white absolute" />
            <input
              type="text"
              className="bg-transparent flex-grow pl-9 text-white border-white border rounded-md h-10"
            />
          </div>
          <AiFillPlusCircle
            onClick={onOpen}
            className="text-5xl cursor-pointer text-white"
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.map((contact) => (
            <ContactsCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
    </>
  );
}
