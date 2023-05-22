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
		background:#04192f;
		position:absolute;
		flex-direction:column;
		font-family:goodone;
		align-items:center;
		justify-content:center;
	`,
	onadded(){
		this.addChild(background);
		this.addChild(content);
	}
})
const content = makeElement('content',{
	storageref:firebase.storage().ref(),
	productsref:firebase.database().ref('products'),
	newProductsRef(string){
		return firebase.database().ref(`products/${string}`);
	},
	style:`
		position:absolute;
		display:flex;
		flex-direction:column;
	`,
	innerHTML:`
		<div>
			<div
			style="
				background:white;
				padding:20px;
				display:flex;
				align-items:center;
				font-weight:bold;
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
		</div>
		<div id=body
		style="
			display:flex;
			height:100%;
			width:100%;
		"
		></div>
	`,
	onadded(){
		const body = this.find('#body');
		body.addChild(leftSide);
		body.addChild(centerSide);
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
		<div class=button id=find
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
		id:'newStokOpen',
		style:`
			background:#ececec;
			padding:20px;
		`,
		innerHTML:`
			<div>
				<div>
					<span>Nama Barang</span>
				</div>
				<div>
					<input placeholder=Nama_barang... id=name>
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
			padding-bottom:10px;
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
								console.log(innerDatain);
								this.addChild(makeElement('div',{
									data:innerDatain,
									style:`
										width:47%;
										padding:10px;
										background:white;
									`,
									onmouseover(){
										this.style.background = 'beige';
									},
									onmouseleave(){
										this.style.background = 'white';
									},
									onclick(){
										openMenuPreview(this.data);
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

const processData = function(d,target=0){
	const labelmap = ['Stok','PENDING','JOB','DONE'];
	centerSide.find('#loading').remove();
	centerSide.addChild(makeElement('div',{
		innerHTML:`${labelmap[target]}`,
		style:`
			margin-bottom:10px;
			position:sticky;
			top:0;
			background:white;
			margin-top:10px;
		`
	}))
	const data = [];
	Object.keys(d).forEach(key=>{
		data.push(Object.assign(d[key],{key}));
	});
	const normalizedData = normalizeData(data);
	centerSide.addChild(gmenus(normalizedData));
	if(data.length===0){
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
	content.productsref.get().then(data=>{
		data = data.val();
		if(!data){
			datanull();
		}else{
			processData(data,target);
		}
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