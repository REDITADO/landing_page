setInterval(()=>{
    const images = ["andaime","betoneira","compactador","martelete"]
    // console.log(Math.round(Math.random(0)*images.length))
    document.querySelector("#carrossel img").src=images[Math.round(Math.random(0)*(images.length-1))]+".jpg"
},3000)

document.querySelectorAll("select").forEach(e=>{
    e.addEventListener("change",(e)=>{
        // console.log(e.target.value)
        if(e.target.value=="Andaime" && !document.querySelector(".jogo")){
          
            const select =document.createElement("select")
            const option = document.createElement("option")
            const option2 = document.createElement("option")
            const option3 = document.createElement("option")
            option.value = "Piso/Plataforma para andaime"
            option2.value ="Rodizio/Rodinhas para andaime"
            option.innerText="Piso/Plataforma para andaime"
            option2.innerText ="Rodizio/Rodinhas para andaime"
            option3.innerText="--Selecione o jogo--"
            select.classList.add("jogo")
            select.appendChild(option3)
            select.appendChild(option)
            select.appendChild(option2)
            document.querySelector("form").appendChild(select)
        }else if(document.querySelector(".jogo") && document.querySelector(".jogo").style.display=="none" ){
            document.querySelector(".jogo").style.display="block"
        }else if(isNaN(Number(e.target.value))){
            document.querySelector(".jogo").style.display="none"
        }
    })
})

let message =""
let jogo;
document.querySelectorAll("select").forEach(e=>{
    e.addEventListener("change",e=>{
        if(e.target.value =="Andaime"){
            document.querySelector(".jogo").addEventListener("change",e=>{
                console.log(e.target.value)
                jogo=e.target.value
                console.log(jogo)
            })
        }
        if( document.querySelectorAll("select")[0].value && document.querySelectorAll("select")[1].value) message =`Ola gostaria do valor desse orçamento, Equipamento:${isNaN(Number(e.target.value))?e.target.value:document.querySelectorAll("select")[0].value} ${Boolean(jogo)?"Jogo: "+jogo:""} Tempo de locação:${!isNaN(Number(e.target.value))?e.target.value:document.querySelectorAll("select")[1].value}`
    })
})
document.querySelector("#submit").addEventListener("click",e=>{
    e.preventDefault()
    if(Boolean(message)){
    console.log(message)
    setTimeout(()=>{
    window.location.href=`https://api.whatsapp.com/send?phone=5562985570505&text=${message}`

    },3000)
    document.querySelector("#submit").innerHTML="<img src='./rolling.gif' alt=''>"
    }else{
        alert("Faça seu orçamento")
    }
})