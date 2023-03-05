import * as yup from "yup";

export default yup
  .object({
    title: yup.string().required("Title is required"),
    note: yup.string().required("Note is required"),
  })
  .required();
