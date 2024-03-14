import { Formik, Form, Field } from "formik"; //<= , ErrorMessage
// import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  // const TextSchema = Yup.object().shape({
  //   searchText: Yup.string()
  //     .min(3, "Too Short!")
  //     .max(25, "Too Long!")
  //     .required(),
  // });

  return (
    <Formik
      initialValues={{ searchText: "" }}
      onSubmit={(values, actions) => {
        if (values.searchText.length < 3) {
          toast.error("Search text is too short!");
        } else if (values.searchText.length > 25) {
          toast.error("Search text is too long!");
        } else {
          onSubmit(values.searchText);
          actions.resetForm();
        }
      }}
      // validationSchema={TextSchema}
    >
      <Form>
        <Field
          name="searchText"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        {/* <ErrorMessage name="searchText" /> */}
        <button type="submit">Search</button>
        <Toaster />
      </Form>
    </Formik>
  );
}
