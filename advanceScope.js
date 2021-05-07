const myAlert = () => {
    const x = "Help! I think I found a clue!";
    const alerter = () => {
      console.log(x);
    };
    alerter();
  };
//   alerter() Not accessible Since Scope is withing the myAlert
  myAlert()
  