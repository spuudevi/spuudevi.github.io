<?php

if($_REQUEST) {
   
require './bat/class.phpmailer.php';
require './bat/class.pop3.php';
require './bat/class.smtp.php';
	$owner_email = "spuu.devi@gmail.com";//$_REQUEST["owner_email"];
	
	$headers = 'From:' . $_REQUEST["email"];
	$subject = 'A message from your site visitor ' . $_REQUEST["name"];
	$messageBody = "";
	
	if($_REQUEST['name']!='nope'){
		$messageBody .= '<p>Visitor: ' . $_REQUEST["name"] . '</p>' . "\n";
		$messageBody .= '<br>' . "\n";
	}
	if($_REQUEST['email']!='nope'){
		$messageBody .= '<p>Email Address: ' . $_REQUEST['email'] . '</p>' . "\n";
		$messageBody .= '<br>' . "\n";
	}else{
		$headers = '';
	}
	
	
	
try {
	$mail = new PHPMailer(true); //New instance, with exceptions enabled

	//$body             = file_get_contents('contents.html');
        $body = $messageBody;
	$body             = preg_replace('/\\\\/','', $body); //Strip backslashes

	$mail->IsSMTP();
$mail->SMTPAuth   = true;                  // enable SMTP authentication
$mail->SMTPSecure = "ssl";                 // sets the prefix to the servier
$mail->Host       = "smtp.gmail.com";      // sets GMAIL as the SMTP server
$mail->Port       = 465;                   // set the SMTP port

$mail->Username   = "spuu.devi@gmail.com";  // GMAIL username
$mail->Password   = "Prt130886";            // GMAIL password

$mail->From       = $_REQUEST['email'] ;
$mail->FromName   = $_REQUEST['name'] ;
$mail->Subject    = "This is the subject";
$mail->AltBody    = "This is the body when user views in plain text format"; //Text Body
$mail->WordWrap   = 50; // set word wrap

$mail->MsgHTML($body);

$mail->AddReplyTo($_REQUEST['email'],$_REQUEST['name']);
$mail->AddAddress("spuu.devi@gmail.com","spu");


	$mail->IsHTML(true); // send as HTML

	$mail->Send();
	echo 'Message has been sent.';
} catch (phpmailerException $e) {
	echo $e->errorMessage();
}
}
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Spoorthy Devineni</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="css/freelancer.css" rel="stylesheet" type="text/css">

    <!-- Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

    <!-- IE8 support for HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top" class="index">

    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#page-top">Spoorthy Devineni</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li class="page-scroll">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#about">About</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

    <header>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
<!--                    <img class="img-responsive" src="img/spu.png" alt="">-->
                    <div class="intro-text">
                        <span class="name">Spoorthy Devineni</span>
                        <hr class="star-light">
                        <span class="skills">Web Developer - PHP Developer - OOP Programmer - User Experience Designer</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Portfolio</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 portfolio-item">
                    <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <p>Sorting</p>
                     <img src="img/portfolio/cabin2.jpg" class="img-responsive" alt="" />
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item">
                    <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <p>Ebook</p>
                        <img src="img/portfolio/cake2.jpg" class="img-responsive" alt="" />
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item">
                    <a href="#portfolioModal3" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <p>Quiz</p>
                        <img src="img/portfolio/circus2.jpg" class="img-responsive" alt="" />
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item">
                    <a href="#portfolioModal4" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <p>Reports</p>
                        <img src="img/portfolio/game2.jpg" class="img-responsive" alt="" />
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item">
                    <a href="#portfolioModal5" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <p>Shop</p>
                        <img src="img/portfolio/safe3.jpg" class="img-responsive" alt="" />
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item">
                    <a href="#portfolioModal6" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <p>CSV</p>
                        <img src="img/portfolio/csv.png" class="img-responsive" alt="" />
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item">
                    <a href="#portfolioModal7" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <p>JS</p>
                     <img src="img/portfolio/js.jpeg" class="img-responsive" alt="" />
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item">
                    <a href="#portfolioModal8" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <p>Mariano Foundation</p>
                     <img src="img/portfolio/marianofoundation.png" class="img-responsive" alt="" />
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item">
                    <a href="#portfolioModal9" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <p>Flip EBook</p>
                     <img src="img/portfolio/flipebook.png" class="img-responsive" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="success" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>About</h2>
                    <hr class="star-light">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-lg-offset-2">
<!--                    <p>Hello, 

I know you probably have two questions; Does the prospective employee have skills? Will i be charged a lot, and get over budgeted? Thankfully, I am a honest, professional, skilled programmer who can design good web applications, in the domains of design, functionality, css, html, javascript, php.

