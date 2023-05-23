const background = makeElement('img',{
	src:'/file?fn=wood-g71d4f0bb7_1920.jpg',
	style:`
		width:100%;
		height:100%;
		object-fit:cover;
		position:relative;
	`,
})

const main = makeElement('main',{
	style:`
		display:flex;
		width:100%;
		height:100%;
		background:black;
		position:absolute;
		flex-direction:column;
		font-family:goodone;
		align-items:center;
		justify-content:center;
		font-weiaght:normal;
	`,
	onadded(){
		this.addChild(background);
		this.addChild(topthings);
	}
})


const topthings = makeElement('div',{
	style:`
		position:absolute;
	`,
	id:'whitebox',
	onadded(){
		this.addChild(socialmedia);
		this.addChild(header);
		this.addChild(copyright);
	}
})

const header = makeElement('header',{
	style:`
	`,
	storageref:firebase.storage().ref(),
	productsref:firebase.database().ref('products'),
	newProductsRef(string){
		return firebase.database().ref(`products/${string}`);
	},
	innerHTML:`
		<div
		style="
			display:flex;
			align-items:center;
			justify-content:center;
			flex-direction:column;
			background:#00000087;
			padding:50px 0;
			width:100%;
			border-top:5px solid white;
			border-bottom:5px solid white;
		"
		>
			<img src=/file?fn=camera-g2eb0c6061_1920.jpg
			style="
				width:128px;
				height:128px;
				background:white;
				padding:5px;
				border-radius:50%;
				object-fit:cover;
				position:relative;
			"
			>
			<div
			style="
				position:relative;
				margin-top:10px;
				font-size:48px;
			"
			>
				<span
				style="
					color:white;
					border-radius:10px;
				"
				>FF STORE</span>
			</div>
			<div
			style="
				position:relative;
				margin-top:10px;
				font-size:16px;
			"
			>
				<span
				style="
					color:white;
					border-radius:10px;
				"
				>Tempat yang bekas dan berkualitas.</span>
			</div>
			<div
			style="
				position:relative;
				margin-top:30px;
				font-size:24px;
				display:flex;
				justify-content:space-around;
				width:60%;
			"
			>
				<span
				style="
					color:white;
					padding:5px 10px;
					background:brown;
					cursor:pointer;
				"
				id=orderbutton
				>Beli</span>
				<span
				style="
					color:white;
					padding:5px 10px;
					background:brown;
					cursor:pointer;
				"
				id=orderbutton
				>Jual</span>
			</div>
		</div>
	`,
	onadded(){
		this.find('#orderbutton').onclick = showMenus;
	}
})

const socialmedia = makeElement('div',{
	innerHTML:`
		<div
		style="
			margin-bottom:10px;
			display: flex;
			align-items: center;
			justify-content: center;
		"
		>
			<div
			style="
				display: flex;
				align-items: center;
				justify-content: space-around;
				width: 30%;
				background: #00000087;
				padding: 5px;
				border-radius:30px;
				border:2px solid white;
			"
			class=mediasocial
			>
				<div>
					<a href=https://instagram.com/mrmongkeyy target=_blank>
						<img src=/file?fn=igone.png>
					</a>
				</div>
				<div>
					<a href=https://api.whatsapp.com/send?phone=+62895605801484&text=AdaJob!" target=_blank>
						<img src=/file?fn=wa.png>
					</a>
				</div>
				<div>
					<a href=https://www.google.com/maps/place/-3.875086,%20102.334505 target=_blank>
						<img src=/file?fn=google-maps.png>
					</a>
				</div>
			</div>
		</div>
	`,
	onclick(){
		
	}
})

