import * as yup from 'yup'

export default yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  userName: yup
    .string()
    .min(4, 'Username must be at least 4 characters')
    .matches(/^[a-zA-Z0-9._-]+$/, 'Invalid username')
    .required('Username is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Must contain at least one number')
    .matches(/[@#$&?!]/, 'Must contain at least one special character')
    .required('Password is required'),
})