I wont make tall claims, like others who are telling they are the greatest programmers and can do rocket science, but tell you that I, who am a problem solver, will get the job done, and depending on task, take more time if i have to. But, you dont have to worry about gettting charged more/over budgeted because I charge per page no matter how many hours i put into it. 

While finishing the page 100% to your satisfaction, I will even fix all bugs assigned and only then is the page done.

Finally,  I am a thorough professional who loves to solve problems, read novels, garden, run :). If you would like to talk to me please call. I would be more than happy to build you beautiful websites. 
</p>-->
                    <p>I do highly OOP with modular easy to read and maintain. I take my coding very seriously, 
                        and have practiced more than just good development over the years. I have also created my own design patterns
                        and pioneered techniques that make my code patentable. Implemented check box,select box,text box filters with sortable header in table and dynamic columns that export CSV. 
                       
                    </p>
                    
                </div>
                <div class="col-lg-4">
                    <p>My knowledge of UX and UI design stems from my deep understanding of intuitive and simple information design.
                     I have a complete understanding of backbone routes,collection,views,models,events.</p>
                </div>
                <div class="col-lg-8 col-lg-offset-2 text-center">
<!--                    <a href="#" class="btn btn-lg btn-outline">
                        <i class="fa fa-download"></i> Download Theme
                    </a>-->
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Contact Me</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <form role="form" >
                        <div class="row">
                            <div class="form-group col-xs-12 floating-label-form-group">
                                <label for="name">Name</label>
                                <input class="form-control" type="text" name="name" placeholder="Name">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-xs-12 floating-label-form-group">
                                <label for="email">Email Address</label>
                                <input class="form-control" type="email" name="email" placeholder="Email Address">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-xs-12 floating-label-form-group">
                                <label for="message">Message</label>
                                <textarea placeholder="Message" class="form-control" rows="5"></textarea>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="form-group col-xs-12">
                                <button type="submit" class="btn btn-lg btn-success">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="text-center">
        <div class="footer-above">
            <div class="container">
                <div class="row">
                    <div class="footer-col col-md-4">
                        <h3>Location</h3>
                        <p>16 Lindencrest Dr
                            <br>Danbury, CT 06811</p>
                    </div>
                    <div class="footer-col col-md-4">
                        <h3>Around the Web</h3>
                        <ul class="list-inline">
                            <li><a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-facebook"></i></a>
                            </li>
                            <li><a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-google-plus"></i></a>
                            </li>
                            <li><a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-twitter"></i></a>
                            </li>
                            <li><a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-linkedin"></i></a>
                            </li>
                            <li><a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-dribbble"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-col col-md-4">
                        <h3>Skills</h3>
<!--                        <p>Freelance is a free to use, open source Bootstrap theme created by <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>-->
<ul> 
    <li>HTML 5</li>
    <li>CSS 3</li>
    <li>Javascript/jQuery</li>
    <li>AJAX</li>
    <li>PHP 5 with OOP</li>
    <li>Backbone JS</li>
    <li>CodeIgniter</li>
    <li>Zend MVC Framework for PHP</li>
</ul>                    </div>
                </div>
            </div>
        </div>
        <div class="footer-below">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        Copyright &copy; 2014 - Spoorthy Devineni
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div class="scroll-top page-scroll visible-xs visble-sm">
        <a class="btn btn-primary" href="#page-top">
            <i class="fa fa-chevron-up"></i>
        </a>
    </div>

    <!-- Portfolio Modals -->
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Sorting</h2>
                            <hr class="star-primary">
<!--                            <img src="img/portfolio/cabin.png" class="img-responsive img-centered" alt="">-->
                            <p> This is a single page application using js objects and classes. It has the pagination, filtering and the page is so dynamic. </p>
<!--                                <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
                            <ul class="list-inline item-details">
                                <li>Client: <strong><a href="http://startbootstrap.com">Start Bootstrap</a></strong>
                                </li>
                                <li>Date: <strong><a href="http://startbootstrap.com">April 2014</a></strong>
                                </li>
                                <li>Service: <strong><a href="http://startbootstrap.com">Web Development</a></strong>
                                </li>
                            </ul>-->
<iframe width="1000px" height="800px" left=" 120px" src="https://googledrive.com/host/0Bz-3SlNGlz3nZ2EwZTdULU9za0E/sort.html"></iframe>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Ebook</h2>
                            <hr class="star-primary"><!--
                            <img src="img/portfolio/cake.png" class="img-responsive img-centered" alt="">
