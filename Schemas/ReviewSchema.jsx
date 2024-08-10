import * as Yup from 'yup';

export const ReviewSchema = Yup.object().shape({
    name:Yup.string().required("Name is required"),
    email:Yup.string().email('Invalid email address').required("Email is required"),
    review:Yup.string().min(5, 'Review must be greater than 5 characters').required("Review is required"),
    contact:Yup.number().optional("Contact number is optional"),
    profession:Yup.string().optional("Profession is optional")
})
    
