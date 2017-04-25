var bankContractDao = {
  init : function(){
    FunTool.getContractResult();
  },
  getContractDao: function(){//响应参数
	    var json ={}
	    var p = {};
	    p.url = "data/fangYuanList.json";
	    p.fun = "FunTool.getContractResult";
	    p.json = JSON.stringify(json);
	    FunTool.getData(p);
  }
}

FunTool.ContractResult= function(data){
  if (JSON.parse(data.data).code == '1') {
      //请求成功

  } else {
      //请求失败
       alert(data.data.message)
  }
}
////////http://192.168.1.103:8088/bpb/services/loginservice/loginauth
$(function(){
  bankContractDao.init();
})


