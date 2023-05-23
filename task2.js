let a=document.getElementById("image1");
fetch('https://www.coursehubiitg.in/api/codingweek/contributions').then((response)=>{
    return response.json();
}
).then((data)=>{
    // Tried to sort data but not working so doing it manually
    // for(let i=0;i<8;i++){
    //     for(let j=0;j<8-i;j++){
    //         if(parseInt(data[i].points)>parseInt(data[i+1].points)){
    //             let temp=data[i];
    //             data[i]=data[i+1];
    //             data[i+1]=temp;
    //         }
    //     }
    // }
    // console.log(data);
    function displayImage(pic,iden) {
        let divLocation = document.getElementById(iden);
        let imgElement = document.createElement("img");
        imgElement.src = pic
        divLocation.append(imgElement);
    }
    ident="image1";
    displayImage(data[4].avatar,ident);
    let divName=document.getElementById("nameplate1_text");
    divName.innerHTML=data[4].name;
    let divPoints=document.getElementById("nameplate1_points");
    divPoints.innerHTML=data[4].points;
    ident="image2";
    displayImage(data[5].avatar,ident);
    let divName2=document.getElementById("nameplate2_text");
    divName2.innerHTML=data[5].name;
    let divPoints2=document.getElementById("nameplate2_points");
    divPoints2.innerHTML=data[5].points;
    ident="image3";
    displayImage(data[7].avatar,ident);
    let divName3=document.getElementById("nameplate3_text");
    divName3.innerHTML=data[7].name;
    let divPoints3=document.getElementById("nameplate3_points");
    divPoints3.innerHTML=data[7].points;
    ident="avatar1";
    displayImage(data[2].avatar,ident);
    let divName4=document.getElementById("name1");
    divName4.innerHTML=data[2].name;
    let divPoints4=document.getElementById("score1");
    divPoints4.innerHTML=data[2].points;
    ident="avatar2";
    displayImage(data[1].avatar,ident);
    let divName5=document.getElementById("name2");
    divName5.innerHTML=data[1].name;
    let divPoints5=document.getElementById("score2");
    divPoints5.innerHTML=data[1].points;
    ident="avatar3";
    displayImage(data[0].avatar,ident);
    let divName6=document.getElementById("name3");
    divName6.innerHTML=data[0].name;
    let divPoints6=document.getElementById("score3");
    divPoints6.innerHTML=data[0].points;
    ident="avatar4";
    displayImage(data[6].avatar,ident);
    let divName7=document.getElementById("name4");
    divName7.innerHTML=data[6].name;
    let divPoints7=document.getElementById("score4");
    divPoints7.innerHTML=data[6].points;
    ident="avatar5";
    displayImage(data[3].avatar,ident);
    let divName8=document.getElementById("name5");
    divName8.innerHTML=data[3].name;
    let divPoints8=document.getElementById("score5");
    divPoints8.innerHTML=data[3].points;
    ident="avatar6";
    displayImage(data[8].avatar,ident);
    let divName9=document.getElementById("name6");
    divName9.innerHTML=data[8].name;
    let divPoints9=document.getElementById("score6");
    divPoints9.innerHTML=data[8].points;

}
)