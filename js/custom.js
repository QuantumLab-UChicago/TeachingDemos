function H_() {
blochSphere.setProbAmplitudes(math.complex(1, 0), math.complex(0, 0));
//updateQuantumStateDisplay(config);
//document.getElementById("Amp0").innerHTML =blochSphere.getProbAmplitude0().toString()
//document.getElementById("Amp1").innerHTML =blochSphere.getProbAmplitude1().toString()
}

function V_() {
blochSphere.setProbAmplitudes(math.complex(0, 0), math.complex(1, 0));
//updateQuantumStateDisplay(config);
//document.getElementById("Amp0").innerHTML =blochSphere.getProbAmplitude0().toString()
//document.getElementById("Amp1").innerHTML =blochSphere.getProbAmplitude1().toString()
}


function P_() {
blochSphere.setProbAmplitudes(math.complex(1/math.sqrt(2), 0), math.complex(1/math.sqrt(2), 0));
//updateQuantumStateDisplay(config);
//document.getElementById("Amp0").innerHTML =blochSphere.getProbAmplitude0().toString()
//document.getElementById("Amp1").innerHTML =blochSphere.getProbAmplitude1().toString()
}

function M_() {
blochSphere.setProbAmplitudes(math.complex(1/math.sqrt(2), 0), math.complex(-1/math.sqrt(2), 0));
//updateQuantumStateDisplay(config);
//document.getElementById("Amp0").innerHTML =blochSphere.getProbAmplitude0().toString()
//document.getElementById("Amp1").innerHTML =blochSphere.getProbAmplitude1().toString()
}

function R_() {
blochSphere.setProbAmplitudes(math.complex(1/math.sqrt(2), 0), math.complex(0, 1/math.sqrt(2)));
//updateQuantumStateDisplay(config);
//document.getElementById("Amp0").innerHTML =blochSphere.getProbAmplitude0().toString()
//document.getElementById("Amp1").innerHTML =blochSphere.getProbAmplitude1().toString()
}

function L_() {
blochSphere.setProbAmplitudes(math.complex(1/math.sqrt(2), 0), math.complex(0, -1/math.sqrt(2)));
//updateQuantumStateDisplay(config);
//document.getElementById("Amp0").innerHTML =blochSphere.getProbAmplitude0().toString()
//document.getElementById("Amp1").innerHTML =blochSphere.getProbAmplitude1().toString()
}






function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

var fps = 60//60

var secs = 3//3 

//var time = fps*secs

var nstep = fps*secs

var customGate = new Gate(math.matrix([
    [math.cos((math.pi/2 )/ nstep), math.multiply(math.complex(0, -1), math.sin((math.pi/2) / nstep))],
    [math.multiply(math.complex(0, -1), math.sin((math.pi/2) / nstep)), math.cos((math.pi/2) / nstep)]]));


function R_x(theta,nstep)
	{
		blochSphere.applyGate(new Gate(math.matrix([
	    [math.cos((theta/2) / nstep), math.multiply(math.complex(0, -1), math.sin((theta/2) / nstep))],
	    [math.multiply(math.complex(0, -1), math.sin((theta/2) / nstep)), math.cos((theta/2) / nstep)]])));
	}

function R_y(theta,nstep)
	{
		blochSphere.applyGate(new Gate(math.matrix([
	    [math.cos((theta/2) / nstep), math.multiply(-1, math.sin((theta/2) / nstep))],
	    [math.multiply(1, math.sin((theta/2) / nstep)), math.cos((theta/2) / nstep)]])));
	}

function R_z(theta,nstep)
	{
		blochSphere.applyGate(new Gate(math.matrix([
	    [math.add(math.cos((theta/2) / nstep),math.multiply(math.complex(0, -1), math.sin((theta/2) / nstep))), 0],
	    [0, math.add(math.cos((theta/2) / nstep),math.multiply(math.complex(0, 1), math.sin((theta/2) / nstep)))]])));
	}


function Pol(theta)
	{
		blochSphere.applyGate(new Gate(math.matrix([
	    [math.pow(math.cos(theta),2),math.multiply(math.cos(theta), math.sin(theta))],
	    [math.multiply(math.cos(theta), math.sin(theta)),math.pow(math.sin(theta),2)]])));
	}