-->                            <p> This is based on Backbone.js.This reads xml and loads different html files based on book id. Book is a collection and pages are models in this book built for front end.</p><!--
                            <ul class="list-inline item-details">
                                <li>Client: <strong><a href="http://startbootstrap.com">Start Bootstrap</a></strong>
                                </li>
                                <li>Date: <strong><a href="http://startbootstrap.com">April 2014</a></strong>
                                </li>
                                <li>Service: <strong><a href="http://startbootstrap.com">Web Development</a></strong>
                                </li>
                            </ul>-->
<iframe width="1000px" height="1200px" src="https://googledrive.com/host/0Bz-3SlNGlz3nU0ZiNVh6XzRYZVU/dogmvc.html?bookid=book1"></iframe>
<iframe width="1000px" height="1200px" src="https://googledrive.com/host/0Bz-3SlNGlz3nU0ZiNVh6XzRYZVU/dogmvc.html?bookid=book2"></iframe>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Quiz</h2>
                            <hr class="star-primary">
<!--                            <img src="img/portfolio/circus.png" class="img-responsive img-centered" alt="">-->
                            <p>This is very dynamic and one of the best programming I had done.You can even add notes to pages as you browse through questions. It was built with Backbone as a Single Page Application. It is collection of questions with question model. Notes also has collection and model. It is a representation of real world quiz through objects in programming. Json is the datasource for questions, notes.  </p>
<!--                            <ul class="list-inline item-details">
                                <li>Client: <strong><a href="http://startbootstrap.com">Start Bootstrap</a></strong>
                                </li>
                                <li>Date: <strong><a href="http://startbootstrap.com">April 2014</a></strong>
                                </li>
                                <li>Service: <strong><a href="http://startbootstrap.com">Web Development</a></strong>
                                </li>
                            </ul>-->
<iframe width="1000px" height="800px" left=" 120px" src="https://googledrive.com/host/0Bz-3SlNGlz3ncW5wWEFxZkNNaWs/quiz.html"></iframe>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Reports</h2>
                            <hr class="star-primary">
<!--                            <img src="img/portfolio/game.png" class="img-responsive img-centered" alt="">-->
                            <p>I have built excel reports, pie charts, line, area and many graphs with complicated data from DB. There are even real time climate, data, stats monitoring apps that we built. </p>
<!--                            <ul class="list-inline item-details">
                                <li>Client: <strong><a href="http://startbootstrap.com">Start Bootstrap</a></strong>
                                </li>
                                <li>Date: <strong><a href="http://startbootstrap.com">April 2014</a></strong>
                                </li>
                                <li>Service: <strong><a href="http://startbootstrap.com">Web Development</a></strong>
                                </li>
                            </ul>-->
<iframe width="800px" height="500px" src="https://googledrive.com/host/0Bz-3SlNGlz3ncDhaR0hDeHdHNHc/examples/line-basic/index.htm"></iframe>
<iframe width="800px" height="500px" src="https://googledrive.com/host/0Bz-3SlNGlz3ncDhaR0hDeHdHNHc/examples/area-basic/index.htm"></iframe>
<iframe width="800px" height="500px" src="https://googledrive.com/host/0Bz-3SlNGlz3ncDhaR0hDeHdHNHc/examples/bar-basic/index.htm"></iframe>
<iframe width="800px" height="500px" src="https://googledrive.com/host/0Bz-3SlNGlz3ncDhaR0hDeHdHNHc/examples/bar-stacked/index.htm"></iframe>
<iframe width="800px" height="500px" src="https://googledrive.com/host/0Bz-3SlNGlz3ncDhaR0hDeHdHNHc/examples/columnrange/index.htm"></iframe>
<iframe width="800px" height="500px" src="https://googledrive.com/host/0Bz-3SlNGlz3ncDhaR0hDeHdHNHc/examples/pie-basic/index.htm"></iframe>
<iframe width="800px" height="500px" src="https://googledrive.com/host/0Bz-3SlNGlz3ncDhaR0hDeHdHNHc/examples/pie-drilldown/index.htm"></iframe>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Shop</h2>
                            <hr class="star-primary">
<!--                            <img src="img/portfolio/safe.png" class="img-responsive img-centered" alt="">-->
                            <p>This is a CRUD application. It also uses backbone.</p>
<!--                            <ul class="list-inline item-details">
                                <li>Client: <strong><a href="http://startbootstrap.com">Start Bootstrap</a></strong>
                                </li>
                                <li>Date: <strong><a href="http://startbootstrap.com">April 2014</a></strong>
                                </li>
                                <li>Service: <strong><a href="http://startbootstrap.com">Web Development</a></strong>
                                </li>
                            </ul>-->
