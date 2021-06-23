<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JQuery Crash Course </title>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <style>
        body{
            font-size: 17px;
            font-family: arial;
            background: #f4f4f4;
            line-height: 1.5em;
        }
        header{
            background: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
            border-bottom: 4px #000 solid;
            margin-bottom: 10px;
        }
        #container{
            width: 90%;
            margin: auto;
            padding: 10px;
        }

    </style>
</head>
<body>
    <header>
        <h1>jquery Crash Course</h1>
    </header>
    
    <div id="container">
        <h1 class="heading1">Heading One</h1>
        <p class="para1">Lorem ipsum dolor sit, 
            consectetur adipisicing elit. 
            Rem fugit quibusdam doloremque ducimus perferendis voluptates, 
            cum blanditiis sed quidem nihil?<span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>Lorem ipsum dolor sit amet.</p>

            <h1 class="heading2">Heading One</h1>
            <p class="para1">Lorem ipsum dolor sit, 
                consectetur adipisicing elit. 
                Rem fugit quibusdam doloremque ducimus perferendis voluptates, 
                cum blanditiis sed quidem nihil?<span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>Lorem ipsum dolor sit amet.</p>

                <ul id="list">
                    <li>List Items</li>
                    <li>List Items</li>
                    <li>List Items</li>
                    <li>List Items</li>
                    <li>List Items</li>
                    <li>List Items</li>
                    <li>List Items</li>
                </ul>

                <input type="button" value="Button 1">
                <input type="button" value="Submit">
                <input type="text">

                <a href="http://google.com">Google</a>
                <a href="http://yahoo.com">Yahoo</a>
    </div>



<script>
//$('h1.heading1').hide();
//$('.heading2').hide();

//$('p span').css('color', 'red');
$('ul#list li:first').css('color', 'red');
$('ul#list li:last').css('color','greeen');
$('ul#list li:even').css('background-color', 'yellow')
$('ul#list:odd').css('background-color','#ccc');
$('ul#list li:nth-child(3n)').css('list-style','none');
$(':Submit').hide();
$('[href]').css('color','red');
$('a[href="http://yahoo.com"]').css('color','green');
</script>





    
</body>
</html>