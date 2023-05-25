const background = makeElement('img',{
	src:'/file?fn=wood-g71d4f0bb7_1920.jpg',
	style:`
		width:100%;
		height:100%;
		object-fit:cover;
		position:relative;
	`,
});
const main = makeElement('main',{
	style:`
		display:flex;
		width:100%;
		height:100%;
		background:aliceblue;
		position:absolute;
		flex-direction:column;
		font-family:goodone;
		align-items:center;
		justify-content:center;
	`,
	onadded(){
		//this.addChild(background);
		this.addChild(content);
	}
})
const content = makeElement('content',{
	storageref:firebase.storage().ref(),
	productsref:firebase.database().ref('products'),
	sellsref:firebase.database().ref('orders/sells'),
	buysref:firebase.database().ref('orders/buys'),
	donesref:firebase.database().ref('orders/dones'),
	newProductsRef(string){
		return firebase.database().ref(`products/${string}`);
	},
	style:`
		position:absolute;
		display:flex;
		flex-direction:column;
	`,
	innerHTML:`
		<div
		style="
			height:10%;
		"
		>
			<div
			style="
				background:white;
				padding:0 20px;
				display:flex;
				align-items:center;
				font-weight:bold;
				height:100%;
				justify-content:space-between;
			"
			>	
				<div
				style="
					display:flex;
					align-items:center;
					padding:5px 10px;
					border-radius:20px;
				"
				>
					<img src=file?fn=diaphragm(1).png
					style="
						width:32px;
						height:32px;
						margin-right:10px;
						object-fit:cover;
					">
					<span>FF STORE ADMIN</span>
				</div>
				<div
				style="
					align-items:center;
					gap:10px;
					padding:5px 10px;
					border-radius:20px;
					background:#ececec;
					justify-content:space-around;
				"
				id=screeningbuttons
				>
					<img src=file?fn=width.png
					style="
						width:20px;
						height:20px;
						object-fit:cover;
						padding:5px;
						border:1px solid black;
						border-radius:50%;
						cursor:pointer;
						background:white;
					"
					id=width
					>
					<img src=file?fn=height.png
					style="
						width:18px;
						height:18px;
						object-fit:cover;
						padding:5px;
						border:1px solid black;
						border-radius:50%;
						cursor:pointer;
						background:white;
					"
					id=height
					>
				</div>
			</div>
		</div>
		<div id=body
		style="
			display:flex;
			height:90%;
			width:100%;
		"
		></div>
	`,
	screeningmapping:{
		width(){
			this.wCondition = this.wCondition?false:true;
			content.style.width = !this.wCondition?'60%':'100%';
		},
		wCondition:false,
		hCondition:false,
		height(){
			this.hCondition = this.hCondition?false:true;
			content.style.height = !this.hCondition?'80%':'100%';
		}
	},
	onadded(){
		const body = this.find('#body');
		body.addChild(leftSide);
		body.addChild(centerSide);
		//screeningbuttons setups.
		this.findall('#screeningbuttons img').forEach(button=>{
			button.onclick = this.screeningmapping[button.id];
		})
	}
})


