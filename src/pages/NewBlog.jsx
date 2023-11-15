import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import useBlogCalls from "../hooks/useBlogCalls";

const NewBlog = () => {
  const { sendBlog } = useBlogCalls();
  const [cat, setCat] = useState([]);
  // console.log(cat);

  const getCat = async () => {
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/api/categories/`
      );
      setCat(data);
      console.log(data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getCat();
  }, []);

  return (
    <div className="container auth-form">
      <Formik
        initialValues={{
          title: "",
          image: "",
          category: "",
          status: "",
          content: "",
        }}
        onSubmit={(values, action) => {
          sendBlog(values);
          action.resetForm();
          action.setSubmitting(false);
          // console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="title" className="form-label fw-bolder mt-1">
              Title*
            </label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              required
            />
            <h3>{errors.title && touched.title && errors.title}</h3>
            <label htmlFor="image" className="form-label fw-bolder">
              Image Url*
            </label>
            <input
              className="form-control"
              type="url"
              name="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
              required
            />
            <h3>{errors.image && touched.image && errors.image}</h3>
            <label htmlFor="content" className="form-label fw-bolder">
              Content*
            </label>{" "}
            <br />
            <Field
              as="textarea"
              className="form-control textarea"
              type="text"
              name="content"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
              required
            />
            <h3>{errors.content && touched.content && errors.content}</h3>
            <label htmlFor="category" className="form-label fw-bolder">
              Categories* (Please choose by clicking.)
            </label>
            <br />
            <Field
              as="select"
              className="form-control "
              name="category"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category}
              role="button"
              required
            >
              <option value="">Please choose</option>
              {cat?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Field>
            <h3>{errors.category && touched.category && errors.category}</h3>
            <label htmlFor="status" className="form-label fw-bolder">
              Status* (Please choose by clicking.)
            </label>
            <br />
            <Field
              as="select"
              className="form-control "
              name="status"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.status}
              required
            >
              <option value="">Please choose</option>
              <option value="d">Draft</option>
              <option value="p">Publish</option>
            </Field>
            <h3>{errors.status && touched.status && errors.status}</h3>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Create New Blog
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewBlog;
