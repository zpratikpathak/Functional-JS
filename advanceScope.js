// const myAlert = () => {
//     const x = "Help! I think I found a clue!";
//     const alerter = () => {
//       console.log(x);
//     };
//     alerter();
//   };
// //   alerter() Not accessible Since Scope is withing the myAlert
//   myAlert()
  
  const myAlert = () => {
    const x = "Help! I think I found a clue!";
    const alerter = ()=>{
      console.log(x);
    };
  
    setTimeout(alerter, 1000) // Asyncronous function, executed after logging
    console.log('what happens first? this log or the alert?')
  };
  myAlert()
// what happens first? this log or the alert?
// Help! I think I found a clue!