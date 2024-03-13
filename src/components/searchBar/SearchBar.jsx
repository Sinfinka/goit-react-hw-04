import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function SearchBar({ onSubmit }) {
  const TextSchema = Yup.object().shape({
    searchText: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required(),
  });

  return (
    <Formik
      initialValues={{ searchText: "" }}
      onSubmit={(values, actions) => {
        onSubmit(values.searchText);
        actions.resetForm();
      }}
      validationSchema={TextSchema}
    >
      <Form>
        <Field
          name="searchText"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <ErrorMessage name="searchText" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