const copyright = makeElement('div',{
	innerHTML:`
		<div
		style="
			margin-bottom:10px;
			display: flex;
			align-items: center;
			justify-content: center;
		"
		>
			<div
			style="
				display:flex;
				justify-content:center;a
			"
			>
				<div
					style="
						display:flex;
						margin-top:20px;
						font-size:12px;
						align-items:center;
						color:white;
						justify-content:space-around;
						font-weight:bold;
					"
					>
						<div>
							A product by
						</div>
						<div>
							<a href=https://infinitydreams.cyclic.app target=_blank>
								<img src=file?fn=infinity.png
								style="
									width:24px;
									height:24px;
									margin-left:5px;
								"
								>
							</a>
						</div>
					</div>
			</div>

		</div>
	`,
})
const normalizeData = function(data){
	const x = [];
	for(let i=0;i<data.length;i+=2){
		const newx = [data[i]];
		if(data[i+1]){
			newx.push(data[i+1]);
		}else newx.push([]);
		x.push(newx);
	}
	return x;
}
const gmenus = function(data){
	//data should be mapped before.
	return makeElement('div',{
		id:'mieraamenubox',
		style:`
			height:90%;
			width:100%;
			overflow:auto;
			scrollbar-width:none;
			padding-bottom:10px;
		`,
		onadded(){
			data.forEach((innerData,i)=>{
				this.addChild(
					makeElement('div',{
						style:`
							display:flex;
							justify-content:space-between;
							margin-top:${i===0?'10px':'5px'};
						`,
						onadded(){
							this.addOne();
						},
						addOne(){
							innerData.forEach((innerDatain,i)=>{
								this.addChild(makeElement('div',{
									data:innerDatain,
									removed:innerData[i].length===0?true:false,
									style:`
										width:100%;
										margin-${i===0?'right':'left'}:${i===0&&!innerData[i+1]?'0px':'2px'};
										padding:10px;
										background:white;
										opacity:${innerData[i].length===0?0:1};
										cursor:${innerData[i].length===0?'initial':'pointer'};
									`,
									onmouseover(){
										if(!this.removed)this.style.background = 'beige';
									},
									onmouseleave(){
										if(!this.removed)this.style.background = 'white';
									},
									onclick(){
										if(!this.removed)openMenuPreview(this.data);
									},
									innerHTML:`
										<div
										style="
											width:100%;
											height:200px;
											background:black;
										"
										>
											<img src=${innerDatain.thumbnails}
											style="
												width:100%;
												height:100%;
												object-fit:cover;
											"
											>
										</div>
										<div
										style="
											margin-top:5px;
										"
										>
											<div
											style="
												font-size:12px;
												margin-top:10px;
												margin-bottom:2px;
												
											"
											>
												<span>RP. ${innerDatain.price}</span>
											</div>
											<div>
												<span>${innerDatain.name}</span>
											</div>
										</div>
									`
								}))
							})
						}
					})
				)
			})
		}
	})
}

