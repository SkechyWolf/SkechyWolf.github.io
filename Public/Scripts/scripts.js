import{setupGround as e,updateGround as t}from"./ground.js";import{setupTius as r,updateTius as o,getTiusRect as l,setTiusLose as s}from"./tius.js";import{setupComputer as n,updateComputer as a,getComputerRect as i}from"./computer.js";let WORLD_WIDTH=100,WORLD_HEIGHT=30,SPEED_SCALE_INCREASE=1e-5,frameCount=0,prevTime=0,fps=0,worldElem=document.querySelector("[data-world]"),scoreElem=document.querySelector("[data-score]"),startElem=document.querySelector("[data-start-screen]");-1===document.referrer.toLowerCase().indexOf("builds.html")&&(alert("Wrong"),document.body.classList.add("hide"),window.history.back()),setPixelToWorldScale(),window.addEventListener("resize",setPixelToWorldScale),document.addEventListener("keydown",handleStart,{once:!0});let lastTime,speedScale,score,prevScore;function update(e){if(null==lastTime){lastTime=e,window.requestAnimationFrame(update);return}let r=e-lastTime;if(t(r,speedScale),o(r,speedScale),a(r,speedScale),updateSpeedScale(r),updateScore(r),checkLose())return handleLose();let l=e-prevTime;frameCount++,l>1e3&&(fps=Math.round(1e3*frameCount/l),frameCount=0,prevTime=e,document.querySelector(".fps").textContent=fps,fps<30?document.querySelector(".fps").style.color="red":document.querySelector(".fps").style.color="green"),lastTime=e,window.requestAnimationFrame(update)}function checkLose(){let e=l();return i().some(t=>isCollision(t,e))}function isCollision(e,t){return e.left<t.right&&e.top<t.bottom&&e.right>t.left&&e.bottom>t.top}function updateSpeedScale(e){speedScale>5||(speedScale+=1e-5*e)}function updateScore(e){score+=.01*e,scoreElem.textContent=`${Math.floor(score)} / ${Math.floor(prevScore)}`}function handleStart(){lastTime=null,speedScale=1,score=0,prevScore=localStorage.getItem("score")||0,e(),r(),n(),startElem.classList.add("hide"),window.requestAnimationFrame(update)}function handleLose(){s(),localStorage.setItem("score",Math.floor(score)),setTimeout(()=>{document.addEventListener("keydown",handleStart,{once:!0}),startElem.classList.remove("hide")},100)}function setPixelToWorldScale(){let e;e=window.innerWidth/window.innerHeight<100/30?window.innerWidth/100:window.innerHeight/30,worldElem.style.width=`${100*e}px`,worldElem.style.height=`${30*e}px`}