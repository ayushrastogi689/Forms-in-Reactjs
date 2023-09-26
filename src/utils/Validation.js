import { ERROR_MESSAGES } from "./messages";

export const validateForm = (formData) => {
  const errors = {};

  if (!nameValidation(formData.fullname)) {
    errors.fullname = ERROR_MESSAGES.INVALID_FULLNAME;
  }

  if (!emailValidation(formData.email)) {
    errors.email = ERROR_MESSAGES.INVALID_EMAIL;
  }

  if (!formData.state) {
    errors.state = ERROR_MESSAGES.STATE_NOT_SELECTED;
  }

  if (!formData.preferredTime) {
    errors.preferredTime = ERROR_MESSAGES.PREFFERED_TIME_NOT_SELECTED;
  }

  if (!formData.terms) {
    errors.terms = ERROR_MESSAGES.TC_NOT_ACCEPTED;
  }

  return errors;
};

export const nameValidation = (fullname) => {
  return fullname.length > 3 && fullname.length < 30;
};

export const emailValidation = (email) => {
  return (
    /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,4}$/.test(email) && email.length > 5
  );
};