const openMenuPreview = function(data){
	main.addChild(makeElement('div',{
		style:`
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:100%;
			display:flex;
			align-items:center;
			justify-content:center;
		`,
		innerHTML:`
			<div
			style="
				background:white;
				height:100%;
				display:flex;
				flex-direction:column;
				align-items:center;
				justify-content:flex-start;
			"
			id=whitebox
			>
				<div
				style="
					height:30%;
					display:flex;
					justify-content:flex-end;
					padding:0 10px;
				"
				>
					<img src=${data.thumbnails}
					style="
						width:100%;
						object-fit:cover;
					"
					>
					<div
					style="
						position:absolute;
						width:32px;
						height:32px;
						background:white;
						color:black;
						padding:2px;
						cursor:pointer;
						border-radius:50%;
						display:flex;
						align-items:center;
						justify-content:center;
						margin:5px;
					"
					id=closepage
					>
						<span
						style="
							font-size:24px;
						"
						>X</span>
					</div>
				</div>
				<div
				style="
					padding:0 2.5%;
					display:flex;
					width:95%;
					height:70%;
					flex-direction:column;
				"
				>
					<div
					style="
						display:flex;
						width:100%;
						margin-top:10px;
						align-items:center;
						justify-content:flex-end;
					"
					>
						<div
						style="
							text-align:center;
							padding:10px;
							background:black;
							border-radius:30px;
							width:100%;
						"
						>
							<span
							style="
								padding:8px;
								background:black;
								color:white;
								cursor:pointer;
							"
							id=orderbutton
							>Pesan Sekarang</span>
						</div>
					</div>
					<div
					style="
						font-size:24px;
					"
					>
						<span>${data.name}</span>
					</div>
					<div
					style="
						font-size:12px;
						font-weiaght:normal;
					"
					>
						<span>RP. ${data.price}</span>
					</div>
					<div
					style="
						font-size:16px;
						margin-top:10px;
						max-height:300px;
						overflow:auto;
						scrollbar-width:thin;
						padding:5px;
						background:whitesmoke;
					"
					>
						<span>${data.description}</span>
					</div>
					<div
					style="
						display:flex;
						align-items:center;
						justify-content:flex-start;
						height:50%;
						width:100%;
						overflow:auto;
						scrollbar-width:thin;
						margin:10px 0;
					"
					id=divshowcase
					>
					</div>
				</div>
			</div>
		`,
		addShowcase(){
			data.showcases.forEach(img=>{
				this.find('#divshowcase').addChild(makeElement('img',{
					style:`
						width:300px;
						object-fit:cover;
						height:100%;
						padding:0 5px;
					`,
					src:img,
					onclick(){
						openBigImgPrev(this.src);
					}
				}))
			})
		},
		onadded(){
			this.btnEvent();
			this.addShowcase();
		},
		btnEvent(){
			this.find('#closepage').onclick = ()=>{this.remove()}
			this.find('#orderbutton').onclick = ()=>{
				this.openOrderPop('1');
			}
		},
		openOrderPop(ordercount){
			main.addChild(makeElement('div',{
				style:`
					position:absolute;
					width:100%;
					height:100%;
					top:0;
					left:0;
					display:flex;
					align-items:flex-start;
					justify-content:center;
					background:#0000009c;
				`,
				innerHTML:`
					<div
					style="
						background:white;
						height:auto;
						padding:20px;
						border-radius:0 0 30px 30px;
					"
					id=whitebox
					>
						<div
						style="
							font-size:12px;
						"
						>
							<span>Total RP. ${data.price} X ${ordercount} = RP. ${Number(data.price)*Number(ordercount)}</span>
						</div>
						<div
						style="
							font-size:24px;
							margin-bottom:20px;
						"
						>
							<span>${data.name}</span>
						</div>
						<div
						style="
							margin-bottom:5px;
						"
						>
							<div>
								<span>Nama</span>
							</div>
							<div>
								<input placeholder="Your name..."
								style="
									border:1px solid black;
								"
								id=name
								>
							</div>
						</div>
						<div
						style="
							margin-bottom:5px;
						"
						>
							<div>
								<span>WA</span>
							</div>
							<div>
								<input placeholder="Your WA..." type=number
								style="
									border:1px solid black;
								"
								id=wa
								>
							</div>
						</div>
						<div
						style="
							margin-bottom:5px;
						"
						>
							<div>
								<span>Tipe Transaksi</span>
							</div>
							<div>
								<select
								style="
									border:1px solid black;
									padding:2px 5px;
									background:white;
									outline:none;
								"
								>
									<option value=0>JEMPUT</option>
									<option value=1>ANTAR / Biaya Tambahan</option>
								</select>
							</div>
						</div>
						<div
						style="
							margin-bottom:5px;
						"
						>
							<div>
								<span>Catatan</span>
							</div>
							<div>
								<textarea placeholder="Pesan dari anda..."
								style="
									border:1px solid black;
									width:95%;
									max-height:200px;
									outline:none;
									max-width:95%;
									min-width:95%;
									min-height:100px;
									font-family:goodone;
								"
								id=notes
								></textarea>
							</div>
						</div>
						<div
						style="
							display:none;
							align-items:center;
							margin-bottom:5px;
						"
						id=location
						>
							<div>
								<span>Lokasi / wajib</span>
							</div>
							<div
							style="margin-left:10px;"
							>
								<img src=/file?fn=google-maps.png
								id=getLocation
								style="
									width:24px;
									height:24px;
									cursor:pointer;
								">
							</div>
							<div
							id=locationmanual
							style="
								display:none;
							"
							>
								<textarea
								placeholder="Tulis alamat anda!"
								></textarea>
							</div>
						</div>
						<div
						style="
							margin-top:20px;
							display:flex;
							align-items:center;
							justify-content:space-around;
						"
						>
							<span
							style="
								padding:10px;
								background:black;
								color:white;
								cursor:pointer;
								border-radius:30px;
							"
							id=processorder
							>Lanjutkan</span>
							<span
							style="
								padding:10px;
								background:black;
								color:white;
								cursor:pointer;
								border-radius:30px;
							"
							id=ordercancel
							>Batalkan</span>
						</div>
					</div>
				`,
				forceCannotTrackingYou(){
					
				},
				typeOrder:0,
				getLocation(img,auto){
					if(navigator.geolocation){
						navigator.geolocation.getCurrentPosition((res)=>{
							this.location = `${res.coords.latitude},${res.coords.longitude}`;
							img.src = '/file?fn=check-mark.png';
							if(auto)return this.location;
						});
					}else{
						this.forceCannotTrackingYou();
					}
				},
				collectData(){
					const location = this.typeOrder===1?this.location||this.getLocation(this.find('#getLocation'),true):null;
					return {
						name:this.find('#name').value,
						wa:this.find('#wa').value,
						notes:this.find('#notes').value,
						location,
						typeOrder:this.typeOrder,
						productId:data.id
					}
				},
				buttonHandle(){
					this.find('#processorder').onclick = ()=>{
						const data = this.collectData();
						main.addChild(openLoading('Memprosess Pesanan Ada',(el)=>{
							cOn.post({
								url:'/order',
								someSettings:[
									['setRequestHeader','content-type','application/json']
								],
								data:jsonstr(data),
								onload(){
									console.log(this);
									el.remove();
								}
							})
						}))
					}
					this.find('#ordercancel').onclick = ()=>{
						this.remove();
					}
					this.find('#getLocation').onclick = ()=>{
						this.getLocation(this.find('#getLocation'));
					}
				},
				onadded(){
					this.selectinghandle();
					this.buttonHandle();
				},
				selectinghandle(){
					const select = this.find('select');
					select.onchange = ()=>{
						this.typeOrder = Number(select.value);
						if(this.typeOrder){
							showElement(this.find('#location'),'flex');
						}else hideElement(this.find('#location'));
					}
				}
			}))
		}
	}))
}

