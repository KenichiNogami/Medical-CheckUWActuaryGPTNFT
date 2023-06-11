
<script>
  const form = document.getElementById('inputForm');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const age = parseFloat(document.getElementById('age').value);
    console.log(age);
    const high = parseFloat(document.getElementById('high').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const pressu = parseFloat(document.getElementById('pressu').value);
    const pressd = parseFloat(document.getElementById('pressd').value);
    const ast = parseFloat(document.getElementById('ast').value);
    const alt = parseFloat(document.getElementById('alt').value);
    const gtp = parseFloat(document.getElementById('gtp').value);
    const tg = parseFloat(document.getElementById('tg').value);
    const hdl = parseFloat(document.getElementById('hdl').value);
    const ldl = parseFloat(document.getElementById('ldl').value);
    const tl = parseFloat(document.getElementById('tl').value);
    const bs = parseFloat(document.getElementById('bs').value);
    const hba = parseFloat(document.getElementById('hba').value);
    const rb = parseFloat(document.getElementById('rb').value);
    const hb = parseFloat(document.getElementById('hb').value);
    const plat = parseFloat(document.getElementById('plat').value);
    const crt = parseFloat(document.getElementById('crt').value);
    const gender = parseInt(document.querySelector('input[name="gender"]:checked').value);
    const opinion = parseInt(document.querySelector('input[name="opinion"]:checked').value);
    const urs = parseInt(document.querySelector('input[name="urs"]:checked').value);
    const urp = parseInt(document.querySelector('input[name="urp"]:checked').value);
    const heart = parseInt(document.querySelector('input[name="heart"]:checked').value);
    const lung = parseInt(document.querySelector('input[name="lung"]:checked').value);
    const cancer = parseInt(document.querySelector('input[name="cancer"]:checked').value);

    const apiUrl = "https://myjumyo01.azurewebsites.net/api/HttpTrigger1";
    const apiKey = "";
　　 const requestOptions = {
    　　method: "POST",
    　　headers: {
        "Content-Type": "application/json",
        "x-functions-key": apiKey
    　　},
    　　body: JSON.stringify({
        age: age, 
        high: high,
        weight: weight, 
        pressu: pressu, 
        pressd: pressd,
        ast: ast, 
        alt: alt, 
        gtp: gtp,
        tg: tg, 
        hdl: hdl, 
        ldl: ldl,
        tl: tl, 
        bs: bs, 
        hba: hba,
        rb: rb, 
        hb: hb, 
        plat: plat, 
        crt: crt, 
        gender: gender, 
        opinion: opinion, 
        urs: urs, 
        urp:urp, 
        heart: heart, 
        lung: lung, 
        cancer: cancer
    })
};

　　　　　　　　fetch(apiUrl, requestOptions)
    　　　　.then(response => response.json())
    　　　　.then(data => console.log(data))
    　　　　.catch(error => console.error("Error:", error));
    
    
    fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      
      var red = JSON.parse(data.warn3);
      var orange = JSON.parse(data.warn2);
      var yellow = JSON.parse(data.warn1);
      var Red = "";
      var Orange = "";
      var Yellow = "";
      if (red.length >0){
        for (var i = 0; i < red.length; i++) {
        Red += red[i] + "<br>";}}
      if (orange.length >0){
        for (var i = 0; i < orange.length; i++) {
        Orange += orange[i] + "<br>";}}
      if (yellow.length >0){
        for (var i = 0; i < yellow.length; i++) {
        Yellow += yellow[i] + "<br>";}}   
      
      resultDiv.innerHTML = `
          <h1><b> ${data.warn0}</b></h1>
            <b>
            <h3 style="text-shadow : -3px 0px 1px #ff0000"><ul class="list-unstyled">${Red}</ul></h3>
            <h3 style="text-shadow : -3px 0px 1px #ff4400"><ul class="list-unstyled">${Orange}</ul></h3>
            <h3 style="text-shadow : -3px 0px 1px #ffff00"><ul class="list-unstyled">${Yellow}</ul></h3>
            <h1 style="text-shadow : -3px 0px 1px #00ff00"><ul class="list-unstyled">${data.warn9}</ul></h1>
            </b><br>
            <h1 class="card-header text-center border border-0 life-top-card-title">『私の寿命』<br>あと何年？</h1><br>
            <p class="text-center"><b>${data.yage}</b>歳時点の私の寿命は、</p>
            <h1 class="text-center"><b>${data.ylt.toFixed(1)}</b>歳</h1>
            <p class="text-center">国民平均は、<b>${data.nlt.toFixed(1)}</b>歳</p>
            <br>
            <table class="table"> 
             <tr><th>期待生存確率</th></tr>
             <tr><th>65歳</th><td><b>${data.e65.toFixed(1)}</b>％</td></tr>
             <tr><th>70歳</th><td><b>${data.e70.toFixed(1)}</b>％</td></tr>
             <tr><th>80歳</th><td><b>${data.e80.toFixed(1)}</b>％</td></tr>
             <tr><th>90歳</th><td><b>${data.e90.toFixed(1)}</b>％</td></tr>
             <tr><th>100歳</th><td><b>${data.e100.toFixed(1)}</b>％</td></tr>
            </table><br>
    `;
    })
    .catch(error => console.error("Error:", error));



  });
</script>