<iframe width="1000px" height="1200px" src="https://googledrive.com/host/0Bz-3SlNGlz3nWjJ2OGNjamZRVDQ/index.html"></iframe>
<iframe width="1000px" height="1200px" src="https://googledrive.com/host/0Bz-3SlNGlz3nU0ZiNVh6XzRYZVU/pchipotle.html?bookid=book4"></iframe>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="portfolio-modal modal fade" id="portfolioModal7" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>High usage of javascript</h2>
                            <hr class="star-primary">
<!--                            <img src="img/portfolio/submarine.png" class="img-responsive img-centered" alt="">-->
                            <p> Developed filteration on Grades using classes, objects , reusable code in JS.Developed JS libraries that can draw any kind of data. If we hit the student name then we hav the table on other page using JS library.</p>
<!--                            <ul class="list-inline item-details">
                                <li>Client: <strong><a href="http://startbootstrap.com">Start Bootstrap</a></strong>
                                </li>
                                <li>Date: <strong><a href="http://startbootstrap.com">April 2014</a></strong>
                                </li>
                                <li>Service: <strong><a href="http://startbootstrap.com">Web Development</a></strong>
                                </li>
                            </ul>-->
<iframe width="900px" height="1000px" left=" 100px" src="http://spud.net46.net/students_grades/stud_grad.html"></iframe>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>CSV</h2>
                            <hr class="star-primary">
<!--                            <img src="img/portfolio/submarine.png" class="img-responsive img-centered" alt="">-->
                            <p> Press the download button. The file will be downloaded on your system, can see the comma seperated values. Used plugins.</p>
<!--                            <ul class="list-inline item-details">
                                <li>Client: <strong><a href="http://startbootstrap.com">Start Bootstrap</a></strong>
                                </li>
                                <li>Date: <strong><a href="http://startbootstrap.com">April 2014</a></strong>
                                </li>
                                <li>Service: <strong><a href="http://startbootstrap.com">Web Development</a></strong>
                                </li>
                            </ul>-->
<iframe width="800px" height="500px" left=" 120px" src="http://spud.net46.net/test/table.html"></iframe>

                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="portfolio-modal modal fade" id="portfolioModal8" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Mariano Foundation</h2>
                            <hr class="star-primary">
<!--                            <img src="img/portfolio/submarine.png" class="img-responsive img-centered" alt="">-->
<p>Developed interface to billing systems like paypal. Developed registration pages for all kinds of volunteers to allow potential volunteers register with us and also upload photos of themselves. Also a database system set up to keep these information safe. Developed a contact page that doesnot send info anywhere, connected to our email address so that the users can directly contact us.<a href="http://www.greeneraid.org">Website</a> </p>
<!--                            <ul class="list-inline item-details">
                                <li>Client: <strong><a href="http://startbootstrap.com">Start Bootstrap</a></strong>
                                </li>
                                <li>Date: <strong><a href="http://startbootstrap.com">April 2014</a></strong>
                                </li>
                                <li>Service: <strong><a href="http://startbootstrap.com">Web Development</a></strong>
                                </li>
                            </ul>-->
<!--<iframe width="900px" height="1000px" left=" 120px" src=""></iframe>-->

                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="portfolio-modal modal fade" id="portfolioModal9" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Flip EBook</h2>
                            <hr class="star-primary">
<!--                            <img src="img/portfolio/submarine.png" class="img-responsive img-centered" alt="">-->
                                   <p><a href=" https://29ac4bc244f3db08b7f1f601ccf592b6a9d73e32.googledrive.com/host/0Bz-3SlNGlz3nY0tGNlRTMmphZlE/index.html">Press the Link</a> </p>
<!--                            <ul class="list-inline item-details">
                                <li>Client: <strong><a href="http://startbootstrap.com">Start Bootstrap</a></strong>
                                </li>
                                <li>Date: <strong><a href="http://startbootstrap.com">April 2014</a></strong>
                                </li>
                                <li>Service: <strong><a href="http://startbootstrap.com">Web Development</a></strong>
                                </li>
                            </ul>-->
<!--<iframe width="900px" height="1000px" left=" 120px" src="https://29ac4bc244f3db08b7f1f601ccf592b6a9d73e32.googledrive.com/host/0Bz-3SlNGlz3nY0tGNlRTMmphZlE/index.html"></iframe>-->

                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="js/jquery-1.10.2.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="js/classie.js"></script>
    <script src="js/cbpAnimatedHeader.js"></script>
    <script src="js/freelancer.js"></script>

</body>

</html>

