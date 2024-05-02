

function displayContent(){
    let value=inputBox.value
    document.querySelector("#result").innerHTML+=`
    
    <div class="result-box rounded rounded-4">
        <h5 class="text-edit p-2 ms-2 me-2 me-3"><i class="fa-solid fa-user fa-small me-3" style="color: #ffffff;"></i> you</h5>
        <h5 class="text-edit p-2 ms-2 me-2 ms-5">${value}</h5>
    </div>
    `
   displayResult(value)
}
function history(){
    let value=inputBox.value
    document.querySelector("#searchHistory").innerHTML+=`
    
    <li class="text-decoration-none mb-2">${value}</li>
    `
}

function displayResult(inputvalue){
    let apikey="Your api key"
    let url=`https://api.openai.com/v1/completions`
    let request={
        prompt:inputvalue,
        max_tokens: 100,
        model:`davinci-002`
    }
    let headers = {
        'Content-Type': 'application/json',
        'Authorization':` Bearer ${apikey}`
      };
    fetch(url,{method:`POST`,headers:headers,body: JSON.stringify(request)}).then(res=>res.json()).then(data=>{

        let resulttext = data.choices[0].text.trim()
        document.querySelector("#result").innerHTML+= `
    
        <div class="result">
        <h5 class="text-edit p-2 ms-2 me-2"><i class="fa-solid fa-comment fa-small me-2" style="color: #ffffff;"></i> MickeyAi</h5>
        <h5 class="text-edit p-2 ms-5 me-4">${resulttext}</h5>
        <h6 class="ms-5">I hope the provided answer is suitable for your request. <br> <i class="fa-regular fa-note-sticky me-3" style="color: #ffffff;"></i><i class="fa-regular fa-thumbs-up me-3" style="color: #ffffff;"></i><i class="fa-regular fa-thumbs-down me-3" style="color: #ffffff;"></i></h6>
        </div>
    
        `
        console.log(data);
    })



}


