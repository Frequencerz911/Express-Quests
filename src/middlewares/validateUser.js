const validateUser = (req, res, next) => {
    const { firstname, lastname, email } = req.body;
    const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
    const errors = [];
  
    if (firstname == null || firstname.length >= 255) {
      errors.push({
        field: "firstname",
        message:
          firstname == null
            ? "This field is required"
            : "Should contain less than 255 characters",
      });
    }
    if (lastname == null || lastname.length >= 255) {
      errors.push({
        field: "lastname",
        message:
          lastname == null
            ? "This field is required"
            : "Should contain less than 255 characters",
      });
    }
    if (!emailRegex.test(email)) {
      errors.push({ field: "email", message: "Invalid email" });
    }
    if (errors.length > 0) {
      return res.status(422).json({ validationErrors: errors });
    } else {
      next();
    }
  };
  
  module.exports = validateUser;