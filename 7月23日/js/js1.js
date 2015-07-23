/**
 * Created by q4156_000 on 2015/7/23.
 */
var arr1=document.forms[0].getElementsByTagName("input");
//var z1,z2,z3,z4,z5,z6,z7,z8,z9,z10,z11,z12,z13,z14;
var z1=0;
var z2=0;
var z3=0;
var z4=0;
var z5=0;
var z6=0;
var z7=0;
var z8=0;
var z9=0;
var z10=0;
var z11=0;
var z12=0;
var z13=0;
var z14=0;
var zr=0;
var login=document.getElementById("login");
login.disabled=true;


//用户名
var hint11= document.getElementById("hint11");
var hint12= document.getElementById("hint12");
var hint13= document.getElementById("hint13");
var hint14= document.getElementById("hint14");
function fun11(){
    hint11.style.display="inline-block";
    hint12.style.display="none";
    hint13.style.display="none";
    hint14.style.display="none";
    arr1[0].style.background="#fefccc";
    arr1[0].style.border="1px solid #c5c0a3";
}
function fun12(){
    z1=0;
    hint11.style.display="none";
    var v1=arr1[0].value;
    if(v1.length==0){
        hint12.style.display="inline-block";
        hint13.style.display="none";
        hint14.style.display="none";
        arr1[0].style.background="#f8e0e0";
        arr1[0].style.border="1px solid #b09a9d";
    }
    else if(v1.length>=6&&v1.length<=10){
        hint12.style.display="none";
        hint13.style.display="none";
        hint14.style.display="inline-block";
        arr1[0].style.background="#f8f8f8";
        arr1[0].style.border="1px solid #bababa";
        z1=1;
        zr= z1+z2+z3+z4+z5+z6+z7+z8+z9+z10+z11+z12+z13+z14;
        //alert(zr)
        if(zr==14){
            login.disabled=false;

        }
    }
    else{
        hint12.style.display="none";
        hint13.style.display="inline-block";
        hint14.style.display="none";
        arr1[0].style.background="#f8e0e0";
        arr1[0].style.border="1px solid #b09a9d";
    }
}
//用户名 end

//密码
var hint21= document.getElementById("hint21");
var hint22= document.getElementById("hint22");
var hint23= document.getElementById("hint23");
var hint24= document.getElementById("hint24");

function fun21(){
    hint21.style.display="inline-block";
    hint22.style.display="none";
    hint23.style.display="none";
    hint24.style.display="none";
    arr1[1].style.background="#fefccc";
    arr1[1].style.border="1px solid #c5c0a3";
}
var pw;
function fun22(){
    z2=0;
    hint21.style.display="none";
    var v1=arr1[1].value;
    if(v1.length==0){
        hint22.style.display="inline-block";
        hint23.style.display="none";
        hint24.style.display="none";
        arr1[1].style.background="#f8e0e0";
        arr1[1].style.border="1px solid #b09a9d";
    }
    else if(v1.length>=6&&v1.length<=10){
        z2=1;
        zr= z1+z2+z3+z4+z5+z6+z7+z8+z9+z10+z11+z12+z13+z14;
        if(zr==14){
            login.disabled=false;
        }
        hint22.style.display="none";
        hint23.style.display="none";
        hint24.style.display="inline-block";
        arr1[1].style.background="#f8f8f8";
        arr1[1].style.border="1px solid #bababa";
        pw=v1;
    }
    else{
        hint12.style.display="none";
        hint13.style.display="inline-block";
        hint14.style.display="none";
        arr1[1].style.background="#f8e0e0";
        arr1[1].style.border="1px solid #b09a9d";
    }
}

//重复密码
var hint31= document.getElementById("hint31");
var hint32= document.getElementById("hint32");
var hint33= document.getElementById("hint33");
var hint34= document.getElementById("hint34");
function fun31(){
    hint31.style.display="inline-block";
    hint32.style.display="none";
    hint33.style.display="none";
    hint34.style.display="none";
    arr1[2].style.background="#fefccc";
    arr1[3].style.border="1px solid #c5c0a3";
}

