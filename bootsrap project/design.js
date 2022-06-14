$('document').ready(function(){
  $(".loader").hide()
})
$(".loader").show()
    var settings = {
  "url": "https://newsapi.org/v2/everything?q=car&from=2022-06-13&sortBy=popularity&apiKey=8e3900e379694478b673afc93160af8f",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response.articles);
 var data=response.articles;
 $(".loader").hide()
$.map(data,function(post,i)
{
 $('.result').append(
`
<div class="card" style="width: 14rem; float: right; margin-left:10px; font-size:20px; height : 550px" >
<img src=${post.urlToImage} class="card-img-top" alt="" />
<div class="card-body">
  <h5 class="card-title" >${post.author}</h5>
  <h6 class="card-title" >${post.description}</h6>
  <h6 class="card-title" >${post.publishedAt}</h6>
  
  <p class="card-text" style="font-size:14px;>Some quick example text to build on the card title and make up the bulk of the card's4content.</p>
<button  href=${post.url} class="btn btn-warning">view details</button>
</div>
</div>
`
 )

})});




$("#apple").click(function(){
  $(".result").html("")
  var settings = {
    "url": "https://newsapi.org/v2/everything?q=apple&from=2022-06-13&sortBy=popularity&apiKey=8e3900e379694478b673afc93160af8f",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response.articles);
   var data=response.articles;
    
  $.map(data,function(post,i)
  {
   $('.result').append(
  `
  <div class="card" style="width: 14rem; float: right; margin-left:10px; font-size:20px; height : 550px" >
  <img src=${post.urlToImage} class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title" >${post.author}</h5>
    <h6 class="card-title" >${post.description}</h6>
    <h6 class="card-title" >${post.publishedAt}</h6>
    
    <p class="card-text" style="font-size:14px;>Some quick example text to build on the card title and make up the bulk of the card's4content.</p>
    <button  href=${post.url} class="btn btn-warning">view details</button>
  </div>
  </div>
  `
   )
  
  })});
})

// 8e3900e379694478b673afc93160af8f




$("#searchbtn").click(function(){
  var search = $("#search").val() ;
  $(".result").html("")
  var settings = {
    "url": `https://newsapi.org/v2/everything?q=${search}&from=2022-06-13&sortBy=popularity&apiKey=8e3900e379694478b673afc93160af8f`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response.articles);
   var data=response.articles;
    
  $.map(data,function(post,i)
  {
   $('.result').append(
  `
  
  <div class="card" style="width: 14rem; float: right; margin-left:10px; font-size:20px; height : 550px" >
  <img src=${post.urlToImage} class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title" >${post.author}</h5>
    <h6 class="card-title" >${post.description}</h6>
    <h6 class="card-title" >${post.publishedAt}</h6>
    
    <p class="card-text" style="font-size:14px;>Some quick example text to build on the card title and make up the bulk of the card's4content.</p>
    <button class="btn btn-lg btn-warning"  href=${post.url} class="btn btn-warning">view details</button>

  </div>
  </div>
  `
   )
  
  })});
})
