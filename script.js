const submit_btn = document.getElementById("submit_btn");
const email_input = document.getElementById("email_input");
const error = document.getElementById("error");
const input_part_flex = document.querySelector(".input_part_flex");
const isValidEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

email_input.addEventListener("change", () => {
  submit_btn.disabled = false;
});

submit_btn.addEventListener("click", () => {
  const validCheck = isValidEmail(email_input.value);
  if (validCheck === false) {
    error.innerHTML = `   <p class="error_name">Please provide a valid email</p>`;

    input_part_flex.classList.add("error-border");
    submit_btn.innerHTML = ` <img src="./images/icon-error.svg" alt="" srcset="" />`;
  }
  email_input.value = "";
  setTimeout(() => {
    submit_btn.innerHTML = ` <img src="./images/icon-arrow.svg" alt="" srcset="" />`;
    error.innerHTML = "";
    input_part_flex.classList.add("");
  }, 3000);
});
