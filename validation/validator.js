function Validator(options) {
  const formElement = document.querySelector(options.form);

  function validate(selector, message) {
    const messageElement = document.querySelector(selector).closest('.form-group').querySelector('.form-message');
    if (messageElement && message) {
      messageElement.innerText = message;
    } else {
      messageElement.innerText = '';
    }
  }

  if (formElement) {
    options.rules.forEach(function (rule) {
      const inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        // Event
        inputElement.onblur = function() {
          const message = rule.test(this.value);

          validate(rule.selector, message);
        }

        inputElement.oninput = function() {
          const message = rule.test(this.value);

          validate(rule.selector, message);
        }
      }
    });
  }
}

// Rules define
Validator.isRequired = function (selector) {
  return {
    selector,
    test: function (value) {
      return value.trim() ? undefined : 'Please input the value';
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector,
    test: function (value) {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) ? undefined : 'Please input the correct email!'
    },
  };
};
