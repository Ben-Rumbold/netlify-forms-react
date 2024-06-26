import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <form
        name="contact-v1"
        method="post"
        onSubmit="submit"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact-v1" />
        <div>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" />
        </div>

        <div>
          <label>
            Comments?
            <textarea name="comments" cols="30" rows="10"></textarea>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     email: "",
//     comments: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Basic form validation
//     const errors = {};
//     if (!formData.firstName.trim()) {
//       errors.firstName = "First Name is required";
//     }
//     if (!formData.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!isValidEmail(formData.email.trim())) {
//       errors.email = "Invalid email format";
//     }

//     if (Object.keys(errors).length > 0) {
//       setErrors(errors);
//     }
//   };

//   const isValidEmail = (email) => {
//     // Basic email validation regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   return (
//     <div>
//       <form
//         name="contact-v1"
//         method="POST"
//         onSubmit={handleSubmit}
//         data-netlify="true"
//         netlify-honeypot="bot-field"
//       >
//         <input type="hidden" name="form-name" value="contact-v1" />
//         <div>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={formData.firstName}
//               onChange={handleChange}
//             />
//             {errors.firstName && (
//               <span className="error">{errors.firstName}</span>
//             )}
//           </label>
//         </div>

//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>

//         <div>
//           <label>Comments?</label>
//           <textarea
//             name="comments"
//             cols="30"
//             rows="10"
//             value={formData.comments}
//             onChange={handleChange}
//           ></textarea>
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
