navbarcode = `<b><a href="./index.html">ROBOKITS</a></b> &nbsp &nbsp
<a href="./what_we_do.html">what we do</a> &nbsp &nbsp
<div class="dropdown">
  <a href="./see_the_kits.html">see the kits</a>
  <div class="dropdown-content">
  <a href="./see_the_kits.html">kit 1</a>
  <a href="./see_the_kits_placeholder.html">kit 2</a>
  <a href="./see_the_kits_placeholder.html">kit 3</a>
  </div>
</div> &nbsp &nbsp
<a href="./contact_us.html">contact us</a> &nbsp &nbsp
<a href="./donate.html">donate</a>`;
window.onload = function() {
  document.getElementById("navbar").innerHTML = navbarcode;
}