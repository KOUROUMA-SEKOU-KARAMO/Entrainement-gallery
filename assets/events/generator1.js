const mainGenerator=document.querySelector('.main-generator')

let counter =0;
const h1=document.createElement('h1')

const bubbleMarker=()=>{
    const generatorBubble=document.createElement('div')
    const bubble=document.createElement('span')
    
    const  size=Math.random()*200+100+"px"
    generatorBubble.classList.add('generator1')
    bubble.classList.add('bubble')

    const plusMinus=Math.random()>0.5?1:-1
    
    mainGenerator.appendChild(bubble)
    
        bubble.style.width=size
        bubble.style.height=size
        bubble.style.top=Math.random()*100+50+'%'
        bubble.style.left=Math.random()*100+'%'
    bubble.style.setProperty("--left",plusMinus*Math.random()*100+"%")
    bubble.addEventListener('click',()=>{
        h1.innerText=counter++
    })
     
    setTimeout(()=>{
        bubble.remove()
    },8000)
    
}


mainGenerator.appendChild(h1)



setInterval(bubbleMarker,300)


