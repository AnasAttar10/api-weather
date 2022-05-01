
 /* api key =>  2d13d2cc1fce4006a6f175413212712 */
 /* api =>http://api.weatherapi.com/v1/current.json?key=2d13d2cc1fce4006a6f175413212712&q=London&aqi=yes */
  
 let parent = document.getElementById('parent');

 let city =prompt('Enter city name ') ;

 function render(data){

  let result = `<div><span>${data.location.name}</span><img src="${data.current.condition.icon}" alt=""></div>
                <div><span>cloud : </span><span>${data.current.cloud}</span> </div>
                <div><span>temp_c : </span><span>${data.current.temp_c}</span> </div>
                <div><span>temp_f : </span><span>${data.current.temp_f}</span> </div>
                <div><span>description : </span><span>${data.current.condition.text}</span> </div> 
                <div><span>Time : </span><span>${data.location.localtime}</span> </div>`;

  parent.innerHTML+= result ;
}
function rendererror(){
   let result = `<div><i class="fas fa-angry fa-3x"></i></div>
                 <div>please Enter correct city name </div>` ;
   parent.innerHTML+= result ;
}
 
 function getweather(city){
   fetch('https://api.weatherapi.com/v1/current.json?key=2d13d2cc1fce4006a6f175413212712&q='+city+'&aqi=no')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    render(data);
    })
    .catch(error =>{
      rendererror(); 
      setTimeout(()=>{
        location.reload();
      },3000) ;
    })
}
 
getweather(city);



