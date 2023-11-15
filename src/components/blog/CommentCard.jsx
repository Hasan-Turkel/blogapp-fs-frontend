import { Formik, Form, Field } from "formik";
import useBlogCalls from "../../hooks/useBlogCalls";

const CommentCard = ({id, getDetailCard}) => {

  const { sendComment } = useBlogCalls();

  return <div className="auth-form ">
  <Formik
    initialValues={{
     content:""
    }}
    onSubmit={(values, action) => {
    sendComment({...values, post:id}, id);
    action.resetForm();
    action.setSubmitting(false);
    setTimeout(() => {
    getDetailCard();
}, 1000);
    
      
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
        <button type="submit" className="btn btn-success" disabled={isSubmitting}>
          Add a new comment
        </button>
      </Form>
    )}
  </Formik>
</div>;
};

export default CommentCard;
