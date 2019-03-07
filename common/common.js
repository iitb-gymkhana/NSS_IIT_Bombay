// https://www.w3schools.com/howto/howto_html_include.asp

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName('*');
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute('w3-include-html');
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          // if (this.status == 404) {
          //   elmnt.innerHTML = 'Page not found.';
          // }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute('w3-include-html');
          includeHTML();
        }
      };
      xhttp.open('GET', file, false);
      xhttp.send();

      $(document).ready(function() {
        $('.nav-mobile ul').hide();
        $('.preventDefault').click(function(e) {
          e.preventDefault();
          var $menuItem = $(this).next('ul');
          $menuItem.slideToggle();
          $('.nav-mobile ul')
            .not($menuItem)
            .slideUp();
        });
      });

      return;
    }
  }
}