function fun32(){
    z3=0;
    hint31.style.display="none";
    var v1=arr1[2].value;
    if(v1.length==0){
        hint32.style.display="inline-block";
        hint33.style.display="none";
        hint34.style.display="none";
        arr1[2].style.background="#f8e0e0";
        arr1[2].style.border="1px solid #b09a9d";
    }
    else if(v1==pw){
        z3=1;
        zr= z1+z2+z3+z4+z5+z6+z7+z8+z9+z10+z11+z12+z13+z14;
        if(zr==14){
            login.disabled=false;
        }
        hint32.style.display="none";
        hint33.style.display="none";
        hint34.style.display="inline-block";
        arr1[2].style.background="#f8f8f8";
        arr1[2].style.border="1px solid #bababa";
    }
    else{
        hint32.style.display="none";
        hint33.style.display="inline-block";
        hint34.style.display="none";
        arr1[2].style.background="#f8e0e0";
        arr1[2].style.border="1px solid #b09a9d";
    }
}

//性别
var hint41= document.getElementById("hint41");
function fun41(){
    hint41.style.display="inline-block";
    z4=1;
    zr= z1+z2+z3+z4+z5+z6+z7+z8+z9+z10+z11+z12+z13+z14;
    if(zr==14){
        login.disabled=false;
    }
}

var hint51= document.getElementById("hint51");
var hint52= document.getElementById("hint52");
var hint53= document.getElementById("hint53");
function fun51(){
    z5=0;
    var v2=arr1[5].value;
    var v1=Number(v2);
    if(v2.length==0){
        hint52.style.display="inline-block";
        hint51.style.display="none";
        hint53.style.display="none";
        arr1[5].style.background="#f8e0e0";
        arr1[5].style.border="1px solid #b09a9d";
    }
    else{
        if(v1>0&&v1<100){
            hint52.style.display="none";
            hint51.style.display="none";
            hint53.style.display="inline-block";
            arr1[5].style.background="#f8f8f8";
            arr1[5].style.border="1px solid #bababa";
            z5=1;
            zr= z1+z2+z3+z4+z5+z6+z7+z8+z9+z10+z11+z12+z13+z14;
            if(zr==14){
                login.disabled=false;
            }
        }
        else{
            hint52.style.display="none";
            hint51.style.display="inline-block";
            hint53.style.display="none";
            arr1[5].style.background="#f8e0e0";
            arr1[5].style.border="1px solid #b09a9d";
        }
    }
}

//出生日期
var hint61= document.getElementById("hint61");
var hint62= document.getElementById("hint62");
var hint63= document.getElementById("hint63");
var hint64= document.getElementById("hint64");
function fun61(){
    hint61.style.display="inline-block";
    hint62.style.display="none";
    hint63.style.display="none";
    hint64.style.display="none";
    arr1[6].style.background="#fefccc";
    arr1[6].style.border="1px solid #c5c0a3";
}
function fun62(){
    z6=0;
    hint61.style.display="none";
    var v1=arr1[6].value;
    var a1=v1.split("-");
    var b1=Number(a1[0]);
    var b2=Number(a1[1]);
    var b3=Number(a1[2]);

    if(v1.length==0){
        hint62.style.display="inline-block";
        hint63.style.display="none";
        hint64.style.display="none";
        arr1[6].style.background="#f8e0e0";
        arr1[6].style.border="1px solid #b09a9d";
    }
    else{
        if(a1[0].length==4&&a1[1].length==2&&a1[2].length==2&&b1>1990&&b1<2016&&b2>0&&b2<13&&b3>0&&b3<31){
            hint64.style.display="inline-block";
            hint62.style.display="none";
            hint63.style.display="none";
            arr1[0].style.background="#f8f8f8";
            arr1[0].style.border="1px solid #bababa";
            z6=1;
            zr= z1+z2+z3+z4+z5+z6+z7+z8+z9+z10+z11+z12+z13+z14;
            if(zr==14){
                login.disabled=false;
            }
        }
        else{
            hint62.style.display="none";
            hint63.style.display="inline-block";
            hint64.style.display="none";
            arr1[6].style.background="#f8e0e0";
            arr1[6].style.border="1px solid #b09a9d";
        }
    }
}
//身份证号
var hint71= document.getElementById("hint71");
var hint72= document.getElementById("hint72");
var hint73= document.getElementById("hint73");

function fun71(){
    z7=0;
    var v1=arr1[7].value;
    if(v1.length==0){
        hint71.style.display="inline-block";
        hint72.style.display="none";
        hint73.style.display="none";
        arr1[7].style.background="#f8e0e0";
        arr1[7].style.border="1px solid #b09a9d";
    }
    else{
        for(var i=0;i<v1.length;i++){
            if(v1.charCodeAt(i)>=48&&v1.charCodeAt(i)<=58&&v1.length==18){
                hint71.style.display="none";
                hint72.style.display="none";
                hint73.style.display="inline-block";
                arr1[7].style.background="#f8f8f8";
                arr1[7].style.border="1px solid #bababa";
                z7=1;
                zr= z1+z2+z3+z4+z5+z6+z7+z8+z9+z10+z11+z12+z13+z14;
                if(zr==14){
                    login.disabled=false;
                }
            }
            else{
                hint71.style.display="none";
                hint72.style.display="inline-block";
                hint73.style.display="none";
                arr1[7].style.background="#f8e0e0";
                arr1[7].style.border="1px solid #b09a9d";
            }
        }
    }
}


//电子邮箱
var hint81= document.getElementById("hint81");
var hint82= document.getElementById("hint82");
var hint83= document.getElementById("hint83");
function fun81(){
    hint83.style.display="inline-block";
    hint81.style.display="none";
    hint82.style.display="none";
    arr1[8].style.background="#fefccc";
    arr1[8].style.border="1px solid #c5c0a3";
}

function fun82(){
    hint83.style.display="none";
    z8=0;
    var v1=arr1[8].value;
    var b1=v1.indexOf("@");
    if(b1!=-1){
        var a1=v1.split("@");
        if(a1[0].length>0&&a1[1].length>0){
            hint81.style.display="none";
            hint82.style.display="inline-block";
            arr1[8].style.background="#f8f8f8";
            arr1[8].style.border="1px solid #bababa";
            z8=1;
            zr= z1+z2+z3+z4+z5+z6+z7+z8+z9+z10+z11+z12+z13+z14;
            if(zr==14){
                login.disabled=false;
            }
        }
        else{
            hint82.style.display="none";
            hint81.style.display="inline-block";
            arr1[8].style.background="#f8e0e0";
            arr1[8].style.border="1px solid #b09a9d";
        }
    }
    else{
        hint82.style.display="none";
        hint81.style.display="inline-block";
        arr1[8].style.background="#f8e0e0";
        arr1[8].style.border="1px solid #b09a9d";
    }
}


//专业
var arr2=document.forms[0].getElementsByTagName("select");
var major=[ ["电气工程", "电机与电器", "电力系统及其自动化", "高电压与绝缘技术", "电力电子与电力传动", "电工理论与新技术"],
              ["基础数学", "计算数学", "概率论与数理统计", "应用数学", "运筹学与控制论"],
             [" 安全技术及工程", "石油与天然气工程", "油气井工程", "油气田开发工程", "油气储运工程", "纺织科学与工程"]]
function fun91(){
    var a1=0;
    var options1="";
    for(var i=0;i<arr2[0].length;i++){
        if(arr2[0].options[i].selected){
            a1=i-1;
        }
    }
    for(var j=0;j<major.length;j++){
        options1+=  "<option>"+major[a1][j]+"</option>"
    }
    arr2[1].innerHTML=options1;
    z9=1;
    zr= z1+z2+z3+z4+z5+z6+z7+z8+z9+z10+z11+z12+z13+z14;
    if(zr==14){
        login.disabled=false;
    }
}

var hint101= document.getElementById("hint101");
var hint102= document.getElementById("hint102");
var hint103= document.getElementById("hint103");
function fun101(){
    hint101.style.display="inline-block";
    hint102.style.display="none";
    hint103.style.display="none";
}
function fun102(){
    z10=0;
    var v1=arr1[9].value;
    if(v1.length==0){
        hint101.style.display="none";
        hint102.style.display="inline-block";
        hint103.style.display="none";
    }
  else{
        hint101.style.display="none";
        hint102.style.display="none";
        hint103.style.display="inline-block";
        z10=1;
        zr= z1+z2+z3+z4+z5+z6+z7+z8+z9+z10+z11+z12+z13+z14;
        if(zr==14){
            login.disabled=false;
        }
    }
}

var hint111= document.getElementById("hint111");
var hint121= document.getElementById("hint121");
var hint131= document.getElementById("hint131");
function fun111(){
    z11=0;
    var v1=arr1[11].value;
    if(v1.length>0){
        for(i=0;i<v1.length;i++) {
            if (v1.charCodeAt(i) >= 48 && v1.charCodeAt(i) <= 58) {
                hint111.style.opacity = "0";
                arr1[11].style.background="#f8f8f8";
                arr1[11].style.border="1px solid #bababa";
                z11=1;
                zr= z1+z2+z3+z4+z5+z6+z7+z8+z9+z10+z11+z12+z13+z14;
                if(zr==14){
                    login.disabled=false;
                }
            }
            else{
                hint111.style.opacity = "1";
                arr1[11].style.background="#f8e0e0";
                arr1[11].style.border="1px solid #b09a9d";
            }
        }
    }
    else{
        hint111.style.opacity = "1";
        arr1[11].style.background="#f8e0e0";
        arr1[11].style.border="1px solid #b09a9d";
    }
}

function fun121(){
    z12=0;
    var v1=arr1[12].value;
    if(v1.length>0){
        for(i=0;i<v1.length;i++) {
            if (v1.charCodeAt(i) >= 48 && v1.charCodeAt(i) <= 58) {
                hint121.style.opacity = "0";
                arr1[12].style.background="#f8f8f8";
                arr1[12].style.border="1px solid #bababa";
                z12=1;
                zr= z1+z2+z3+z4+z5+z6+z7+z8+z9+z10+z11+z12+z13+z14;
                if(zr==14){
                    login.disabled=false;
                }
            }
            else{
                hint121.style.opacity = "1";
                arr1[12].style.background="#f8e0e0";
                arr1[12].style.border="1px solid #b09a9d";
            }
        }
    }
    else{
        hint121.style.opacity = "1";
        arr1[12].style.background="#f8e0e0";
        arr1[12].style.border="1px solid #b09a9d";
    }
}

function fun131(){
    z13=0;
    var v1=arr1[13].value;
    if(v1.length>0){
        for(i=0;i<v1.length;i++) {
            if (v1.charCodeAt(i) >= 48 && v1.charCodeAt(i) <= 58) {
                hint131.style.opacity = "0";
                arr1[13].style.background="#f8f8f8";
                arr1[13].style.border="1px solid #bababa";
                z13=1;
                zr= z1+z2+z3+z4+z5+z6+z7+z8+z9+z10+z11+z12+z13+z14;
                if(zr==14){
                    login.disabled=false;
                }
            }
            else{
                hint131.style.opacity = "1";
                arr1[13].style.background="#f8e0e0";
                arr1[13].style.border="1px solid #b09a9d";
            }
        }
    }
    else{
        hint131.style.opacity = "1";
        arr1[13].style.background="#f8e0e0";
        arr1[13].style.border="1px solid #b09a9d";
    }
}

var love=document.getElementsByName("love");
var hint141= document.getElementById("hint141");
function fun141(){
    z14=0;
    var h1=0;
   for(var i=0;i<love.length;i++){
       if(love[i].checked){
           h1+=1;
       }
   }
    if(h1>=3){
        hint141.style.opacity = "0";
        z14=1;
        zr= z1+z2+z3+z4+z5+z6+z7+z8+z9+z10+z11+z12+z13+z14;
        if(zr==14){
            login.disabled=false;
        }
    }
    else{
        hint141.style.opacity = "1";
    }
}

var date=document.getElementById("date");
var date1=new Date();
var year=date1.getFullYear();
var mon=date1.getMonth()+1;
var day=date1.getDate();
date.innerHTML=year+"-"+mon+"-"+day;

function confirm() {
    var c1 = document.getElementsByName("sex");
    var s1 = ""
    if (c1[0].checked) {
        s1 = c1[0].value;
    }
    else {
        s1 = c1[1].value;
    }
    var show = document.getElementById("show");
    show.style.display = "block";

    var l1="";
    for(var j=0;j<love.length;j++){
        if(love[j].checked){
            l1+=love[j].value+"　";
     }
    }

    show.innerHTML =
        "<div>你的用户名是：" + "<span style='color: blue'>" + arr1[0].value + "</span>" + "</div>" +
        "<div>你的性别是：" + "<span style='color: blue'>" + s1 + "</span>" + "</div>" +
        "<div>你的年龄是：" + "<span style='color: blue'>" + arr1[5].value + "</span>" + "</div>" +
        "<div>你的出生日期是：" + "<span style='color: blue'>" + arr1[6].value + "</span>" + "</div>" +
        "<div>你的身份证号是是："+"<span style='color: blue'>"+arr1[7].value+"</span>"+"</div>"+
        "<div>你的电子邮箱是："+"<span style='color: blue'>"+arr1[8].value+"</span>"+"</div>"+
        "<div>你的学校是："+"<span style='color: blue'>"+arr2[0].value+"</span>"+"</div>"+
        "<div>你的专业是："+"<span style='color: blue'>"+arr2[1].value+"</span>"+"</div>"+
        "<div>你的电话是："+"<span style='color: blue'>"+"+"+arr1[10].value+"-"+arr1[11].value+"-"+arr1[12].value+"-"+arr1[13].value+"</span>"+"</div>"+
        "<div>你的兴趣爱好是："+"<span style='color: blue'>"+l1+"</span>"+"</div>"
}


