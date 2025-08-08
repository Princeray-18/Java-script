function outer(){
    let x = 5
     function inner(){
        console.log(x)
     }
      inner();
}
outer();

