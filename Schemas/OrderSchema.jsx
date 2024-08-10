import * as Yup from 'yup';

export const OrderSchema = Yup.object().shape({
    name:Yup.string().required("Name is required"),
    email:Yup.string().email('Invalid email address').required("Email is required"),
    contact:Yup.number().required("Contact number is required"),
    date:Yup.date().required("Date is required"),
    copies:Yup.number().min(1, "Atleast one copy is required").required("Book copy/copies is required"),
    bookname:Yup.string().required("Book Name is required")
})
    
