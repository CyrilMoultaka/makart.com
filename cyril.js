// console.log( "hello JS" );
// alert( 'Welcome to Makers' Academy Hello Web' );

function popup() {
  // ouvre une fenetre sans barre d'etat, ni d'ascenceur
  w=open("",'popup','width=400,height=200,toolbar=no,scrollbars=no,resizable=yes');	
  w.document.write("<title>"+document.forms["f_popup"].elements["titre"].value+"</title>");
  w.document.write("<body> Bonjour "+document.forms["f_popup"].elements["nom"].value+"<br><br>");
  w.document.write("Ce popup n'est pas un fichier HTML, ");
  w.document.write("il est écrit directement par la fenêtre appelante");
  w.document.write("</body>");
  w.document.close();
  
  
  $$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#carre']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