const leftSide = makeElement('div',{
	id:`leftSide`,
	innerHTML:`
		<div class=button id=stok
		style="
			padding:10px;
			background:white;
			display:flex;
			align-items:center;
			justify-content:center;
			margin-bottom:10px;
			flex-direction:column;
			width:80%;
			cursor:pointer;
		"
		>
			<img src=/file?fn=photography.png
			style="
				width:24px;
				height:24px;
				margin-bottom:5px;
			"
			>
			<div>Stok</div>
		</div>
		<div class=button id=newstok
		style="
			padding:10px;
			background:white;
			display:flex;
			align-items:center;
			justify-content:center;
			margin-bottom:10px;
			flex-direction:column;
			width:80%;
			cursor:pointer;
		"
		>
			<img src=/file?fn=new.png
			style="
				width:24px;
				height:24px;
				margin-bottom:5px;
			"
			>
			<div>Tambah</div>
		</div>
		<div class=button id=market
		style="
			padding:10px;
			background:white;
			display:flex;
			align-items:center;
			justify-content:center;
			margin-bottom:10px;
			flex-direction:column;
			width:80%;
			cursor:pointer;
		"
		>
			<img src=/file?fn=search.png
			style="
				width:24px;
				height:24px;
				margin-bottom:5px;
			"
			>
			<div>Cari</div>
		</div>
		<div class=button id=order
		style="
			padding:10px;
			background:white;
			display:flex;
			align-items:center;
			justify-content:center;
			margin-bottom:10px;
			flex-direction:column;
			width:80%;
			cursor:pointer;
		"
		>
			<img src=/file?fn=pending.png
			style="
				width:24px;
				height:24px;
				margin-bottom:5px;
			"
			>
			<div>Pesanan</div>
		</div>
		<div class=button id=done
		style="
			padding:10px;
			background:white;
			display:flex;
			align-items:center;
			justify-content:center;
			margin-bottom:10px;
			flex-direction:column;
			width:80%;
			cursor:pointer;
		"
		>
			<img src=/file?fn=received.png
			style="
				width:24px;
				height:24px;
			"
			>
			DONE
		</div>
	`,
	onadded(){
		const map = {
			stok(){
				loadData(0)
			},
			newstok(){
				newStokOpen();
			},
			market(){
				loadData(1)
			},
			order(){
				loadData(2);
			},
			done(){
				loadData(3);
			}
		};
		this.findall('.button').forEach(button=>{
			button.onclick = ()=>{
				centerSide.clear();
				map[button.id]();
			}
		})
	}
});

const newStokOpen = function(){
	centerSide.addChild(makeElement('div',{
		innerHTML:'Barang Baru',
		style:`
			margin-bottom:10px;
			position:sticky;
			top:0;
			background:white;
			margin-top:10px;
			margin-left:10px;
		`
	}))
	centerSide.addChild(makeElement('div',{
		id:'newStokOpen',
		style:`
			border:3px solid #ececec;
			padding:20px;
			border-radius:20px;
			margin:0 10px;
		`,
		innerHTML:`
			<div>
				<div>
					<span>Nama Barang</span>
				</div>
				<div>
					<input placeholder=Nama_Barang... id=name>
				</div>
			</div>
			<div>
				<div>
					<span>Harga Barang</span>
				</div>
				<div>
					<input placeholder=Harga_Barang... type=number id=price>
				</div>
			</div>
			<div>
				<div>
					<span>Deskripsi Barang</span>
				</div>
				<div>
					<textarea id=stuffDescription placeholder=Deskripsi_Barang style=outline:none></textarea>
				</div>
			</div>
			<div>
				<div>
					<span>Thumbnail Barang</span>
				</div>
				<div>
					<input type=file id=thumbnails>
				</div>
			</div>
			<div>
				<div>
					<span>Showcase Barang</span>
				</div>
				<div>
					<input type=file multiple id=showcases>
				</div>
			</div>
			<div
			style="
				margin-top:20px;
			"
			>
				<div>
					<span id=saveButton
					class=akarabutton
					style="
						background:black;
						border-radius:30px;
					"
					>
						Simpan
					</span>
				</div>
			</div>
		`,
		collect(){
			const thumbnails = this.find('#thumbnails').files[0];
			const showcases = this.find('#showcases').files;
			const data = {
				name:this.find('#name').value,
				price:this.find('#price').value,
				description:this.find('#stuffDescription').value,
				thumbnails,
				showcases,
				productId:`product${getUniqueID()}`
			}
			return data;
		},
		process(){
			main.addChild(openLoading('Memprosess Permintaan Anda',(loading)=>{
				const data = this.collect();
				//start from uploading thumbnails.
				uploadFiles([data.thumbnails],(src)=>{
					data.thumbnails = src[0];
					uploadFiles(data.showcases,(src)=>{
						data.showcases = src;
						content.newProductsRef(data.productId).set(data).then(()=>{
							loading.remove();
							loadData(0);
						})
					})
				})
			}))
			
		},
		onadded(){
			this.find('#saveButton').onclick = ()=>{
				this.process();
			}
		}
	}))
}

