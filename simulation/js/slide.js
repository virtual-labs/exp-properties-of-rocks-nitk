
/*-----------------------------------------------------------------
-----------------------------------------------------------------
----------------------- GLOBAL VARIABLES ------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------*/


// Used to add a numeric id on slide creation to let us target the element later  
var slideIndex = 0;
var slideIndex1 = 1;
// Tells us which slide we are on
var currentSlideIndex = 0;
var currentSlideIndex1 = 1;
// An Array to hold all the slides
var slideArray = [];
var slideArray1 = [];
var selectVariable = null;
var setVariable = null;
var setIndex = null;
var singleMineral = null;
var mineralArray = [];
var sampleArray = ["Sample1","Sample2","Sample3","Sample4","Sample5"];
var img,res,cx,cy,lens,lensId,bImage;
var slideFlag = 0, identified = 0;
var chk1 = 0,chk2 = 0,chk3 = 0,chk4 = 0,chk5 = 0,chk6 = 0,chk7 = 0,chk8 = 0;
var myInt = 0,textInt = 0;


/*-----------------------------------------------------------------
-----------------------------------------------------------------
----------------------- THE TEMPLATE ---------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------*/



// // Template for creating a custom Slide object
// function Slide(title, subtitle, background, link ) {
	// this.title = title;
	// // this.subtitle = subtitle;
	// this.background = background;
	// // this.link = link;
	// // we need an id to target later using getElementById
	// this.id = "slide" + slideIndex;
	// // Add one to the index for the next slide number
	// slideIndex++;
	// // Add this Slide to our array
	// slideArray.push(this);
// }




// Template for creating a custom Slide object
function Slide(title, background) {
	this.title = title;
	// this.subtitle = subtitle;
	this.background = background;
	// this.link = link;
	// we need an id to target later using getElementById
	this.id = "sample" + slideIndex;
	// Add one to the index for the next slide number
	slideIndex++;
	// Add this Slide to our array
	slideArray.push(this);
}

function Slide1(title, background) {
	this.title = title;
	// this.subtitle = subtitle;
	this.background = background;
	// this.link = link;
	// we need an id to target later using getElementById
	this.id = "samplee" + slideIndex1;
	// Add one to the index for the next slide number
	slideIndex1++;
	// Add this Slide to our array
	slideArray1.push(this);
}

/*-----------------------------------------------------------------
-----------------------------------------------------------------
----------------------- SLIDE CREATION ---------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------*/


// Creating our slide objects, you can make as many as you want

var Gabbro = new Slide(
	"Gabbro", 
	// "A show about fighting zombies", 
	"images/Gabbro/gab1.JPG", 
	// "images/Biotite/bio1.JPG", 
	// "http://www.amc.com/shows/the-walking-dead"
);

var Graphic = new Slide(
	"Graphic", 
	// "A show about Sheldon", 
	"images/Graphic/gra1.JPG", 
	// "images/asbestos/asb1.JPG", 
	// "http://www.cbs.com/shows/big_bang_theory/"
);

var Mica = new Slide(
	"Mica", 
	// "A show about loneliness", 
	"images/Mica/mic1.JPG", 
	// "images/serpentine/mic1.JPG",  
	// "http://www.fox.com/the-last-man-on-earth"
);


var Pumice = new Slide(
	"Pumice", 
	// "A show about loneliness", 
	"images/Pumice/pum1.JPG", 
	// "images/galena/gal1.JPG", 
	// "http://www.fox.com/the-last-man-on-earth"
);



var Quartzite = new Slide(
	"Quartzite", 
	// "A show about loneliness", 
	"images/Quartzite/qua1.JPG", 
	// "images/hematite/hem1.JPG",
	// "http://www.fox.com/the-last-man-on-earth"
);




/*-----------------------------------------------------------------
-----------------------------------------------------------------
----------------------- ADD TO WEB PAGE ---------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------*/


function buildSlider(){
	// A variable to hold all our HTML
	var myHTML = "Loading...";
	
	// Go through the Array and add the code to our HTML
	for(var i = 0; i < slideArray.length; i++) {
		
		myHTML += "<div id='" + slideArray[i].id + 
		"' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" + 
		"<div class='slideOverlay'>" + 
		//"<h5>" + slideArray[i].title + "</h5>" +
		// "<h4>" + slideArray[i].subtitle + "</h4>" +
		// "<a href='" + slideArray[i].link + "' target='_blank'>Open Link</a>" +
		"</div>" +
		"</div>";	
		selectVariable = slideArray[i].title;
		
		setVariable = sampleArray[i];
	}
	
	// Print our HTML to the web page
	document.getElementById("mySlider").innerHTML = myHTML;
		
	// Display the first slide
	document.getElementById("sample" + currentSlideIndex).style.left = 0;

}

function buildSlider1(){
	// A variable to hold all our HTML
	var myHTML;
	
	// Go through the Array and add the code to our HTML
	for(var i = 0; i <slideArray1.length; i++) {
	
		myHTML += "<div id='" + slideArray1[i].id + 
		"' class='singleSlide' style='background-image:url(" + slideArray1[i].background + ");'>" + 
		"<div class='slideOverlay'>" + 
		"<h5>" + slideArray1[i].title + "</h5>" +
		// "<h4>" + slideArray[i].subtitle + "</h4>" +
		// "<a href='" + slideArray[i].link + "' target='_blank'>Open Link</a>" +
		"</div>" +
		"</div>";	
		selectVariable = slideArray1[i].title;
		// console.log(selectVariable);
	}
	
	// Print our HTML to the web page
	document.getElementById("mySlider1").innerHTML = myHTML;
		
	// Display the first slide
	document.getElementById("samplee" + currentSlideIndex1).style.left = 0;

}

// Create our slider
buildSlider();





/*-----------------------------------------------------------------
-----------------------------------------------------------------
----------------------- SLIDER CONTROLS ---------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------*/



// Navigates to the previous slide in the list
function prevSlide(){

	// Figure out what the previous slide is
	var nextSlideIndex;
	// If we are at zero go to the last slide in the list
	if (currentSlideIndex === 0 ) {
		nextSlideIndex = slideArray.length - 1;

	} else {
		// Otherwise the next one is this slide minus 1
		nextSlideIndex = currentSlideIndex - 1;

	}	
	
	// Setup the next slide and current slide for animations
	document.getElementById("sample" + nextSlideIndex).style.left = "-100%";
	document.getElementById("sample" + currentSlideIndex).style.left = 0;
	
	// Add the appropriate animation class to the slide
	document.getElementById("sample" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
	document.getElementById("sample" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
	
	selectVariable = slideArray[nextSlideIndex].title;
	setVariable = sampleArray[nextSlideIndex];
	if(simsubscreennum == 1)
	{
		document.getElementById("sampleSelect").value = setVariable;
	}
	
	// Set current slide to the new current slide
	currentSlideIndex = nextSlideIndex;
}


//for single mineral rotation
function prevSlide1(){
	// Figure out what the previous slide is
	var nextSlideIndex;
	// If we are at zero go to the last slide in the list
	if (currentSlideIndex1 === 1 ) {
		nextSlideIndex = mineralArray.length-2;


	} else {
		// Otherwise the next one is this slide minus 1
		nextSlideIndex = currentSlideIndex1 - 1;


	}	
	document.getElementById("zoomImage").src = mineralArray[nextSlideIndex];
	currentSlideIndex1 = nextSlideIndex;
	var lenDiv = document.getElementById("lensId")
	lenDiv.parentNode.removeChild(lenDiv);
	imageZoom("zoomImage", "myresult");
}


// Navigates to the next slide in the list
function nextSlide(){
	// Figure out what the next slide is

	var nextSlideIndex;

	// If we are at the last slide the next one is the first (zero based)
	if (currentSlideIndex === (slideArray.length - 1) ) {
		nextSlideIndex = 0;

	} else {
		// Otherwise the next slide is the current one plus 1
		nextSlideIndex = currentSlideIndex + 1;

	}	
	
	// Setup the next slide and current slide for animations
	document.getElementById("sample" + nextSlideIndex).style.left = "100%";
	document.getElementById("sample" + currentSlideIndex).style.left = 0;
	
	// Add the appropriate animation class to the slide
	document.getElementById("sample" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
	document.getElementById("sample" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");
	
		selectVariable = slideArray[nextSlideIndex].title;
		setVariable = sampleArray[nextSlideIndex];
	if(simsubscreennum == 1)
	{
		document.getElementById("sampleSelect").value = setVariable;
	}
	// Set current slide to the new current slide
	currentSlideIndex = nextSlideIndex;
}

//for single mineral slide next
function nextSlide1(){
	// Figure out what the next slide is
	var nextSlideIndex;
	// If we are at the last slide the next one is the first (zero based)
	if (currentSlideIndex1 === (mineralArray.length-2) ) {
		nextSlideIndex = 1;


	} else {
		// Otherwise the next slide is the current one plus 1
		nextSlideIndex = currentSlideIndex1 + 1;

	}	
	document.getElementById("zoomImage").src = mineralArray[nextSlideIndex];
	// Set current slide to the new current slide
	currentSlideIndex1 = nextSlideIndex;
	var lenDiv = document.getElementById("lensId")
	lenDiv.parentNode.removeChild(lenDiv);
	imageZoom("zoomImage", "myresult");
}


// Next button
function navNext()
{
	for(temp=0;temp<=2;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}
function navPrev()
{
	slideFlag = 1;
	simsubscreennum+=1;
	document.getElementById("canvas"+(simsubscreennum+1)).style.visibility="hidden";
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	magic();
}
function magic()
{
	if(simsubscreennum==1)
	{
		if(slideFlag == 1)
		{
			resetCheckValues();
			clearInterval(myInt);
			clearInterval(textInt);
			document.getElementById("p9").innerHTML = "";
			document.getElementById("message").innerHTML = "";
			document.getElementById("identity").classList.toggle("fontZoom");
			document.getElementById("showAns").style.visibility = "hidden";
			for(i=1;i<=10;i++)
			{
				document.getElementById("form"+i).style.visibility = "hidden";
				if(i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8)
					document.getElementById("correct"+i).style.visibility = "hidden";
			}
			var lenDiv = document.getElementById("lensId")
			lenDiv.parentNode.removeChild(lenDiv);			
			document.getElementById("form0").removeChild(bImage);
			document.getElementById("form0").style.visibility = "hidden";
			document.getElementById("myresult").style.visibility = "hidden";			
			document.getElementById("prevButton").style.visibility = "hidden";
			document.getElementById("sliderNav1").style.visibility = "hidden";
			document.getElementById("sampleSelect").value = "";
			mineralArray.length = 0;
		}
		document.getElementById("nextButton").style.visibility = "hidden";
		document.getElementById("message").style.visibility = "hidden";
		document.getElementById("form10").style.visibility = "hidden";
		document.getElementById("d1").innerHTML = "";
		document.getElementById("d2").innerHTML = "";
		document.getElementById("myresult").style.visibility = "hidden";
		document.getElementById("mySlider").style.visibility = "visible";
		document.getElementById("sliderNav").style.visibility = "visible";
		document.getElementById("sliderPrev").onclick = function(){prevSlide();}
		document.getElementById("sliderNext").onclick = function(){nextSlide();}
		document.getElementById("sampleSelect").value = setVariable;
	}
	else if(simsubscreennum==2)
	{
		simsubscreennum =0;
		slideFlag = 0;
		document.getElementById("nextButton").style.visibility = "hidden";
		document.getElementById("prevButton").style.visibility = "visible";
		document.getElementById("mySlider").style.visibility = "hidden";
		document.getElementById("sliderNav").style.visibility = "hidden";
		document.getElementById("identity").style.visibility = "visible";
		document.getElementById("identity").innerHTML = "Selected Rock Sample is: "+setVariable;
		document.getElementById("identity").classList.toggle("fontZoom");
		setSingleSample();
	}
	
	else if(simsubscreennum==3)
	{
		
	}
}

function setSample()
{
	document.getElementById("nextButton").style.visibility = "visible";
	if(selectVariable == "Gabbro")
		setIndex = "gab";
	else if(selectVariable == "Graphic")
		setIndex = "gra";
	else if(selectVariable == "Mica")
		setIndex = "mic";
	else if(selectVariable == "Pumice")
		setIndex = "pum";
	else if(selectVariable == "Quartzite")
		setIndex = "qua";
	
	
	document.getElementById("sliderPrev").onclick = "";
	document.getElementById("sliderNext").onclick = "";
}

function setSingleSample()
{
	mineralArray.length = 0;
	for(i=1;i<=49;i++)
	{
		mineralArray.push("images/"+selectVariable+"/"+setIndex+i+".JPG"); 
	}	
	bImage = document.createElement("img");
	bImage.setAttribute("id","zoomImage");
	bImage.setAttribute("src",mineralArray[0]);
	bImage.setAttribute("width","100%");
	bImage.setAttribute("height","100%");
	document.getElementById("form0").style.width = "200px";
	document.getElementById("form0").style.height = "200px";
	document.getElementById("form0").appendChild(bImage);
	document.getElementById("zoomImage").style.padding = "0px";
	imageZoom("zoomImage", "myresult");

			
}
function imageZoom(imgID, resultID) {
  // var img,result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /*create lens:*/
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  lens.setAttribute("id", "lensId");
  /*insert lens:*/
  img.parentElement.insertBefore(lens, img);
  /*calculate the ratio between result DIV and lens:*/
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /*set background properties for the result DIV:*/
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  /*execute a function when someone moves the cursor over the image, or the lens:*/
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /*and also for touch screens:*/
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    /*calculate the position of the lens:*/
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    if (y < 0) {y = 0;}
    /*set the position of the lens:*/
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /*display what the lens "sees":*/
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
	if(x >=10 && x <=25 || x>=160 && x<=180 && y<=150 && y>=135)
	{
		lens.style.visibility = "hidden";
	}
	else
	{
		lens.style.visibility = "visible";
		return {x : x, y : y};
	}
  }
}
function toggleSidebar()
{
	document.getElementById("sidebar").classList.toggle("active");
} 
function closeMenu(ele,formNum,correctNum,fieldNum)
{
	document.getElementById("message").style.visibility = "hidden";
	document.getElementById("message").innerHTML = "";
	clearInterval(myInt);
	clearInterval(textInt);
	document.getElementById("identity").style.visibility = "hidden";
	document.getElementById("showAns").style.visibility = "hidden";
	for(i=0;i<=10;i++)
	{
		if( ele.id == 'menu'+i)
		{
			document.getElementById('form'+i).style.visibility = "visible";
			setHeadLine(i);
			if(ele.id == "menu0")
			{
				document.getElementById("myresult").style.visibility = "visible";
				document.getElementById("sliderNav1").style.visibility = "visible";
			}
			if(ele.id == "menu10")
			{
				document.getElementById("check10").style.visibility = "visible";
			}
			if(ele.id == "menu9")
			{
				if(chk1 == 1 && chk2 == 1 && chk3 == 1 && chk4 == 1 && chk5 == 1 && chk6 == 1 && chk7 == 1 && chk8 == 1)
				{
					document.getElementById("message").innerHTML = "";
					document.getElementById("message").style.visibility = "hidden";
					document.getElementById("form9").style.visibility = "visible";
					handId = document.getElementById("guess").id;
					textInt = setInterval(function(){animateVisibiltiy(handId);},500)
				}
				else 
				{
					setDisplayMessage();
					document.getElementById("form9").style.visibility = "hidden";
				}
			}
		}
		else
		{
			document.getElementById('form'+i).style.visibility = "hidden";
			if(i == 0)
			{
				document.getElementById("myresult").style.visibility = "hidden";
				document.getElementById("sliderNav1").style.visibility = "hidden";
			}
			else if(i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10 )
			{
				if(i == 10)
				{
					document.getElementById("check10").style.visibility = "hidden";
					document.getElementById("lensId").style.visibility = "hidden";
					document.getElementById("d1").style.visibility = "hidden";
					document.getElementById("d2").style.visibility = "hidden";
					document.getElementById("d1").innerHTML = "";
					document.getElementById("d2").innerHTML = "";
				}
				else if(i == 9)
				{
					document.getElementById("showAns").style.visibility = "hidden";
				}
				else
				{
					document.getElementById('correct'+i).style.visibility = "hidden";
					document.getElementById("lensId").style.visibility = "hidden";
				}
			}
		}
	}
	if(ele.id == "menu1" || ele.id == "menu2" || ele.id == "menu3" || ele.id == "menu4" || ele.id == "menu5" || ele.id == "menu6" || ele.id == "menu7" || ele.id == "menu8" || ele.id == "menu9")
		resetForm(formNum,correctNum,fieldNum);
}


function setHeadLine(i)
{
	// document.getElementById("p0").innerHTML = setVariable;
	document.getElementById("p1").innerHTML = "<b>Identify Group of Rock</b>: "+setVariable+"<span class='tooltiptext'>Based on their origin, geologically rocks are classified into igneous rocks, Sedimentary rocks and metamorphic rocks.</span></span><br>";
	document.getElementById("p2").innerHTML = "<b>Identify Colour of Rock</b>: "+setVariable+"<span class='tooltiptext'>The colour of rocks depends upon their constituent minerals or cementing material.</span></span><br>";
	document.getElementById("p3").innerHTML = "<b>Identify Grain Size of Rock</b>: "+setVariable+"<span class='tooltiptext'>Is the diameter of individual grains of sediment, or the lithified particles in clastic rocks.</span></span><br>";
	document.getElementById("p4").innerHTML = "<b>Identify Texture and Structure of Rock</b>: "+setVariable+"<span class='tooltiptext'>It is the mutual arrangement of component mineral grains size, shape. </span></span><br>";
	document.getElementById("p5").innerHTML = "<b>Identify Essential Minerals of Rock</b>: "+setVariable+"<span class='tooltiptext'>is the diameter of individual grains of sediment, or the lithified particles in clastic rocks.</span></span><br>";
	document.getElementById("p6").innerHTML = "<b>Identify Accessory Minerals/Cementing Materials of Rock</b>: "+setVariable+"<span class='tooltiptext'>Natural binding material deposited in between component sedimentary pebbles, fragments, grains and/or fossil remains.</span></span><br>";
	document.getElementById("p7").innerHTML = "<b>Identify Specific Gravity of Rock</b>: "+setVariable+"<span class='tooltiptext'>The ratio between the weight of a rock and the weight of an equal volume of water.</span></span><br>";
	document.getElementById("p8").innerHTML = "<b>Identify Mode of Origin of Rock</b>: "+setVariable;
	document.getElementById("p9").innerHTML = "<b>Now Guess Who Am I</b><span id='guess' style='font-size:25px'>&#129300;</span>: "+setVariable;
}

function checkForm1Answer()
{
	chk1 = 1;
	correct1 = 0;
	wrong1 = 0;
	var form1 = document.forms["form1"].elements;
	for(i = 0;i<form1.length - 3;i++)
	{
		document.getElementById("f1"+i).style.color = "black";
		document.getElementById("f1"+i).style.fontWeight = "Normal";
		if(selectVariable == "Gabbro" || selectVariable == "Graphic" || selectVariable == "Pumice")
		{	
			if( i == form1Answers[0])
			{
				resetMarks(1,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c1").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f1",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w1").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f1",i);	
			}
		}
		else if(selectVariable == "Mica" || selectVariable == "Quartzite")
		{	
			if( i == form1Answers[2])
			{
				resetMarks(1,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c1").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f1",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w1").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f1",i);	
			}				
		}
	}
	document.getElementById("correct1").style.visibility = "visible";
}

function checkForm2Answer()
{
	chk2 = 1;
	correct1 = 0;
	wrong1 = 0;
	var form1 = document.forms["form2"].elements;
	for(i = 0;i<form1.length - 3;i++)
	{
		document.getElementById("f2"+i).style.color = "black";
		document.getElementById("f2"+i).style.fontWeight = "Normal";	
		if(selectVariable == "Gabbro")
		{	
			resetMarks(2,correct1,wrong1);
			if( i == form2Answers[0])
			{
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c2").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f2",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w2").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f2",i);	
			}
		}
		else if(selectVariable == "Graphic")
		{	
			if( i == form2Answers[1] || i == form2Answers[2])
			{
				resetMarks(2,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c2").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f2",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w2").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f2",i);	
			}
		}
		else if(selectVariable == "Mica")
		{	
			if( i == form2Answers[3] || i == form2Answers[4])
			{
				resetMarks(2,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c2").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f2",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w2").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f2",i);	
			}
		}
		else if(selectVariable == "Pumice")
		{	
			if( i == form2Answers[5] || i == form2Answers[3])
			{
				resetMarks(2,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c2").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f2",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w2").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f2",i);	
			}
		}
		else if(selectVariable == "Quartzite")
		{	
			if( i == form2Answers[3] || i == form2Answers[6] || i == form2Answers[1] || i == form2Answers[7])
			{
				resetMarks(2,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c2").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f2",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w2").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f2",i);	
			}
		}
		
	}
	document.getElementById("correct2").style.visibility = "visible";
}

function checkForm3Answer()
{
	chk3 = 1;
	correct1 = 0;
	wrong1 = 0;
	var form1 = document.forms["form3"].elements;
	for(i = 0;i<form1.length - 3;i++)
	{
		document.getElementById("f3"+i).style.color = "black";
		document.getElementById("f3"+i).style.fontWeight = "Normal";	
		if(selectVariable == "Gabbro" || selectVariable == "Graphic")
		{	
			if( i == form3Answers[0])
			{
				resetMarks(3,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c3").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f3",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w3").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f3",i);	
			}
		}
		else if(selectVariable == "Mica")
		{	
			if( i == form3Answers[1])
			{
				resetMarks(3,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c3").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f3",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w3").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f3",i);	
			}
		}
		else if(selectVariable == "Pumice")
		{	
			if( i == form3Answers[2])
			{
				resetMarks(3,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c3").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f3",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w3").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f3",i);	
			}
		}
		else if(selectVariable == "Quartzite")
		{	
			if( i == form3Answers[3])
			{
				resetMarks(3,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c3").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f3",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w3").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f3",i);	
			}
		}
	}
	document.getElementById("correct3").style.visibility = "visible";
}

function checkForm4Answer()
{
	chk4 = 1;
	correct1 = 0;
	wrong1 = 0;
	var form1 = document.forms["form4"].elements;	
	for(i = 0;i<form1.length - 3;i++)
	{
		document.getElementById("f4"+i).style.color = "black";
		document.getElementById("f4"+i).style.fontWeight = "Normal";
		if(selectVariable == "Gabbro")
		{	
			if( i == form4Answers[0])
			{
				resetMarks(4,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c4").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f4",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w4").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f4",i);	
			}
		}
		else if(selectVariable == "Graphic")
		{	
			if( i == form4Answers[1])
			{
				resetMarks(4,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c4").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f4",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w4").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f4",i);	
			}
		}
		else if(selectVariable == "Mica")
		{	
			if( i == form4Answers[2])
			{
				resetMarks(4,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c4").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f4",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w4").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f4",i);	
			}
		}
		else if(selectVariable == "Pumice")
		{	
			if( i == form4Answers[3])
			{
				resetMarks(4,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c4").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f4",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w4").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f4",i);	
			}
		}
		else if(selectVariable == "Quartzite")
		{	
			if( i == form4Answers[4])
			{
				resetMarks(4,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c4").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f4",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w4").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f4",i);	
			}
		}
		
	}
	document.getElementById("correct4").style.visibility = "visible";
}

function checkForm5Answer()
{
	chk5 = 1;
	correct1 = 0;
	wrong1 = 0;
	var form1 = document.forms["form5"].elements;
	for(i = 0;i<form1.length - 3;i++)
	{
		document.getElementById("f5"+i).style.color = "black";
		document.getElementById("f5"+i).style.fontWeight = "Normal";	
		if(selectVariable == "Gabbro")
		{	
			if( i == form5Answers[0])
			{
				resetMarks(5,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c5").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f5",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w5").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f5",i);	
			}
		}
		else if(selectVariable == "Graphic")
		{	
			if( i == form5Answers[1] || i == form5Answers[2] )
			{
				resetMarks(5,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c5").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f5",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w5").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f5",i);	
			}
		}
		else if(selectVariable == "Mica")
		{	
			if( i == form5Answers[3])
			{
				resetMarks(5,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c5").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f5",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w5").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f5",i);	
			}
		}
		else if(selectVariable == "Pumice")
		{	
			if( i == form5Answers[1]|| i == form5Answers[4])
			{
				resetMarks(5,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c5").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f5",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w5").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f5",i);
			}				
		}
		else if(selectVariable == "Quartzite")
		{	
			if( i == form5Answers[5])
			{
				resetMarks(5,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c5").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f5",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w5").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f5",i);
			}				
		}
		
	}
	document.getElementById("correct5").style.visibility = "visible";
}

function checkForm6Answer()
{
	chk6 = 1;
	correct1 = 0;
	wrong1 = 0;
	var form1 = document.forms["form6"].elements;
	for(i = 0;i<form1.length - 3;i++)
	{
		document.getElementById("f6"+i).style.color = "black";
		document.getElementById("f6"+i).style.fontWeight = "Normal";	
		if(selectVariable == "Gabbro")
		{	
			if( i == form6Answers[0] || i == form6Answers[1])
			{
				resetMarks(6,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c6").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f6",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w6").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f6",i);	
			}
		}
		else if(selectVariable == "Graphic")
		{	
			if( i == form6Answers[0])
			{
				resetMarks(6,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c6").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f6",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w6").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f6",i);	
			}
		}
		else if(selectVariable == "Mica")
		{	
			if( i == form6Answers[2] || i == form6Answers[3])
			{
				resetMarks(6,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c6").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f6",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w6").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f6",i);	
			}
		}
		else if(selectVariable == "Pumice" || selectVariable == "Quartzite")
		{	
			if( i == form6Answers[4])
			{
				resetMarks(6,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c6").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f6",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w6").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f6",i);	
			}
		}
		
		
	}
	document.getElementById("correct6").style.visibility = "visible";
}

function checkForm7Answer()
{
	chk7 = 1;
	correct1 = 0;
	wrong1 = 0;
	var form1 = document.forms["form7"].elements;
	for(i = 0;i<form1.length - 3;i++)
	{
		document.getElementById("f7"+i).style.color = "black";
		document.getElementById("f7"+i).style.fontWeight = "Normal";	
		if(selectVariable == "Gabbro")
		{	
			if( i == form7Answers[0])
			{
				resetMarks(7,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c7").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f7",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w7").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f7",i);
			}				
		}
		else if(selectVariable == "Graphic")
		{	
			if( i == form7Answers[1])
			{
				resetMarks(7,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c7").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f7",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w7").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f7",i);
			}				
		}
		else if(selectVariable == "Mica")
		{	
			if( i == form7Answers[2])
			{
				resetMarks(7,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c7").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f7",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w7").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f7",i);
			}				
		}
		else if(selectVariable == "Pumice")
		{	
			if( i == form7Answers[3])
			{
				resetMarks(7,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c7").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f7",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w7").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f7",i);	
			}
		}
		else if(selectVariable == "Quartzite")
		{	
			if( i == form7Answers[4])
			{
				resetMarks(7,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c7").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f7",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w7").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f7",i);	
			}
		}
		
	}
	document.getElementById("correct7").style.visibility = "visible";
}

function checkForm8Answer()
{
	chk8 = 1;
	correct1 = 0;
	wrong1 = 0;
	var form1 = document.forms["form8"].elements;
	for(i = 0;i<form1.length - 3;i++)
	{
		document.getElementById("f8"+i).style.color = "black";
		document.getElementById("f8"+i).style.fontWeight = "Normal";	
		if(selectVariable == "Gabbro")
		{	
			if( i == form8Answers[0])
			{
				resetMarks(8,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c8").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f8",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w8").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f8",i);
			}				
		}
		else if(selectVariable == "Graphic")
		{	
			if( i == form8Answers[1])
			{
				resetMarks(8,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c8").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f8",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w8").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f8",i);	
			}
		}
		else if(selectVariable == "Mica")
		{	
			if( i == form8Answers[2])
			{
				resetMarks(8,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c8").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f8",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w8").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f8",i);	
			}
		}
		else if(selectVariable == "Pumice" )
		{	
			if( i == form8Answers[3])
			{
				resetMarks(8,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c8").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f8",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w8").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f8",i);	
			}
		}
		else if(selectVariable == "Quartzite" )
		{	
			if( i == form8Answers[4])
			{
				resetMarks(8,correct1,wrong1);
				if(form1[i].checked == true)
				{
					correct1++;
					document.getElementById("c8").innerHTML = "Correct Answer:<span style='color:black'>"+correct1+'</span>';
					form1ValidateGreen("f8",i);
				}
			}
			else if(form1[i].checked == true)
			{
				wrong1++;
				document.getElementById("w8").innerHTML = "Wrong Answer:<span style='color:black'>"+wrong1+'</span>';
				form1ValidateRed("f8",i);	
			}
		}
	}
	document.getElementById("correct8").style.visibility = "visible";
}

function checkForm9Answer()
{
	var form1 = document.forms["form9"].elements;
	for(i = 0;i<form1.length - 3;i++)
	{
		document.getElementById("f9"+i).style.color = "black";
		document.getElementById("f9"+i).style.fontWeight = "Normal";	
		if(selectVariable == "Gabbro")
		{	
			if( i == form9Answers[0])
			{
				if(form1[i].checked == true)
				form1ValidateGreen("f9",i);
			}
			else if(form1[i].checked == true)
				form1ValidateRed("f9",i);	
		}
		else if(selectVariable == "Graphic")
		{	
			if( i == form9Answers[1])
			{
				if(form1[i].checked == true)
					form1ValidateGreen("f9",i);
			}
			else if(form1[i].checked == true)
				form1ValidateRed("f9",i);	
		}
		else if(selectVariable == "Mica")
		{	
			if( i == form9Answers[2])
			{
				if(form1[i].checked == true)
					form1ValidateGreen("f9",i);
			}
			else if(form1[i].checked == true)
				form1ValidateRed("f9",i);	
		}
		else if(selectVariable == "Pumice")
		{	
			if( i == form9Answers[3])
			{
				if(form1[i].checked == true)
					form1ValidateGreen("f9",i);
			}
			else if(form1[i].checked == true)
				form1ValidateRed("f9",i);	
		}
		else if(selectVariable == "Quartzite" )
		{	
			if( i == form9Answers[4])
			{
				if(form1[i].checked == true)
					form1ValidateGreen("f9",i);
			}
			else if(form1[i].checked == true)
				form1ValidateRed("f9",i);	
		}
	}
	document.getElementById("correct9").style.visibility = "visible";
}


function checkFinalAnswer()
{
	clearInterval(textInt);
	document.getElementById("guess").style.visibility = "hidden";
	// checkForChecked();
	// if(ansFlag == true)
	// {
		document.getElementById("form9").style.visibility = "hidden";
		document.getElementById("c9").innerHTML = "";
		var form1 = document.forms["form9"].elements;
		for(i = 0;i<form1.length - 1;i++)
		{
			if(form1[i].checked == true)
			{
				if(selectVariable == "Gabbro")
				{	
					if( i == form9Answers[0])
					{
						if(form1[i].checked == true)
						{
							document.getElementById("showAns").style.visibility = "visible";
							document.getElementById("lastPara").innerHTML ="&#128077;Correct Answer"
							document.getElementById("lastImg").src = "images/"+selectVariable+"/"+setIndex+1+".JPG";
						}
					}
					else if(form1[i].checked == true)
					{
						document.getElementById("showAns").style.visibility = "visible";
						document.getElementById("lastPara").innerHTML ="&#128078;Wrong Answer"
						document.getElementById("lastImg").src = "images/"+selectVariable+"/"+setIndex+1+".JPG";
					}				
				}
				else if(selectVariable == "Graphic")
				{	
					if( i == form9Answers[1])
					{
						if(form1[i].checked == true)
						{
							document.getElementById("showAns").style.visibility = "visible";
							document.getElementById("lastPara").innerHTML ="&#128077;Correct Answer"
							document.getElementById("lastImg").src = "images/"+selectVariable+"/"+setIndex+1+".JPG";
						}
					}
					else if(form1[i].checked == true)
					{
						document.getElementById("showAns").style.visibility = "visible";
						document.getElementById("lastPara").innerHTML ="&#128078;Wrong Answer"
						document.getElementById("lastImg").src = "images/"+selectVariable+"/"+setIndex+1+".JPG";	
					}
				}
				else if(selectVariable == "Mica")
				{	
					if( i == form9Answers[2])
					{
						if(form1[i].checked == true)
						{
							document.getElementById("showAns").style.visibility = "visible";
							document.getElementById("lastPara").innerHTML ="&#128077;Correct Answer"
							document.getElementById("lastImg").src = "images/"+selectVariable+"/"+setIndex+1+".JPG";
						}
					}
					else if(form1[i].checked == true)
					{
						document.getElementById("showAns").style.visibility = "visible";
						document.getElementById("lastPara").innerHTML ="&#128078;Wrong Answer"
						document.getElementById("lastImg").src = "images/"+selectVariable+"/"+setIndex+1+".JPG";	
					}
				}
				else if(selectVariable == "Pumice")
				{	
					if( i == form9Answers[3])
					{
						if(form1[i].checked == true)
						{
							document.getElementById("showAns").style.visibility = "visible";
							document.getElementById("lastPara").innerHTML ="&#128077;Correct Answer "
							document.getElementById("lastImg").src = "images/"+selectVariable+"/"+setIndex+1+".JPG";
						}
					}
					else if(form1[i].checked == true)
					{
						document.getElementById("showAns").style.visibility = "visible";
						document.getElementById("lastPara").innerHTML ="&#128078;Wrong Answer"
						document.getElementById("lastImg").src = "images/"+selectVariable+"/"+setIndex+1+".JPG";
					}		
				}
				else if(selectVariable == "Quartzite" )
				{	
					if( i == form9Answers[4])
					{
						if(form1[i].checked == true)
						{
							document.getElementById("showAns").style.visibility = "visible";
							document.getElementById("lastPara").innerHTML ="&#128077;Correct Answer "
							document.getElementById("lastImg").src = "images/"+selectVariable+"/"+setIndex+1+".JPG";
						}
					}
					else if(form1[i].checked == true)
					{
						document.getElementById("showAns").style.visibility = "visible";
						document.getElementById("lastPara").innerHTML ="&#128078;Wrong Answer"
						document.getElementById("lastImg").src = "images/"+selectVariable+"/"+setIndex+1+".JPG";
					}		
				}
			}
			else 
				document.getElementById("c9").innerHTML = "You have not selected any option";
		}
	// }
	// else
		// document.getElementById("c11").innerHTML = "You have not selected any option";
}


function checkForm10Answer()
{
	document.getElementById("check10").style.visibility = "hidden";
	document.getElementById("d1").style.visibility = "visible";
	document.getElementById("d2").style.visibility = "visible";
	var x = document.getElementById("s1").selectedIndex;
	var y = document.getElementById("s2").selectedIndex;
	var d1 = document.getElementById("d1");
	var d2 = document.getElementById("d2");
	// document.getElementById("s1").options[x].text
	if(selectVariable == "Gabbro")
	{
		if(x == 0)
			d1.innerHTML = "Special Property: <span style='color:green'><b>Correct Answer</b></span>";
		else
			d1.innerHTML = "Special Property: <span style='color:red'><b>Wrong Answer</b></span><span style='font-size:25px'>&#9755;</span> Answer is - "+document.getElementById("s1").options[0].text;
		if(y == 0)
			d2.innerHTML = "Uses: <span style='color:green'><b>Correct Answer</b></span>";
		else
			d2.innerHTML = "Uses: <span style='color:red'><b>Wrong Answer</b></span><span style='font-size:25px'>&#9755;</span>  Answer is - "+document.getElementById("s2").options[0].text;
	}
	else if(selectVariable == "Graphic")
	{
		if(x == 1)
			d1.innerHTML = "Special Property: <span style='color:green'><b>Correct Answer</b></span>";
		else
			d1.innerHTML = "Special Property: <span style='color:red'><b>Wrong Answer</b></span>&#9755;  Answer is - "+document.getElementById("s1").options[1].text;
		if(y == 1)
			d2.innerHTML = "Uses: <span style='color:green'><b>Correct Answer</b></span>";
		else
			d2.innerHTML = "Uses: <span style='color:red'><b>Wrong Answer</b></span>&#9755;  Answer is - "+document.getElementById("s2").options[1].text;
	}
	else if(selectVariable == "Mica")
	{
		if(x == 2)
			d1.innerHTML = "Special Property: <span style='color:green'><b>Correct Answer</b></span>";
		else
			d1.innerHTML = "Special Property: <span style='color:red'><b>Wrong Answer</b></span>&#9755; Answer is - "+document.getElementById("s1").options[2].text;
		if(y == 2)
			d2.innerHTML = "Uses: <span style='color:green'><b>Correct Answer</b></span>";
		else
			d2.innerHTML = "Uses: <span style='color:red'><b>Wrong Answer</b></span>&#9755; Answer is - "+document.getElementById("s2").options[2].text;
	}
	else if(selectVariable == "Pumice")
	{
		if(x == 3)
			d1.innerHTML = "Special Property: <span style='color:green'><b>Correct Answer</b></span>";
		else
			d1.innerHTML = " Special Property: <span style='color:red'><b>Wrong Answer</b></span>&#9755; Answer is - "+document.getElementById("s1").options[3].text;
		if(y == 3)
			d2.innerHTML = "Uses: <span style='color:green'><b>Correct Answer</b></span>";
		else
			d2.innerHTML = "Uses: <span style='color:red'><b>Wrong Answer</b></span>&#9755; Answer is - "+document.getElementById("s2").options[3].text;
	}
	else if(selectVariable == "Quartzite")
	{
		if(x == 4)
			d1.innerHTML = "Special Property: <span style='color:green'><b>Correct Answer</b></span>";
		else
			d1.innerHTML = "Special Property: <span style='color:red'><b>Wrong Answer</b></span>&#9755; Answer is - "+document.getElementById("s1").options[4].text;
		if(y == 4)
			d2.innerHTML = "Uses: <span style='color:green'><b>Correct Answer</b></span>";
		else
			d2.innerHTML = "Uses: <span style='color:red'><b>Wrong Answer</b></span>&#9755; Answer is - "+document.getElementById("s2").options[4].text;
	}
	
	
}

function form1ValidateGreen(field,j)
{
	document.getElementById(field+j).style.color = "green";
	document.getElementById(field+j).style.fontWeight = "Bold";		
}
function form1ValidateRed(field,k)
{
	document.getElementById(field+k).style.color = "red";
	document.getElementById(field+k).style.fontWeight = "Bold";
}


function resetForm(formNum,correctNum,fieldNum)
{
	
	if(formNum=="form1" || formNum=="form2" || formNum=="form3" || formNum=="form4" || formNum=="form5" || formNum=="form6" || formNum=="form7" || formNum=="form8")
	{
		document.getElementById("correct"+correctNum).style.visibility = "hidden";
		document.getElementById("c"+correctNum).innerHTML = " ";
		document.getElementById("w"+correctNum).innerHTML = " ";
	}
	var form1 = document.forms[formNum].elements;
	for(i = 0;i<form1.length - 3;i++)
	{
		document.getElementById(fieldNum+i).style.color = "black";
		document.getElementById(fieldNum+i).style.fontWeight = "Normal";		
		form1[i].checked = false;
	}
	if(formNum == 9)
	{
		for(i = 0;i<form1.length - 3;i++)
		{
			document.getElementById(fieldNum+i).style.color = "black";
			document.getElementById(fieldNum+i).style.fontWeight = "Normal";		
			form1[i].checked = false;
		}
	}
	
}

function getCorrectAnswer(formNum,correctNum,fieldNum)
{
	resetForm(formNum,correctNum,fieldNum);
	var form1 = document.forms[formNum].elements;
	if(formNum == "form1")
	{
		for(i = 0;i<form1.length - 3;i++)
		{
			if(selectVariable == "Gabbro" || selectVariable == "Graphic" || selectVariable == "Pumice")
			{
				if( i == form1Answers[0])
				{
					form1[i].checked = true;
					form1ValidateGreen("f1",i);
				}
			}
			else if(selectVariable == "Mica" || selectVariable == "Quartzite")
			{	
				if( i == form1Answers[2])
				{
					form1[i].checked = true;
					form1ValidateGreen("f1",i);
				}	
			}
		}
	}
	else if(formNum == "form2")
	{
		for(i = 0;i<form1.length - 3;i++)
		{
			if(selectVariable == "Gabbro")
			{
				if( i == form2Answers[0])
				{
					form1[i].checked = true;
					form1ValidateGreen("f2",i);
				}
			}
			else if(selectVariable == "Graphic")
			{	
				if( i == form2Answers[1] || i == form2Answers[2])
				{
					form1[i].checked = true;
					form1ValidateGreen("f2",i);
				}	
			}
			else if(selectVariable == "Mica")
			{	
				if( i == form2Answers[3] || i == form2Answers[4])
				{
					form1[i].checked = true;
					form1ValidateGreen("f2",i);
				}
			}
			else if(selectVariable == "Pumice")
			{	
				if( i == form2Answers[5] || i == form2Answers[3])
				{
					form1[i].checked = true;
					form1ValidateGreen("f2",i);
				}
			}
			else if(selectVariable == "Quartzite")
			{	
				if( i == form2Answers[3] || i == form2Answers[6] || i == form2Answers[1] || i == form2Answers[7])
				{
					form1[i].checked = true;
					form1ValidateGreen("f2",i);
				}
			}
		}
	}
	else if(formNum == "form3")
	{
		for(i = 0;i<form1.length - 3;i++)
		{
			if(selectVariable == "Gabbro" ||selectVariable == "Graphic" )
			{
				if( i == form3Answers[0])
				{
					form1[i].checked = true;
					form1ValidateGreen("f3",i);
				}
			}
			else if(selectVariable == "Mica")
			{	
				if( i == form3Answers[1])
				{
					form1[i].checked = true;
					form1ValidateGreen("f3",i);
				}	
			}
			else if(selectVariable == "Pumice")
			{	
				if( i == form3Answers[2])
				{
					form1[i].checked = true;
					form1ValidateGreen("f3",i);
				}
			}
			else if(selectVariable == "Quartzite")
			{	
				if( i == form3Answers[3])
				{
					form1[i].checked = true;
					form1ValidateGreen("f3",i);
				}
			}
		}
	}
	else if(formNum == "form4")
	{
		for(i = 0;i<form1.length - 3;i++)
		{
			if(selectVariable == "Gabbro")
			{
				if( i == form4Answers[0])
				{
					form1[i].checked = true;
					form1ValidateGreen("f4",i);
				}
			}
			else if(selectVariable == "Graphic")
			{	
				if( i == form4Answers[1])
				{
					form1[i].checked = true;
					form1ValidateGreen("f4",i);
				}	
			}
			else if(selectVariable == "Mica")
			{	
				if( i == form4Answers[2])
				{
					form1[i].checked = true;
					form1ValidateGreen("f4",i);
				}
			}
			else if(selectVariable == "Pumice")
			{	
				if( i == form4Answers[3])
				{
					form1[i].checked = true;
					form1ValidateGreen("f4",i);
				}
			}
			else if(selectVariable == "Quartzite")
			{	
				if( i == form4Answers[4])
				{
					form1[i].checked = true;
					form1ValidateGreen("f4",i);
				}
			}
		}
	}
	else if(formNum == "form5")
	{
		for(i = 0;i<form1.length - 3;i++)
		{
			if(selectVariable == "Gabbro")
			{
				if( i == form5Answers[0])
				{
					form1[i].checked = true;
					form1ValidateGreen("f5",i);
				}
			}
			else if(selectVariable == "Graphic")
			{	
				if( i == form5Answers[1] || i == form5Answers[2])
				{
					form1[i].checked = true;
					form1ValidateGreen("f5",i);
				}	
			}
			else if(selectVariable == "Mica")
			{	
				if( i == form5Answers[3])
				{
					form1[i].checked = true;
					form1ValidateGreen("f5",i);
				}
			}
			else if(selectVariable == "Pumice")
			{	
				if( i == form5Answers[1] || i == form5Answers[4])
				{
					form1[i].checked = true;
					form1ValidateGreen("f5",i);
				}
			}
			else if(selectVariable == "Quartzite")
			{	
				if( i == form5Answers[5])
				{
					form1[i].checked = true;
					form1ValidateGreen("f5",i);
				}
			}
		}
	}
	else if(formNum == "form6")
	{
		for(i = 0;i<form1.length - 3;i++)
		{
			if(selectVariable == "Gabbro")
			{
				if( i == form6Answers[0] || i == form6Answers[1]  )
				{
					form1[i].checked = true;
					form1ValidateGreen("f6",i);
				}
			}
			else if(selectVariable == "Graphic")
			{	
				if( i == form6Answers[0])
				{
					form1[i].checked = true;
					form1ValidateGreen("f6",i);
				}	
			}
			else if(selectVariable == "Mica")
			{	
				if( i == form6Answers[2] || i == form6Answers[3] )
				{
					form1[i].checked = true;
					form1ValidateGreen("f6",i);
				}	
			}
			else if(selectVariable == "Pumice" || selectVariable == "Quartzite" )
			{	
				if( i == form6Answers[4])
				{
					form1[i].checked = true;
					form1ValidateGreen("f6",i);
				}	
			}
		}
	}
	else if(formNum == "form7")
	{
		for(i = 0;i<form1.length - 3;i++)
		{
			if(selectVariable == "Gabbro")
			{
				if( i == form7Answers[0])
				{
					form1[i].checked = true;
					form1ValidateGreen("f7",i);
				}
			}
			else if(selectVariable == "Graphic")
			{	
				if( i == form7Answers[1])
				{
					form1[i].checked = true;
					form1ValidateGreen("f7",i);
				}	
			}
			else if(selectVariable == "Mica")
			{	
				if( i == form7Answers[2])
				{
					form1[i].checked = true;
					form1ValidateGreen("f7",i);
				}	
			}
			else if(selectVariable == "Pumice")
			{	
				if( i == form7Answers[3])
				{
					form1[i].checked = true;
					form1ValidateGreen("f7",i);
				}	
			}
			else if(selectVariable == "Quartzite")
			{	
				if( i == form7Answers[4])
				{
					form1[i].checked = true;
					form1ValidateGreen("f7",i);
				}	
			}
			
		}
	}
	else if(formNum == "form8")
	{
		for(i = 0;i<form1.length - 3;i++)
		{
			if(selectVariable == "Gabbro")
			{
				if( i == form8Answers[0])
				{
					form1[i].checked = true;
					form1ValidateGreen("f8",i);
				}
			}
			else if(selectVariable == "Graphic")
			{	
				if( i == form8Answers[1])
				{
					form1[i].checked = true;
					form1ValidateGreen("f8",i);
				}	
			}
			else if(selectVariable == "Mica")
			{	
				if( i == form8Answers[2])
				{
					form1[i].checked = true;
					form1ValidateGreen("f8",i);
				}	
			}
			else if(selectVariable == "Pumice")
			{	
				if( i == form8Answers[3])
				{
					form1[i].checked = true;
					form1ValidateGreen("f8",i);
				}	
			}
			else if(selectVariable == "Quartzite")
			{	
				if( i == form8Answers[4])
				{
					form1[i].checked = true;
					form1ValidateGreen("f8",i);
				}	
			}
		}
	}
	else if(formNum == "form9")
	{
		for(i = 0;i<form1.length - 3;i++)
		{
			if(selectVariable == "Gabbro")
			{
				if( i == form9Answers[0])
				{
					form1[i].checked = true;
					form1ValidateGreen("f9",i);
				}
			}
			else if(selectVariable == "Graphic")
			{	
				if( i == form9Answers[1])
				{
					form1[i].checked = true;
					form1ValidateGreen("f9",i);
				}	
			}
			else if(selectVariable == "Mica")
			{	
				if( i == form9Answers[2])
				{
					form1[i].checked = true;
					form1ValidateGreen("f9",i);
				}	
			}
			else if(selectVariable == "Pumice")
			{	
				if( i == form9Answers[3])
				{
					form1[i].checked = true;
					form1ValidateGreen("f9",i);
				}	
			}
			else if(selectVariable == "Quartzite")
			{	
				if( i == form9Answers[4])
				{
					form1[i].checked = true;
					form1ValidateGreen("f9",i);
				}	
			}
		}
	}
}

function resetMarks(i,cVal,wVal)
{
	document.getElementById("c"+i).innerHTML = "Correct Answer:<span style='color:black'>"+cVal+'</span>';
	document.getElementById("w"+i).innerHTML = "Wrong Answer:<span style='color:black'>"+wVal+'</span>';
}

function setDisplayMessage()
{
	document.getElementById("message").style.visibility = "visible";
	document.getElementById("message").innerHTML = "Properties you have not identified are:<br><span id='hand'>&#128071;</span><br>";
	if(chk1 == 0)
		document.getElementById("message").innerHTML=document.getElementById("message").innerHTML+"<span style='font-size:14px;color:black;'>1. Group</span><br>";
	if(chk2 == 0)
		document.getElementById("message").innerHTML=document.getElementById("message").innerHTML+"<span style='font-size:14px;color:black;'>2. Colour</span><br>";
	if(chk3 == 0)
		document.getElementById("message").innerHTML=document.getElementById("message").innerHTML+"<span style='font-size:14px;color:black;'>3. Grain Size</span><br>";
	if(chk4 == 0)
		document.getElementById("message").innerHTML=document.getElementById("message").innerHTML+"<span style='font-size:14px;color:black;'>4. Texture and Structure</span><br>";
	if(chk5 == 0)
		document.getElementById("message").innerHTML=document.getElementById("message").innerHTML+"<span style='font-size:14px;color:black;'>5. Essential Minerals</span><br>";
	if(chk6 == 0)
		document.getElementById("message").innerHTML=document.getElementById("message").innerHTML+"<span style='font-size:14px;color:black;'>6. Accessory Minerals/Cementing Materials</span><br>";
	if(chk7 == 0)
		document.getElementById("message").innerHTML=document.getElementById("message").innerHTML+"<span style='font-size:14px;color:black;'>7. Specific Gravity</span><br>";
	if(chk8 == 0)
		document.getElementById("message").innerHTML=document.getElementById("message").innerHTML+"<span style='font-size:14px;color:black;'>8. Mode of Origin</span><br>";
	handId = document.getElementById("hand").id;
	console.log(handId);
	myInt = setInterval(function(){ animateShadow(); }, 500);		
	textInt = setInterval(function(){animateVisibiltiy(handId);},500);
}

function resetCheckValues()
{
	chk1 = 0;
	chk2 = 0;
	chk3 = 0;
	chk4 = 0;
	chk5 = 0;
	chk6 = 0;
	chk7 = 0;
	chk8 = 0;
	chk9 = 0;
	chk10 = 0;
}

function animateVisibiltiy(idd)
{
	if(document.getElementById(idd).style.visibility == "visible")
		document.getElementById(idd).style.visibility = "hidden";
	else 
		document.getElementById(idd).style.visibility = "visible";
}
{
	if(document.getElementById("message").style.boxShadow == "10px 10px 5px")
		document.getElementById("message").style.boxShadow = "0px 0px 0px";
	else 
		document.getElementById("message").style.boxShadow = "10px 10px 5px";
}


function animateShadow()
{
	if(document.getElementById("message").style.boxShadow == "10px 10px 5px")
		document.getElementById("message").style.boxShadow = "0px 0px 0px";
	else 
		document.getElementById("message").style.boxShadow = "10px 10px 5px";
}

function clearVisibility(idd)
{
	clearInterval(idd);
}