<!doctype html>
<html>

<head>

    <meta charset="utf-8">
    <title>Who's funding the big three?</title>
    <meta property="og:image" content="http://isthisjam.com.s3.amazonaws.com/img/bubble-img.png" />
    <!-- 180x110 Image for Linkedin -->
    <meta property="og:image:width" content="180" />
    <meta property="og:image:height" content="110" />
    <meta property="og:image" content="http://isthisjam.com.s3.amazonaws.com/img/bubble-img.png" />
    <!-- 200x200 Image for Facebook -->
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="200" />
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:400,700">

    <script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-44807543-1']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();
    </script>
</head>
<!-- Add feature detection and noscript -->

<style type="text/css">
/*Paradoteo3: It zooms a lot with a nice fx*/
.zoom {
   -webkit-transition: all .3s ease-out;
   -moz-transition: all .3s ease-out;
   -o-transition: all .3s ease-out;
   transition: all .3s ease-out;
}
.zoom:hover {
   -moz-transform: scale(1.6);
   -webkit-transform: scale(1.6);
   -o-transform: scale(1.6);
   transform: scale(1.6);
   -ms-transform: scale(1.6);
filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand',
   M11=2, M12=-0, M21=0, M22=2);}
   
   /* Paradoteo3: It zooms a little bit with a nice fx and it doesn't move the text at left side. It's also useful for buttons, so that they wont be moved.*/
   .zoom2 {
   -webkit-transition: all .3s ease-out;
   -moz-transition: all .3s ease-out;
   -o-transition: all .3s ease-out;
   transition: all .3s ease-out;
}
   .zoom2:hover {
   -moz-transform: scale(1.3);
   -webkit-transform: scale(1.3);
   -o-transform: scale(1.3);
   transform: scale(1.3);
   -ms-transform: scale(1.3);
filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand',
   M11=2, M12=-0, M21=0, M22=2);   
   }
/* Paradoteo3: It zooms a lot with a nice fx and it moves text at left, or there may be collisions with the colored circles/node*/
    .zoom3 {
   -webkit-transition: all .3s ease-out;
   -moz-transition: all .3s ease-out;
   -o-transition: all .3s ease-out;
   transition: all .3s ease-out;
}
.zoom3:hover {
    padding-left: 30px;
   -moz-transform: scale(1.6);
   -webkit-transform: scale(1.6);
   -o-transform: scale(1.6);
   transform: scale(1.6);
   -ms-transform: scale(1.6);
filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand',
   M11=2, M12=-0, M21=0, M22=2);}
    
</style>

<body>
<!-- Paradoteo3: On buttons i put "<p>" inside the "<a>" so that i will put it in zoom2 class. If i put class=zoom2 at <li> it wont work. Same for <a>.-->
    <header role="banner" id="title">
        <h1 class=zoom2>Who's funding the big three?</h1> 
    </header> 
    <nav role="navigation">
        <ul>
            <li><a href="#" role="button" class="pure-button switch" id="all-donations"> <p class=zoom2> All money </p> </a>
            </li>
            <li><a href="#" role="button" class="pure-button switch" id="group-by-money-source"> <p class=zoom2> The public's purse </p> </a>
            </li>
            <li><a href="#" role="button" class="pure-button switch" id="group-by-party"> <p class=zoom2> Split by party </p> </a>
            </li>
            <li><a href="#" role="button" class="pure-button switch" id="group-by-donor-type"> <p class=zoom2> Split by type of donor </p> </a>
            </li>
            <!--Paradoteo3: new split by--> 
            <li><a href="#" role="button" class="pure-button switch" id="group-by-amount"> <p class=zoom2> Split by the amount of donor </p> </a>
            </li>
        </ul>
    </nav>

    <div id="annotations">

        <!-- Initial annotations -->
        <div id="initial-content">
            <h2 class=zoom2>Political donations and funding accepted by the Conservatives, Labour and Liberal Democrats between the 2010 general election and August 2013, when this data was collected.</h2>
            <p class=zoom3 >Each circle represents the total amount donated by a single donor group, funding organisation or individual during that period.</p>
            <p class=zoom3 >Hover over a circle to show further information.</p>

            <p class=zoom3 >Get an immediate overview of how party funding is shaped in Britain today by selecting one of the options at the top of the page.</p>
            <p class=zoom3 >Data is based on all reportable donations over &#163;7500.</p>
            <p class=zoom3 >Data source: <a href="http://www.electoralcommission.org.uk/">The Electoral Commission.</a>
            </p>
        </div>
        <div id="value-scale">
            <div id="f">
                <p class=zoom> &#8212;UK average salary </p>
            </div>
            <div id="a">
                <p class=zoom> <strong>&#163;25k &#8212;</strong> </p>
            </div>
            <div id="b">
                <p class=zoom> <strong>&#163;50k &#8212;</strong> </p>
            </div>
            <div id="c">
                <p class=zoom> <strong>&#163;100k &#8212;</strong> </p>
            </div>
            <div id="d">
                <p class=zoom> <strong>&#163;500k &#8212;</strong> </p>
            </div>
            <div id="e">
                <p class=zoom> <strong>&#163;1m &#8212;</strong> </p>
            </div>
        </div>
        <!-- End initial-->

        <!-- Public or private money annotations -->
        <div id="view-source-type">
            <div id="public-or-private-money"  class="public-private"> 
                <h3 class=zoom2>Public money vs private cash</h3>
                <p class=zoom>Despite general public opposition to more taxpayer money being given to political parties, public funds are already provided to opposition parties in the form of 'short money' from the House of Commons, House of Lords and Scottish Parliament.</p>
                <p class=zoom>The parties also benefit from 'Policy development grants' given by the Electoral Commission.</p>         
            </div>              