const centerSide = makeElement('div',{
	id:'centerSide',
	onadded(){
		loadData();
	}
});
const datanull = function(){
	centerSide.find('#loading').setHTML(`
		Belum Ada Data!
	`)
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
		`,
		onadded(){
			data.forEach((innerData)=>{
				this.addChild(
					makeElement('div',{
						style:`
							display:flex;
							justify-content:space-between;
							margin-top:10px;
						`,
						onadded(){
							this.addOne();
						},
						addOne(){
							innerData.forEach(innerDatain=>{
								this.addChild(makeElement('div',{
									data:innerDatain,
									style:`
										width:47%;
										padding:10px;
										background:white;
									`,
									onmouseover(){
										this.style.background = '#ececec';
									},
									onmouseleave(){
										this.style.background = 'white';
									},
									onclick(){
										if(this.data.additional){
											this.data.additional.update({
												product:this.data.name,
												price:this.data.price
											});
											requestDetails(this.data.additional);
										}else{
											this.openEditMenu();
										}
									},
									openEditMenu(){
										this.editMenuOpened = !this.editMenuOpened?true:false;
										if(this.editMenuOpened){
											this.find('#thumbnail').addChild(makeElement('div',{
												style:`
													position:absolute;
													display:flex;
													padding:5px 10px;
													background:white;
													border-radius:20px;
													align-items:center;
													gap:10px;
												`,
												id:'wannamore',
												innerHTML:`
													<div
													style="
														display:flex;
														align-items:center;
													"
													>
														<img src=/file?fn=pen.png
														style="
															width:24px;
															height:24px;
															cursor:pointer;
														"
														id=editbutton
														>
													</div>
													<div
													style="
														display:flex;
														align-items:center;
													"
													>
														<img src=/file?fn=delete.png
														style="
															width:24px;
															height:24px;
															cursor:pointer;
														"
														id=removebutton
														>
													</div>
												`,
												onadded(){
													this.find('#editbutton').onclick = ()=>{
														openEditingPage(innerDatain);
													}
													this.find('#removebutton').onclick = ()=>{
														removeData();
													}
												}
											}))
										}else this.saveRemove('#wannamore');
									},
									innerHTML:`
										<div
										style="
											width:100%;
											height:200px;
											background:black;
											display:flex;
											align-items:center;
											justify-content:center;
											position:relative;
										"
										id=thumbnail
										>
											<div
											style="
												width:100%;
												height:100%;
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

const openEditingPage = function(data){
	console.log(data);
	centerSide.addChild(makeElement('div',{
		id:'openeditingpage',
		style:`
			position:absolute;
			width:100%;
			height:100%;
			display:flex;
			background:#0000008a;
			top:0;
			justify-content:center;
			align-items:flex-start;
			overflow:auto;
		`,
		innerHTML:`
			<div
			style="
				width:80%;
				background:white;
				border-radius:0 0 20px 20px;
				padding:10px;
				margin-bottom:20px;
			"
			>
				<div
				style="
					display:flex;
					justify-content:flex-end;
					align-items:center;
					margin-bottom:5px;
					padding:10px;
					background:white;
					border-radius:20px;
					gap:10px;
					position:sticky;
					top:0;
				"
				>
					<div
					style="
						background:black;
						padding:5px;
						color:white;
						text-align:center;
						border-radius:20px;
						cursor:pointer;
					"
					>
						<span>Batal</span>
					</div>
					<div
					style="
						background:black;
						padding:5px;
						color:white;
						text-align:center;
						border-radius:20px;
						cursor:pointer;
					"
					>
						<span>Simpan</span>
					</div>
				</div>
				<div
				style="
					display:flex;
					margin-bottom:5px;
					padding:10px;
					background:white;
					border-radius:20px;
					flex-direction:column;
				"
				>
					<div>
						<span>Thumbnail</span>
					</div>
					<div
					style="
						background:#ececec;
						display:flex;
						align-items:center;
						justify-content:center;
						border-radius:20px;
						height:200px;
						overflow:hidden;
					"
					>
						<img src="${data.thumbnails}"
						style="
							height:100%;
							object-fit:cover;
							max-width:100%;
						"
						>
					</div>
				</div>
				<div
				style="
					display:flex;
					justify-content:space-between;
					align-items:center;
					margin-bottom:5px;
					padding:10px;
					background:white;
					border-radius:20px;
				"
				>
					<div>
						<span>Produk</span>
					</div>
					<div
					style="
						text-align:right;
					"
					>
						<input value="${data.name}">
					</div>
				</div>
				<div
				style="
					display:flex;
					justify-content:space-between;
					align-items:center;
					margin-bottom:5px;
					padding:10px;
					background:white;
					border-radius:20px;
				"
				>
					<div>
						<span>Harga</span>
					</div>
					<div
					style="
						text-align:right;
					"
					>
						RP. <input value=${data.price} type=number>
					</div>
				</div>
				<div
				style="
					display:flex;
					justify-content:space-between;
					align-items:center;
					margin-bottom:5px;
					padding:10px;
					background:white;
					border-radius:20px;
				"
				>
					<div>
						<span>Deskripsi</span>
					</div>
					<div
					style="
						text-align:right;
					"
					>
						<textarea>${data.description}</textarea>
					</div>
				</div>
			</div>
		`
	}))
}

const removeData = function(){
	
}

const requestDetails = function(data){
	centerSide.clear();
	centerSide.addChild(makeElement('div',{
		id:'requestDetailsPage',
		style:`
			height:100%;
			padding:0 20px;
			display:flex;
			justify-content:flex-start;
			align-items:flex-start;
			flex-direction:column;
		`,
		innerHTML:`
			<div
			style="
				margin-top:10px;
			"
			>
				<span>Indentitas Pembeli</span>
			</div>
			<div
			style="
				background:#ececec;
				padding:2%;
				max-height:80%;
				width:96%;
				margin-top:10px;
				border-radius:20px;
			"
			>
				<div
				style="
					display:flex;
					justify-content:space-between;
					align-items:center;
					margin-bottom:5px;
					padding:10px;
					background:white;
					border-radius:20px;
				"
				>
					<div>
						<span>Produk</span>
					</div>
					<div
					style="
						text-align:right;
					"
					>
						<span>${data.product}</span>
					</div>
				</div>
				<div
				style="
					display:flex;
					justify-content:space-between;
					align-items:center;
					margin-bottom:5px;
					padding:10px;
					background:white;
					border-radius:20px;
				"
				>
					<div>
						<span>Harga</span>
					</div>
					<div
					style="
						text-align:right;
					"
					>
						<span>RP. ${data.price}</span>
					</div>
				</div>
				<div
				style="
					display:flex;
					justify-content:space-between;
					align-items:center;
					margin-bottom:5px;
					padding:10px;
					background:white;
					border-radius:20px;
				"
				>
					<div>
						<span>Pemesan</span>
					</div>
					<div
					style="
						text-align:right;
					"
					>
						<span>${data.name}</span>
					</div>
				</div>
				<div
				style="
					display:flex;
					justify-content:space-between;
					align-items:center;
					margin-bottom:5px;
					padding:10px;
					background:white;
					border-radius:20px;
				"
				>
					<div>
						<span>Whatsapp</span>
					</div>
					<div
					style="
						text-align:right;
					"
					>
						<span
						style="
							background:#21d821;
							padding:7px;
							color:white;
							border-radius:20px;
						"
						id=chatbutton
						>
							<a href=https://api.whatsapp.com/send?phone=+62${data.wa.slice(1)}&text=HalloBang! target=_blank
							style="
								color:white;
								text-decoration:none;
							"
							>
								Chat
							</a>
						</span>
					</div>
				</div>
				<div
				style="
					display:flex;
					justify-content:space-between;
					align-items:center;
					margin-bottom:5px;
					padding:10px;
					background:white;
					border-radius:20px;
				"
				>
					<div>
						<span>Catatan</span>
					</div>
					<div
					style="
						text-align:right;
					"
					>
						<span>${data.notes}</span>
					</div>
				</div>
				<div
				style="
					display:flex;
					justify-content:space-between;
					align-items:center;
					margin-bottom:5px;
					padding:10px;
					background:white;
					border-radius:20px;
				"
				>
					<div>
						<span>Tipe Transaksi</span>
					</div>
					<div
					style="
						text-align:right;
					"
					>
						<span>${data.typeOrder===0?'Jemput':'Antar'}</span>
					</div>
				</div>
				<div
				style="
					display:flex;
					justify-content:space-between;
					align-items:center;
					margin-bottom:5px;
					padding:10px;
					background:white;
					border-radius:20px;
				"
				>
					<div>
						<span>Waktu Pemesanan</span>
					</div>
					<div
					style="
						text-align:right;
					"
					>
						<span>${data.time}</span>
					</div>
				</div>
			</div>
			<div
			style="
				margin-top:20px;
				display:flex;
				justify-content:flex-end;
				width:100%;
				gap:5px;
			"
			>
				<div
				style="
					width:100%;
					background:black;
					padding:10px;
					border-radius:20px;
					text-align:center;
					cursor:pointer;
				"
					id=donebutton
				>
					<span
					style="
						color:white;
					"
					>Selesai</span>
				</div>
				<div
				style="
					width:100%;
					background:black;
					padding:10px;
					border-radius:20px;
					text-align:center;
					cursor:pointer;
				"
					id=cancelbutton
				>
					<span
					style="
						color:white;
					"
					>Batal</span>
				</div>
				<div
				style="
					width:100%;
					background:black;
					padding:10px;
					border-radius:20px;
					text-align:center;
					cursor:pointer;
				"
					id=closebutton
				>
					<span
					style="
						color:white;
					"
					>Tutup</span>
				</div>
			</div>
		`,
		buttonEvent(){
			this.find('#closebutton').onclick = ()=>{
				this.remove();
				loadData(2);
			}
		},
		onadded(){
			this.buttonEvent();
		}
	}))
}

const normalizeData = function(data){
	const x = [];
	for(let i=0;i<data.length;i+=2){
		const newx = [data[i]];
		if(data[i+1]){
			newx.push(data[i+1]);
		}
		x.push(newx);
	}
	return x;
}

const processData = function(d,target=0,additional){
	const labelmap = ['Stok Barang','Market','Pesanan','DONE'];
	const data = [];
	Object.keys(d).forEach(key=>{
		data.push(Object.assign(d[key],{key}));
	});
	const normalizedData = normalizeData(data);
	centerSide.find('#loading').remove();
	centerSide.addChild(makeElement('div',{
		innerHTML:`<span id=count>${data.length}</span> ${labelmap[target]}`,
		style:`
			position:sticky;
			top:0;
			background:white;
			margin-top:10px;
			margin-left:10px;
		`
	}))
	centerSide.addChild(gmenus(normalizedData,additional));
	if(normalizedData.length===0){
		centerSide.addChild(makeElement('div',{
			innerHTML:`Tidak Ada Data!`,
			style:`
				margin-bottom:10px;
				position:sticky;
				top:0;
				background:white;
			`
		}))
	}
}

const loadData = function(target=0){
	const typemap = ['productsref','sellsref','buysref','donesref'];
	centerSide.clear();
	centerSide.addChild(makeElement('div',{
		id:'loading',
		style:`
			height:100%;
			display:flex;
			align-items:center;
			justify-content:center;
			flex-direction:column;
		`,
		innerHTML:`
			<div>
				<span>Memuat Info!</span>
			</div>
			<div>
				<img src=/file?fn=loadingscreen.gif
				style="
					width:100px;
					height:100px;
					object-fit:cover;
				"
				>
			</div>
		`
	}))
	content[typemap[target]].get().then(data=>{
		data = data.val();
		if(!data){
			datanull();
		}else if(target!=0){
			//getting product data.
			const ccontent = objToArray(data);
			data = [];
			let loopIndex = 0;
			const getall = ()=>{
				content.newProductsRef(ccontent[loopIndex].productId).get().then((product)=>{
					product = product.val();
					product.additional = ccontent[loopIndex];
					data.push(product);
					loopIndex++;
					if(loopIndex<ccontent.length)getall();
					else processData(data,target);
				})
			}
			getall();
		}else processData(data,target);
	})
}

const uploadFiles = function(files,cb){
	//start to upload the files.
	let uploadedLength = 0;
	const fileSrc = [];
	const upload = function(){
		const fileData = {
			file:files[uploadedLength],
			name:files[uploadedLength].name,
			contentType:files[uploadedLength].type
		}
		const task = content.storageref.child(fileData.name).put(fileData.file,fileData.contentType);
		task.then(async res=>{
			fileSrc.push(await res.ref.getDownloadURL());
			uploadedLength++;
			if(files.length>uploadedLength){
				upload();
			}else cb(fileSrc);
		})
	}
	//first trigger!
	upload();
}