let video= document.getElementById('video')
let fileChose = document.getElementById('file')
fileChose.style.display = 'none'

let btn = document.querySelector('.btn')

fileChose.addEventListener("change",()=>{
    let thefile = fileChose.files[0]
    
    video.src = URL.createObjectURL(thefile)
    console.log(URL.createObjectURL(thefile))
    fileChose.style.display ="block"
    btn.style.display = 'none'
})
btn.addEventListener('click',function(){
    fileChose.click()
})