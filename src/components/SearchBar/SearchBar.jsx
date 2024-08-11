import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  return (
    <div className={css.container}>
      <Formik
        initialValues={{ input: ""}}
        onSubmit={(values, actions) => {
          onSubmit(values.topic);
          actions.resetForm()
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            placeholder="Search images and photos"
            name="topic"
            value={values.topic}
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
