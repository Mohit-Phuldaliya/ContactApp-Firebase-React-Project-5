import { Formik, Field, Form } from "formik";
import Modal from "./Modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";

export default function AddAndUpdateContact({
  isOpen,
  onClose,
  isUpdate,
  contact,
}) {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={
            isUpdate
              ? { name: contact.name, email: contact.email }
              : { name: "", email: "" }
          }
          onSubmit={(values) => {
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className=" flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="border h-10" type="text" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="border h-10" type="email" />
            </div>
            <button className="self-end bg-orange px-3 py-1.5 border">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}
