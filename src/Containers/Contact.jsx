import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";

export default function Contact() {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
    acceptTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const url =
    "https://discord.com/api/webhooks/1292542314182479934/uQR-kXtzRD9FzZq40Vl_GmKyIdhz_qDkxQ_BKnEYVRQNVEBiHf7A0PIsSemOwXsXt3GK";

  return (
    <div
      id="contact"
      className="flex justify-center items-center min-h-screen p-4"
    >
      <div className="w-full max-w-3xl">
        <h1
          className={
            "mx-auto w-fit font-bold font-playfair text-2xl sm:text-[4rem] mb-6 sm:mb-28"
          }
        >
          Contact Me
        </h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            acceptTerms: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // Prevent default submission and alert the form values
            const username = `${values.firstName} ${values.lastName}`;

            const payload = {
              username: username,
              embeds: [
                {
                  fields: [
                    {
                      name: "Email",
                      value: values.email,
                      inline: true,
                    },
                    {
                      name: "Phone",
                      value: values.phone,
                      inline: true,
                    },
                    {
                      name: "Message",
                      value: values.message,
                    },
                  ],
                },
              ],
            };

            fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            })
              .then((response) => {
                if (response.ok) {
                  Swal.fire({
                    title: "Message sent successfully!",
                    icon: "success",
                  });
                } else {
                  Swal.fire({
                    title: "Failed to send message. Please try again.",
                    icon: "error",
                  });
                }
              })
              .catch((error) => {
                console.error("Error:", error);
                Swal.fire({
                  title: "An error occurred. Please try again.",
                  icon: "error",
                });
              })
              .finally(() => {
                setSubmitting(false);
                resetForm();
              });
          }}
        >
          {({ handleSubmit }) => (
            <Form
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission
                handleSubmit(); // Manually trigger form submission
              }}
            >
              <div className="flex flex-col">
                <label htmlFor="firstName">First Name</label>
                <Field
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="border border-black rounded-lg p-2 mt-1"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="border border-black rounded-lg p-2 mt-1"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="border border-black rounded-lg p-2 mt-1"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">Phone Number</label>
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  className="border border-black rounded-lg p-2 mt-1"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label htmlFor="message">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  className="w-full border border-black rounded-lg p-2 mt-1"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <div className="col-span-1 md:col-span-2 flex items-center space-x-2">
                <Field type="checkbox" name="acceptTerms" id="acceptTerms" />
                <label htmlFor="acceptTerms" className="text-sm">
                  I accept the terms and conditions
                </label>
                <ErrorMessage
                  name="acceptTerms"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#599DFE] font-bold text-white px-6 py-2 rounded-lg mt-4"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
