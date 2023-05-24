let a=document.getElementById("image1");
fetch('https://www.coursehubiitg.in/api/codingweek/contributions').then((response)=>{
    return response.json();
}
).then((data)=>{
    function getPoints(data){
        return data.points;
    }
    function compare(a,b){
        let pointsA=getPoints(a);
        let pointsB=getPoints(b);
        return pointsB-pointsA;
    }
    let sorted=data.sort(compare);
    console.log(sorted);
    console.log(sorted.length);
    function displayImage(pic,iden) {
        let divLocation = document.getElementById(iden).getElementsByClassName("avatar")[0];
        let imgElement = document.createElement("img");
        imgElement.src = pic
        divLocation.append(imgElement);
    }
    function displayImage2(pic,iden) {
        let divLocation = document.getElementById(iden);
        let imgElement = document.createElement("img");
        imgElement.src = pic
        divLocation.append(imgElement);
    }
    for(let i=0;i<(sorted.length);i++){
        let ident="standings";
        let str=(i-2).toString();
        let identi=ident.concat(str);
        identi=identi.toString();
        console.log(identi);
        if(i<3){
            let str2=(i+1).toString();
            let x="image".concat(str2);
            let y=("nameplate".concat(str2)).concat("_text");
            let z=("nameplate".concat(str2)).concat("_points");
            displayImage2(sorted[i].avatar,x);
              let divName=document.getElementById(y);
                 divName.innerHTML=sorted[i].name;
                 let divPoints=document.getElementById(z);
                 divPoints.innerHTML=sorted[i].points;
        }
        else{
        if((i)<8){
        displayImage(sorted[i].avatar,identi);
        let divName=document.getElementById(identi).getElementsByClassName("name")[0];
        divName.innerHTML=sorted[i].name;
        let divPoints=document.getElementById(identi).getElementsByClassName("points")[0];
        divPoints.innerHTML=sorted[i].points;
        }
        else{
            let divElement=document.getElementById('positions');
            const S1=document.createElement("div")
            S1.setAttribute("id",identi);
            divElement.append(S1);
            document.getElementById(identi).classList.add('standings');
            let S2=document.getElementById(identi);
            const S3=document.createElement("div");
            S3.innerHTML=i+1;
            S3.setAttribute("class","num");
            S2.append(S3);
            const S4=document.createElement("div");
            S4.setAttribute("class","avatar");
            S2.append(S4);
            displayImage(sorted[i].avatar,identi);
            const S5=document.createElement("div");
            S5.innerHTML=sorted[i].name;
            S5.setAttribute("class","name");
            S2.append(S5);
            const S6=document.createElement("div");
            S6.innerHTML=sorted[i].points;
            S6.setAttribute("class","points");
            S2.append(S6);
        }
    }
    }
})