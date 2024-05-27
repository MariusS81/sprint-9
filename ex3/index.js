function letterCount(sir, litera) {
    let sirLower = sir.toLowerCase();
    let literaLower = litera.toLowerCase();
    let count = 0;
    for (let i = 0; i < sirLower.length; i++) {
    if (sirLower[i] === literaLower) {
    count++;
    }
    }
   
    return count;
   }
   
   console.log(letterCount("Îmi place programarea", "a"));
   console.log(letterCount("Vreau sa lucrez în IT", "r"));