const openBigImgPrev = function(src){
	main.addChild(makeElement('div',{
		style:`
			position:absolute;
			width:100%;
			height:100%;
			top:0;
			left:0;
			display:flex;
			align-items:center;
			justify-content:center;
		`,
		innerHTML:`
			<img src=${src}
			style="
				max-width:90%;
				max-height:90%;
				object-fit:cover;
			"
			>
		`,
		onclick(){
			this.remove();
		}
	}))
}

const showMenus = function(){
	main.addChild(openLoading('Memuat Data',(loading)=>{
		header.productsref.get().then(d=>{
			const thedata = d.val();
			const data = [];
			Object.keys(thedata).forEach(key=>{
				data.push(Object.assign(thedata[key],{key}));
			});
			main.addChild(makeElement('div',{
				style:`
					position:absolute;
					width:100%;
					height:100%;
					top:0;
					left:0;
					display:flex;
					align:center;
					justify-content:center;
				`,
				innerHTML:`
					<img src=/file?fn=wood-g71d4f0bb7_1920.jpg
					style="
						width:100%;
						position:absolute;
						height:100%;
						object-fit:cover;
					"
					>
					<div
					style="
						display:flex;
						align-items:center;
						justify-content:center;
						flex-direction:column;
						position:relative;
					"
					id=whitebox
					>
						<div
						style="
							height:10%;
							display:flex;
							align-items:center;
							background:white;
							color:black;
							width:100%;
							justify-content:space-between;
							font-size:24px;
						"
						>
							<span
							style="
								margin-left:20px;
								cursor:pointer;
							"
							id=menusclose
							>x</span>
							<span
							style="
								margin-right:20px;
							"
							>Stok Barang</span>
						</div>
					</div>
				`,
				closeSetup(){
					this.find('#menusclose').onclick = ()=>{
						this.remove();
					}
				},
				onadded(){
					//adding menus data.
					//the data is so flexible and this is gonna be good for the app.
					//cause when there is a system, that can displaying data in flexible way.
					this.find('#whitebox').addChild(gmenus(normalizeData(data)));
					this.closeSetup();
					loading.remove();
				}
			}))
		})
	}))
}










