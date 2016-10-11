	function downloadandroid(){
		window.location.href="http://qdzs.jxict.cn/app/qdzs.apk";
	}
	function downloadios(){
		var ua = navigator.userAgent.toLowerCase(),
        tipsLayer = document.querySelector(".tips");
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            tipsLayer.style.display = "block";
        }else{
			window.location.href="itms-services://?action=download-manifest&url=https://baihaibo.github.io/jxydios/qdzs.plist";
		}	
	}
	


