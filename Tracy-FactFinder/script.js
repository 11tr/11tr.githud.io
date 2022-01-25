
document.querySelector('#menu').a.addEventListener("click",a);

function a(){
	document.querySelector('section').innerHTML = "Ozone layer disappears<br>Without the Ozone layer in place, radiation from the sun would reach earth directly, damaging the DNA of plants and animals (Including humans). <br> <img src='images/sky.jpg' alt='sky'>";
}

document.querySelector('#menu').b.addEventListener("click",b);

function b(){
	document.querySelector('section').innerHTML = "Global Warming <br>Global warming is the long-term heating of Earth's climate system observed since the pre-industrial period (between 1850 and 1900) due to human activities, primarily fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth's atmosphere.<br><img src='images/ice.jpg' alt='ice'>";
}

document.querySelector('#menu').c.addEventListener("click",c);

function c(){
	document.querySelector('section').innerHTML = "animal extinction <br> Extinction occurs when species are diminished because of environmental forces (habitat fragmentation, global change, natural disaster, overexploitation of species for human use) or because of evolutionary changes in their members (genetic inbreeding, poor reproduction, decline in population numbers).<br><img src='images/fox.jpg' alt='fox'>";
}

document.querySelector('#menu').d.addEventListener("click",d);

function d(){
	document.querySelector('section').innerHTML = "Virus<br>Since the novel coronavirus disease first appeared and began to spread globally in December 2019, scientists have faced the dilemma in trying to decipher the new coronavirus (SARS-CoV-2) epidemic.<br><img src='images/19.jpg' alt='19'>";
}

document.querySelector('#menu').e.addEventListener("click",e);

function e(){
	document.querySelector('section').innerHTML = "environment pollution<br>Humans directly or indirectly discharge substances or energy that exceed their self-purification capacity to the environment, thereby reducing the quality of the environment and adversely affecting human survival and development, ecosystems and property.<br><img src='images/huan.jpg' alt='huan'>";
}



document.querySelector('#butt').f.addEventListener("click",f);

function f(){
	document.querySelector('section').style.backgroundColor = "#C5FFFD";
	document.querySelector('section').innerHTML = "Celeste";
}

document.querySelector('#butt').g.addEventListener("click",g);

function g(){
	document.querySelector('section').innerHTML = "Middle Blue";
	document.querySelector('section').style.backgroundColor = "#88D9E6";
}

document.querySelector('#butt').h.addEventListener("click",h);

function h(){
	document.querySelector('section').innerHTML = "Cool Grey";
	document.querySelector('section').style.backgroundColor = "#8B8BAE";
}