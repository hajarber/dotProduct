let Vect = [[3, 1, 4],[7, 0, 1],[0, 0, 0],[3, 4, 6]]
// Function that returns "dot product" of two vectors:
function dot_product(v1, v2){
    let product = 0;
    for(let i = 0; i < v1.length; i++){
        product += v1[i] * v2[i]
      }
    return product
  }
// Orthogonal vectors :
  for(let i = 0; i < Vect.length; i++){
    for(let j = i + 1; j < Vect.length; j++){
      if(dot_product(Vect[i], Vect[j]) === 0){
          console.log(`${Vect[i]} and ${Vect[j]} are orthogonal `)
      }
    }
  }