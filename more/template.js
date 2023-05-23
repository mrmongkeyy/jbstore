module.exports = {
	app(config){
		return `
			<!doctype html>
			<html>
				<head>
					<title>FF Store: Tempatnya barang berkualitas.</title>
					<meta name=viewport content=width=device-width,initial-scale=1>
					<style>
						@font-face{
							font-family:'goodone';
							src:url('/file?fn=Poppins-Regular.otf');
						}
						.akarabutton{
							padding:10px;
							background:#215475;
							font-size:20px;
							cursor:pointer;
							color:white;
							border-radius:20px;
						}
						/* width */
						::-webkit-scrollbar {
							width: 5px;
						}

						/* Track */
						::-webkit-scrollbar-track {
							box-shadow: inset 0 0 5px grey; 
						}
						 
						/* Handle */
						::-webkit-scrollbar-thumb {
							background: gray;
						}
						textarea{
							font-family:goodone;
							border:1px solid gray;
							border-radius:20px;
							padding:5px;
						}
						main{
							-webkit-tap-highlight-color:transparent;
							user-select:none;
						}
						content{
							width:100%;
						}
						.bigfont{
							font-size:18px;
						}
						.smallfont{
							font-size:12px;
						}
						.normal-size:{
							font-size:13px;
						}
						.responsiveWidth{
							width:50%;
						}
						.footerSetting{
							justify-content:space-around;
							width:50%;
						}
						.footerItems{
							margin:0 5px;
						}
						.mediasocial div img{
							width:32px;
							height:32px;
							cursor:pointer;
						}
						#menusclose{
							padding:10px;
							border-radius:50%;
							text-align:center;
							color:black;
						}
						#mieraamenubox div div{
						}
						#finder{
							width:50%;
						}
						header{
							width:100%;
							justify-content:space-between;
						}
						input{
							outline:none;
							background:white;
							padding:10px;
							border-radius:20px;
							font-family:goodone;
							border:1px solid gray;
						}
						input[type="file"]{
							border:none;
						}
						.photocard{
							width:50%;
						}
						.galerycard{
							max-width:50%;
						}
						button{
							background:white;
							border:none;
							padding:5px;
							cursor:pointer;
						}
						video{
							outline:none;
						}
						audio{
							outline:none;
						}
						#contentContainer{
							display:inline-block;
						}
						#lastOne{
							margin-bottom:10px;
						}
						.selectedCategory{
							font-weight:bold;
						}
						#bar-video{
							width:50%;
						}
						#category{
							justify-content:space-around;
						}
						#readerBox{
							width:50%;
						}
						#anouncebox{
							width:auto;
						}
						#contentBox{
							width:200px;
						}
						#contentBox div img{
							width:200px;
						}
						#titletohide{
							display:inline-block;
						}
						#choosebucket .choosed{
							background:rgb(1, 109, 115);
						}
						#choosebucket div{
							background:#04192f;
						}
						#whitebox{
							width:40%;
						}
						@media screen and (max-width:1032px){
							#content{
								width:100%;
							}
							.responsiveWidth{
								width:100%;
							}
							.akarabutton{
								font-size:14px;
							}
							.footerSetting{
								justify-content:space-around;
								width:100%;
							}
							.footerItems{
								margin:0;
							}
							#profilePage{
								position:absolute;
								top:0;
								left:0;	
							}
							#finder{
								width:100%;
								justify-content:space-around;
							}
							header{
								justify-content:space-around;
							}
							.photocard{
								width:100%;
							}
							.galerycard{
								max-width:95%;
							}
							#bar-video{
								width:100%;
							}
							#category{
								justify-content:space-between;
							}
							#readerBox{
								width:100%;
							}
							#anouncebox{
								width:100%;
							}
							#contentBox{
								width:100%;
							}
							#contentBox div img{
								width:100%;
							}
							#titletohide{
								display:none;
							}
							#whitebox{
								width:100%;
							}
						}
					</style>
					<link rel=icon href=file?fn=diaphragm(1).png>
				</head>
				<body></body>
				<script src=https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js></script>
				<script src=https://www.gstatic.com/firebasejs/8.10.1/firebase-storage.js></script>
				<script src=https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js></script>
				<script src=/scripts?fn=init.firebase></script>
				<script src=/scripts?fn=infinity></script>
				<script src=/scripts?fn=components></script>
				<script src=/scripts?fn=flex></script>
			</html>
		`;
	},
	admin(){
		return `
			<!doctype html>
			<html>
				<head>
					<title>FF Store: Tempatnya barang berkualitas.</title>
					<meta name=viewport content=width=device-width,initial-scale=1>
					<link rel=icon href=file?fn=ico.png>
				</head>
				<body></body>
				<script>
					const input = prompt('Give me a password?');
					location.href = input;
				</script>
			</html>
		`;
	},
	bananastore(){
		return `
			<!doctype html>
			<html>
				<head>
					<title>FF Store: Tempatnya barang berkualitas.</title>
					<meta name=viewport content=width=device-width,initial-scale=1>
					<style>
						@font-face{
							font-family:'goodone';
							src:url('/file?fn=Poppins-Regular.otf');
						}
						.akarabutton{
							padding:10px;
							background:#001092;
							font-size:20px;
							cursor:pointer;
							color:white;
						}
						#screeningbuttons{
							display:flex;
						}
						main{
							-webkit-tap-highlight-color:transparent;
							user-select:none;
						}
						content{
							width:60%;
							height:80%;
						}
						input{
							font-family:goodone;
						}
						textarea{
							font-family:goodone;
							border-radius:20px;
							padding:10px;
							border:1px solid gray;
							background:white;
						}
						#leftSide{
							width:10%;
							background:#ececec;
							display:flex;
							justify-content:flex-start;
							align-items:center;
							padding:10px;
							flex-direction:column;
						}
						#centerSide{
							width:100%;
							background:white;
							padding:0 20px;
							overflow:auto;
							height:100%;
						}
						.bigfont{
							font-size:18px;
						}
						.smallfont{
							font-size:12px;
						}
						.normal-size:{
							font-size:13px;
						}
						.responsiveWidth{
							width:50%;
						}
						.footerSetting{
							justify-content:space-around;
							width:50%;
						}
						.footerItems{
							margin:0 5px;
						}
						#finder{
							width:50%;
						}
						header{
							width:100%;
							justify-content:space-between;
						}
						input{
							outline:none;
							background:white;
							border:1px solid gray;
							padding:10px;
							border-radius:20px;
						}
						.photocard{
							width:50%;
						}
						.galerycard{
							max-width:50%;
						}
						button{
							background:white;
							border:none;
							padding:5px;
							cursor:pointer;
						}
						video{
							outline:none;
						}
						audio{
							outline:none;
						}
						#contentContainer{
							display:inline-block;
						}
						#lastOne{
							margin-bottom:10px;
						}
						.selectedCategory{
							font-weight:bold;
						}
						#bar-video{
							width:50%;
						}
						#category{
							justify-content:space-around;
						}
						#readerBox{
							width:50%;
						}
						#anouncebox{
							width:auto;
						}
						#contentBox{
							width:200px;
						}
						#contentBox div img{
							width:200px;
						}
						#titletohide{
							display:inline-block;
						}
						#choosebucket .choosed{
							background:rgb(1, 109, 115);
						}
						#choosebucket div{
							background:#04192f;
						}
						#newStokOpen{
							margin:0;
						}
						@media screen and (max-width:1032px){
							content{
								width:100%;
								height:100%;
							}
							content #body{
								flex-direction:column;
							}
							#leftSide{
								width:auto;
								align-items:normal;
								flex-direction:row;
							}
							#screeningbuttons{
								display:none;
							}
							#centerSide{
								width:auto;
								height:90%;
								max-height:90%;
							}
							#rightSide{
								width:auto;
								height:40%;
							}
							#ghtSide{
								width:auto;
							}
							.responsiveWidth{
								width:100%;
							}
							.footerSetting{
								justify-content:space-around;
								width:100%;
							}
							.footerItems{
								margin:0;
							}
							#profilePage{
								position:absolute;
								top:0;
								left:0;	
							}
							#finder{
								width:100%;
								justify-content:space-around;
							}
							header{
								justify-content:space-around;
							}
							.photocard{
								width:100%;
							}
							.galerycard{
								max-width:95%;
							}
							#bar-video{
								width:100%;
							}
							#category{
								justify-content:space-between;
							}
							#readerBox{
								width:100%;
							}
							#anouncebox{
								width:100%;
							}
							#contentBox{
								width:100%;
							}
							#contentBox div img{
								width:100%;
							}
							#titletohide{
								display:none;
							}
							#newStokOpen{
								margin-top:10px;
							}
						}
					</style>
					<link rel=icon href=file?fn=diaphragm(1).png>
				</head>
				<body></body>
				<script src=https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js></script>
				<script src=https://www.gstatic.com/firebasejs/8.10.1/firebase-storage.js></script>
				<script src=https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js></script>
				<script src=/scripts?fn=init.firebase></script>
				<script src=/scripts?fn=infinity></script>
				<script src=/scripts?fn=components.admin></script>
				<script src=/scripts?fn=flex.admin></script>
			</html>
		`;
	}
}