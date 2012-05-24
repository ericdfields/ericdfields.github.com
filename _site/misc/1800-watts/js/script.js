/* Author: Eric D. Fields

*/
         
var counter;          
var $main,$footer,$prevArticles,$currArticles,$nextArticles;  
counter = 5;
$main = $('#main');
$footer = $('#footer');
$footer.append('<button id="x_prev">&larr;</button><button id="x_next">&rarr;</button>');

// $main.prepend('<div id="previous-articles" /><div id="current-article" /><div id="next-articles" />');
// $prevArticles = $('#previous-articles'); 
// $currArticle = $('#current-article');
// $nextArticles = $('#next-articles');

$main.find('article:not(:first-child)').addClass('next')
$main.find('article:first-child').addClass('current');

$('#x_next').live('click',function(){                            
  counter++;
  $main.find('.current').removeClass('current un-prev').addClass('prev').end()
    .find('.next').first().addClass('current').removeClass('next').end();
  $main.append('<article class="next"><header>' + counter + '</header></article>');
})
$('#x_prev').live('click',function(){                            
  $main.find('.current').removeClass('current un-prev').addClass('next').end()
    .find('.prev').last().addClass('current un-prev').removeClass('prev').end();
})