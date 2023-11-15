import useBlogCalls from "../../hooks/useBlogCalls";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";

const UpdateModal = ({ data, id, getDetailCard }) => {
  const { updateBlog } = useBlogCalls();

  
  const [cat, setCat] = useState([]);
  // console.log(cat);

  const getCat = async () => {
    try {
      const { data } = await axios(`${import.meta.env.VITE_BASE_URL}api/categories/`);
      setCat(data);
      // console.log(data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getCat();
  }, []);

  return (
    <>
      <div
        className="modal fade"
        id="update"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header m-0">
              <h1
                className="modal-title fs-3 text-primary"
                id="exampleModalLabel"
              >
                UPDATE BLOG
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="container mb-4 auth-form">
              <Formik
                enableReinitialize={true}
                initialValues={data}
                onSubmit={(values, action) => {
                  // console.log(values);
                  updateBlog(values);
                  setTimeout(() => {
                    getDetailCard();
                  }, 1000);
                  action.resetForm();
                  action.setSubmitting(false);
                  
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
                    <label
                      htmlFor="title"
                      className="form-label mt-2 fw-bolder"
                    >
                      Title*
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
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
                    />
                    <h3>
                      {errors.content && touched.content && errors.content}
                    </h3>
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
                    >
                      <option value="">Please choose</option>
                      {cat?.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </Field>
                    <h3>
                      {errors.category && touched.category && errors.category}
                    </h3>
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
                    >
                      <option value="">Please choose</option>
                      <option value="d">Draft</option>
                      <option value="p">Publish</option>
                    </Field>
                    <h3>{errors.status && touched.status && errors.status}</h3>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      // onClick={console.log(values)}
                    >
                      UPDATE
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
