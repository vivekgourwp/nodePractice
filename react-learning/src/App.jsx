import { useState } from "react";

function ValidationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({}); // errors store karne ke liye

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors = {};

    if (formData.name.trim() === '') {
      newErrors.name = 'Name required hai!';
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email required hai!';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Valid email dalo!';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // errors dikao
    } else {
      setErrors({});
      alert('Form submit ho gaya! ✅');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Apna naam likho"
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email likho"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidationForm;