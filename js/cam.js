const MirrorBtn = document.getElementById("mirrorButton");
let constraints = { video: { width: "400", height: "250", facingMode: "user"}, audio: false};
const cameraView = document.querySelector("#camera--view");
let localstream;

function handleMirrorBtnClick(){
    if(MirrorBtn.innerText === "Mirror on"){
        MirrorBtn.innerText = "Mirror off";
        navigator.mediaDevices.getUserMedia(constraints)
        .then(function(stream){
            cameraView.srcObject = stream;
            localstream=stream;
            cameraView.onloadedmetadata=function(e){
                cameraView.play();
            };
        })
        .catch(function(error){
            console.error("카메라에 문제가 있습니다.", error);
        })
    }else{
        MirrorBtn.innerText = "Mirror on";
        cameraView.pause();
        cameraView.src = "";
        localstream.getTracks()[0].stop();

    }
}

MirrorBtn.addEventListener("click", handleMirrorBtnClick);