import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./SearchBar.module.css";
import * as Yup from "yup";

export default function SearchBar({ onSubmit }) {
  const UserSchema = Yup.object().shape({
    topic: Yup.string()
      .min(1, "Minimum 1 letters")
      .required("This field is required"),
  });
  return (
    <div className={css.container}>
      <Formik
        initialValues={{ topic: "" }}
        validationSchema={UserSchema}
        onSubmit={(values, actions) => {
          onSubmit(values.topic);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            placeholder="Search images and photos"
            name="topic"
          />
          <ErrorMessage
            name="topic"
            component="div"
            className="error-message"
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}
