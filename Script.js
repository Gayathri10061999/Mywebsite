var xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();
xhr.onload=function(){
  let data=JSON.parse(this.response);
}
console.log(data);