What is web ?
 - it is collection of e-resources connected electronically.
 - Father of Web Tim Berners Lee.

What is W3C ?
 - World wide web consortium.
 - It is organization to maintain web standards.
 - It is founded by Tim Berners Lee.
 - 1st October 1994 at MIT LCS (Massachusetts Institute
   of Technology Laboraory of Compute Science).

What is InterNet ?
 - International Network.
 - Father of internet is Dr Vint Cerf

Type of Networks
	1. PAN	Personal area network	- approx 10m
	2. LAN	Local area network		- approx 100m
	3. WAN	Wide area network
	4. MAN	Metropolitan area network	- approx a city
	5. Intranet
	6. Internet

HTML
 - It standards for Hyper Text Markup Language
 - It is standard markup language used to create web pages.

Fetures of HTML
 - It is highly flexible and simple.
 - HTML is supported on almost every web browser.
 - HTML is user friendly

Disadvantages
 - It can create only static and plain web pages.
 - We need to write a lot of code for making simple page.
 - Security fetures of HTML are not good.

History
 - 1989		GML		Generalised Markup Language
 - 1991		SGML	Standard	GML
 - 1994		HTML
 - 2008		HTML 5
 - 2016		HTML 5.1

HTML is completely enclosed in tags.
What is tag?
 - Text placed between '<' and '>' is called as a tag
	Eg	<html>
		<head>
		<body>
		...

Tags are classified into two types
	1. Paired Tags
	2. Non-paired Tags

Paired tags
 - The tags that have both opening and
   closing tags are called as paired tags
   Eg
		<html>
			...
			...
			...
		</html>

		<body>
			...
			...
			...
		</body>

		Note:- the closing tags start with '/'

Non-paired tags
 - The tags that have only opening tag but no closing tags
   are called as Non-paired tags.
 - These are also called as
	- Singular tags
	- Self closed tags
	- Empty tags
	- Forcefully closed tags
	...
	Eg	<br>	or 		<br/>	Break tag	(line break)
		<hr>	or		<hr/>	Hoeizontal rule (Hoeizontal Line)
		<img>	or		<img/>	image tag
		...

Structure of HTML
<html>
	<head>
		<title>...</title>
	</head>

	<body>
		...
		...
		...
	</body>
</html>

Note:- HTML is case insensitive
	means 'A' and 'a' are same

Comment:-
 - Comment provide additional information about
   that code.
 - Comments are not displayed on the web page.
 - <!-- This is comment -->

Working with HTML
 - Open any text editor Eg	notepad, notepad++, sublime text, atom,...etc
 - Save the file with any name and extension '.html' or '.htm'
	Eg	index.html
 - Run (open) above file in any web browser Eg	GC, MFF, MS IE, MS edge, opera, safari, etc

***index.html***
<html>
	<hEad>
		<title>My first web page</title>
	</Head>
	<body>
		Hello World
		<!-- This is comment-->
	</body>
</html>

<!doctype html>
 - it is used to tell browser that < > are tags

Sections in HTML
	1. Head section
	2. Body section

1. Head Section
	- This section contians root element as <head> tag
	- <head> is a paired tag
	- this section contains following tags
		i) <title>		Document Title
		ii)<link/>		Link external document
		iii)<meta/>		Meta information
		iv)<style>		Used for styles
		v) <script>		Used to provide script

i) <title>
	<html>
		<Head>
			<title>My First Web Page</title>
		</head>
		<body>
			<!-- This is comment -->
			Hello World
		</bodY>
	</html>

ii)<link/>
	Attributes		href, rel, type
	Case Study Displaying Favicons
	Favicon :- it a graphical image associated with title of web page
				its size should be 16 x 16 px or 32 x 32 px

***linkeg.html***
<!doctype html>
<html>
	<head>
		<title>Link tag example</title>
		<!--<link href = "./roundedp.png" type = "image/icon" rel = icon>
		<link href = "giphy.gif" type = "image/icon" rel = icon>
		<link type = "image/icon" rel = icon href = "data:image/png;base64,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" >
		<link href = "file:///C:\Users\Pranit\Pictures\Jellyfish.jpg" type = "image/icon" rel = icon>-->
		<link href = "../circularp.png" type = "image/icon" rel = icon>
	</head>
	<body>
	Welcome to favicon example
	</body>
</html>

Paths
	i) Relative path
	ii)Absolute path
	   Complete path
	   full path

<meta/>
 - Metadata	is data about data.
 - this tag provides metadata about html document.
 - Metadata is not displayed on the web page but it
   can be machine parsable (understandable).
 - meta attributes are
	i) meta keywords
	ii)meta description
	iii)meta auther
	iv)meta title
	v) meta charset
	vi)meta viewport
 - usually meta tag helps to improve SEO.

<!doctype html>
<html>
	<head>
		<meta keywords = ""/>
		<meta description = ""/>
		<meta auther = ""/>
		<meta title = ""/>
		<meta charset = ""/>
		<meta viewport = ""/>
	</head>

</html>

VSCode -> IDE
https://code.visualstudio.com/#alt-downloads

iv) <style>
	- it is used to apply styles to html documents
	- in general internal css

<!DOCTYPE html>
<html>
    <head>
        <title>My First style</title>
        <style>
            h1{
                color: gray;
            }
            button{
                background-color: orange;
                color: green;
                border-radius: 5px 0px;
            }
                background-color: bl
            body{ack;
            }col
            h3{
                text-shadow: 0px 0px 5px red;
                font-family:  Kunstler Script;
                font-size: 120px;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to styling</h1>
        <h3>Pranit</h3>
        <h3>Good evening</h3>
        <button>Click Me</button>
    </body>
</html>

<script>
 - it is used to apply script to html page
 - attributes (1) type, language
 - attributes (2) src


 ***.html***
<!doctype html>
<html>
	<head>
		<title> Scripting </title>
		<script type="text/javascript" language = "javascript">
			function myalert()
			{
				alert("Button clicked")
			}
		</script>
		<script src = "script.js"></script>
	</head>

	<body>
		<h1>This is script example</h1>
		<button onclick = "myalert()" >Click me</button>
		<br>
		<button onclick = "logout()"> Logout </button>
	</body>
</html>

***.js***
function logout(){
	alert("Logout")
}

Class Work
Create two different web pages
	- For Hospital
	- 3* Party hall

	i) Provide a banner
	ii)Provide description
	iii)provide favicons
	iv)Provide buttons
	v) Colorfull buttons
	vi)Change fonts
