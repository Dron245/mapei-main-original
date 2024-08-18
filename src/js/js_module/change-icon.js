export function changeIconFunc(){
    const input = document.querySelectorAll('.inputs__input')
const img = document.querySelectorAll('.inputs__img')
// const imgHome = document.querySelectorAll('.inputs__img__main')

input.forEach((elem)=>{
  
  elem.onchange = function handleChange(checkbox) {
    for(let i = 0; i <input.length; i++){
        if(input[i].checked == true){
                img[i].style.display = 'block';
        }else{
            img[i].style.display = 'none';
        }
      }
  }

})
}