async function pictureRx() 
{
	
	for (let i = 0; i < nstep; i++) 
	{
	 	await delay(1000/fps);
	 	R_x(math.pi,nstep) 	
		
		document.getElementById("Amp0").innerHTML =blochSphere.getProbAmplitude0().toString()
		document.getElementById("Amp1").innerHTML =blochSphere.getProbAmplitude1().toString()
  
	}

}

async function pictureR_HWP() 
{

	var angle_ = parseFloat(document.getElementById('angle').value)*math.pi/180
	//var phi = 2*(math.pi/4) // We placed the HWP at 22.5 (pi/8) deg from horizontal 
	var phi = 2*(angle_) // We placed the HWP at 22.5 (pi/8) deg from horizontal 
	
	for (let i = 0; i < nstep; i++) 
	{
	 	await delay(1000/fps);
	 	
	 	// Need to apply R_y(-phi), then R_z(pi), then R_y(phi)
	 	R_y(-1*phi,1) 	
		R_z(math.pi,nstep) 
	 	R_y(phi,1)
	 	 	
		//blochSphere.applyGate(new Gate(math.matrix([
	    //[math.cos(math.pi / nstep), math.multiply(math.complex(0, -1), math.sin(math.pi / nstep))],
	    //[math.multiply(math.complex(0, -1), math.sin(math.pi / nstep)), math.cos(math.pi / nstep)]])));
		
		//blochSphere.applyGate(customGate);
		
		//document.getElementById("Amp0").innerHTML =blochSphere.getProbAmplitude0().toString()
		//document.getElementById("Amp1").innerHTML =blochSphere.getProbAmplitude1().toString()
  
	}

}

async function pictureR_QWP() 
{
	var angle_ = parseFloat(document.getElementById('angle').value)*math.pi/180
	//var phi = 2*(math.pi/4) // We placed the HWP at 22.5 (pi/8) deg from horizontal 
	var phi = 2*(angle_) // We placed the HWP at 22.5 (pi/8) deg from horizontal 
	

	
	for (let i = 0; i < nstep; i++) 
	{
	 	await delay(1000/fps*0.5);
	 	
	 	// Need to apply R_y(-phi), then R_z(pi), then R_y(phi)
	 	R_y(-1*phi,1) 	
		R_z(math.pi/2,nstep) 
	 	R_y(phi,1)
	 	 	
		//blochSphere.applyGate(new Gate(math.matrix([
	    //[math.cos(math.pi / nstep), math.multiply(math.complex(0, -1), math.sin(math.pi / nstep))],
	    //[math.multiply(math.complex(0, -1), math.sin(math.pi / nstep)), math.cos(math.pi / nstep)]])));
		
		//blochSphere.applyGate(customGate);
		
		//document.getElementById("Amp0").innerHTML =blochSphere.getProbAmplitude0().toString()
		//document.getElementById("Amp1").innerHTML =blochSphere.getProbAmplitude1().toString()
  
	}

}

async function pictureR_LP() 
{
	var angle_ = parseFloat(document.getElementById('angle').value)*math.pi/180
	//var phi = 2*(math.pi/4) // We placed the HWP at 22.5 (pi/8) deg from horizontal 
	//var phi = 2*(angle_) // We placed the HWP at 22.5 (pi/8) deg from horizontal 
	
	Pol(angle_)

	
	//for (let i = 0; i < nstep; i++) 
	//{
	 	//await delay(1000/fps*0.5);
	 	
	 	// Need to apply R_y(-phi), then R_z(pi), then R_y(phi)
	 //	R_y(-1*phi,1) 	
		//R_z(math.pi/2,nstep) 
	 	//R_y(phi,1)
	 	 	
		//blochSphere.applyGate(new Gate(math.matrix([
	    //[math.cos(math.pi / nstep), math.multiply(math.complex(0, -1), math.sin(math.pi / nstep))],
	    //[math.multiply(math.complex(0, -1), math.sin(math.pi / nstep)), math.cos(math.pi / nstep)]])));
		
		//blochSphere.applyGate(customGate);
		
		document.getElementById("Amp0").innerHTML =blochSphere.getProbAmplitude0().toString()
		document.getElementById("Amp1").innerHTML =blochSphere.getProbAmplitude1().toString()
  
	//}

}








