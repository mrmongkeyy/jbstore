const view = require('./view');
const fm = require('./fileH');
const neworder = require('./handleneworder');
module.exports = [
	{
		mM:'get',
		'/'(req,res){
			view.go('app',req,res);
		}
	},
	{
		mM:'get',
		'/scripts'(req,res){
			fm.do(req,res);
		}
	},
	{
		mM:'get',
		'/file'(req,res){
			fm.do(req,res);
		}
	},
	{
		mM:'get',
		'/admin'(req,res){
			view.go('admin',req,res);
		}
	},
	{
		mM:'get',
		'/bananastore'(req,res){
			view.go('bananastore',req,res);
		}
	}
];
