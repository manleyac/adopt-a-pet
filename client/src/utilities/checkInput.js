//function checks if animal type is selected and a valid zipcode was entered

function checkInput(type, zipcode) {
  if (type === "") {
    return { show: true, message: "Please select an animal type" };
  }
  if (zipcode.length === 5) {
    try {
      let zipNumber = Number(zipcode);
      return { show: false, message: "" };
    } catch (error) {
      return { show: true, message: "Please enter a valid zipcode" };
    }
  } else {
    return { show: true, message: "Please enter a valid zipcode" };
  }
}

export default checkInput;
