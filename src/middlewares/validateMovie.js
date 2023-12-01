const validateMovie = (req, res, next) => {
    const { title, director, year, color, duration } = req.body;
    const errors = [];
  
    if (title == null || title.length >= 255) {
      errors.push({
        field: "title",
        message:
          title == null
            ? "This field is required"
            : "Should contain less than 255 characters",
      });
    }
  
    if (director == null || director.length >= 255) {
      errors.push({
        field: "director",
        message:
          director == null
            ? "This field is required"
            : "Should contain less than 255 characters",
      });
    }
  
    if (year == null || year.length >= 255) {
      errors.push({
        field: "year",
        message:
          year == null
            ? "This field is required"
            : "Should contain less than 255 characters",
      });
    }
  
    if (color == null || color.length >= 255) {
      errors.push({
        field: "color",
        message:
          color == null
            ? "This field is required"
            : "Should contain less than 255 characters",
      });
    }
  
    if (duration == null || isNaN(duration) || duration <= 0) {
      errors.push({
        field: "duration",
        message:
          duration == null
            ? "This field is required"
            : "Duration should be a positive number",
      });
    }
  
    if (errors.length > 0) {
      return res.status(422).json({ validationErrors: errors });
    } else {
      next();
    }
  };
  module.exports = validateMovie;