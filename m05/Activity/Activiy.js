function login(userName, password) {
    //Check if the entered credentials are strings
    if (typeof userName === "string" && typeof password === "string") {

    //Condition for credentials
      if (userName.length >= 8 && password.length >= 8)
      {
        console.log("Login successful");
      }
      else if (userName.length < 8)
      {
        console.log("Username is too short");
      }
      else if (password.length < 8)
      {
        console.log("Password is too short");
      }
      else
      {
        console.log("Credentials are too short");
      }
    } else {
        //If the entered credentials is not a string
      console.log("Invalid input");
    }
  }

  login('TheDream', 'hakdoghakdigididog')