<!-- Paradoteo3: I put "<p>" on every "<strong>" so that it can use the class zoom. The "<strong class=zoom>" doesn't work.--> 
            <div id="public-or-private-money-split" class="public-private">
                <div id="private-money">
                    <h5 class=zoom>Private Donations</h5>
                    <p class=zoom > <strong> Total: &#163;89,752,524 </strong> </p>
                    <p class=zoom >Proportion of all donations:</p> 
                    <p class=zoom > <strong> 77% </strong> </p>
                </div>
                <div id="public-money">
                    <h5 class=zoom>Public Funds</h5>
                    <p class=zoom> <strong>Total: &#163;26,579,038 </strong> </p>
                            <p class=zoom>Proportion of all donations: </p>
                                <p class=zoom> <strong> 23% </strong> </p>
                </div>
          </div>
        </div>
        <!-- End public or private money -->
       
        <div id="view-party-type">
            <h3 class=zoom2>Income for each party from private sources.</h3>
            <div id="conservative">
                <h5 class=zoom>Conservative Party</h5>
                <p class=zoom> <strong>Total: &#163;43.7 million 
                    </strong> </p>
                        <p class=zoom>Top 50 donors gave:
                            <strong>&#163;23,329,828</strong>
                            <br>
                            <strong>50%</strong>of the total.</p>
                        <p class=zoom>Top 10 donors gave:
                            <strong>&#163;12,877,989</strong>
                            <br>
                            <strong>27%</strong>of the total</p>
            </div>
            <div id="labour">
                <h5 class=zoom>Labour Party</h5>
                <p class=zoom> <strong>Total: &#163;38.9 million
                    </strong> </p>
                        <p class=zoom>Top 50 donors gave:
                            <strong>&#163;39,196,684</strong>
                            <br>
                            <strong>92%</strong>of the total.</p>
                        <p class=zoom>Top 10 donors gave:
                            <strong>&#163;34,715,877</strong>
                            <br>
                            <strong>81%</strong>of the total</p>
            </div>
            <div id="libdem">
                <h5 class=zoom2>Liberal Democrats</h5>
                <p class=zoom> <strong>Total: &#163;7.1 million </strong> </p>
                    
                        <p class=zoom>Top 50 donors gave:
                            <strong>&#163;6,975,973</strong>
                            <br>
                            <strong>63%</strong>of the total.</p>
                        <p class=zoom>Top 10 donors gave:
                            <strong>&#163;4,823,899.71</strong>
                            <br>
                            <strong>43%</strong>of the total</p>
            </div>
        </div>    
        <div id="view-donor-type">
            <div id="individual">
                <h5 class=zoom>Individuals</h5>
                <p class=zoom> <strong>Total: &#163; 35,191,222
                    </strong> </p>
                        <p class=zoom>Proportion of all donations:
                            <strong>39%</strong>
                        </p>
            </div>
            <div id="company">
                <h5 class=zoom>Companies</h5>
                <p class=zoom> <strong>Total: &#163; 17,052,129
                    </strong> </p>
                        <p class=zoom>Proportion of all donations:
                            <strong>19%</strong>
                        </p>
            </div>
            <div id="union">
                <h5 class=zoom>Trade Unions</h5>
                <p class=zoom> <strong>Total: &#163;31,474,649
                    </strong> </p>
                        <p class=zoom>Proportion of all donations:
                            <strong>35%</strong>
                        </p>
            </div>
            <div id="society">
                <h5 class=zoom2>Societies</h5>
                <p class=zoom2> <strong>Total: &#163;4,550,129
                    </strong> </p>
                        <p class=zoom2>Proportion of all donations:
                            <strong>5%</strong>
                        </p>
            </div>
            <div id="other">
                <h5 class=zoom2>Others</h5>
                <p class=zoom2> <strong>Total: &#163; 1,484,395
                    </strong> </p>
                        <p class=zoom2>Proportion of all donations:
                            <strong>2%</strong>
                        </p>
            </div>
         </div>  
           <!--paradoteo3: The view/appearance of the new split by-->
         <div id="view-amount-type">  
              <div id="amount4">
                 <h2 class=zoom>Amount of donation</h2>
              </div>   
              <div id="amount1">
                  <h5 class=zoom> Up to 50.000 British Pounds </h5>
             </div>
             <div id="amount2">
                 <h5 class=zoom> Up to 350.000 British Pounds </h5>
             </div>
             <div id="amount3">    
                 <h5 class=zoom> Up to 20.000.000 British Pounds </h5>
             </div> 
        </div>       
    </div>

<div id="chart"></div>


    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>
    window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')
    </script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.2.2/d3.v3.min.js" charset="utf-8"></script>
    <script src="chart.js"></script>
</body>

</html>
