import { Formik, Field, Form } from "formik";
import Modal from "./Modal";

export default function AddAndUpdateContact({ isOpen, onClose }) {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          onSubmit={(values) => console.log(values)}
          initialValues={{ name: "", email: "" }}
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
              Add Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}
