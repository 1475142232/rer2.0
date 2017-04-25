var projectUrl = 'http://192.168.1.137:8088/bpb'

$.fn.extend({
			/*表格*/
            createTable : function(json,type){  
		        /*
		            	type:表格的格式(raido:单选,checkbox：复选,空或者缺省:显示序号)
		            	thead:表头
		            	data：服务器返回的JSON数据
						      拟定的json数据结构:
                  var json ={ 
                              'type' : 'radio'(radio:单选/checkbox:复选)
  								            'thead':['#','姓名','性别','年龄'],
                              'id' : 'table'
  								            'data': [{'name':'张三','sex':'男','age':'23'},{'name':'李四','sex':'男','age':'44'},{'name':'王五','sex':'男','age':'55'}]
      						        	  }
						*/
                       var html =  '<table class="table table-striped table-bordered table-hover dataTable"><thead><tr></tr></thead><tbody></tbody></table>'
                       this.append(html)
                       var theadHTML = ''
                       for (var i in json.thead) {
                           theadHTML += '<th>'+json.thead[i]+'</th>'
                       }
                       this.children('table').children('thead').children('tr').append(theadHTML)
                       var tbodyHTML = ''
                       var obj = {}
                       if (type == 'radio') {//单选按钮表格
  	                   		for (var i in json.data) {
                            tbodyHTML +=  '<tr id="'+json.id+i+'"><td><input data-id="tr-'+json.data[i].id+'" type="radio" name="tableCheck" /></td>'
                            obj = json.data[i]
                            for (var o in obj) {
                              tbodyHTML += '<td>'+obj[o]+'</td>'
                            }
                            tbodyHTML += '</tr>'
  		                    }
                          
                       }else if(type  == 'checkbox'){//多选按钮表格
                        	
                          for (var i in json.data) {
                            tbodyHTML +=  '<tr id="'+json.id+i+'"><td><input data-id="tr-'+json.data[i].id+'" type="checkbox" name="tableCheck" /></td>'
                            obj = json.data[i]
                            for (var o in obj) {
                              tbodyHTML += '<td>'+obj[o]+'</td>'
                            }
                            tbodyHTML += '</tr>'
                          }
                       }
                       else{//序号表格
                          for (var i in json.data) {
                            var number = (parseInt(i)+1)
                            tbodyHTML +=  '<tr id="'+json.id+i+'"><td>'+number+'</td>'
                            obj = json.data[i]
                            for (var o in obj) {
                              tbodyHTML += '<td>'+obj[o]+'</td>'
                            }
                            tbodyHTML += '</tr>'
                          }
                       }
                       this.children('table').children('tbody').append(tbodyHTML) ;
                       //$('.dataTable').dataTable();

                       //表格样式调整
                       $('.dataTables_info').css({'height':'70px','line-height':'70px'})//
                       $('.paging_simple_numbers').css({'float':'right'})
                       $('.dataTables_filter label').css({'float':'right'})
                    },
            /*按钮*/
            createButton : function(json){
            	/*
      					json = {
      						'buttonGroup':[{    id='' //按钮的ID
      											name :'确定', //按钮的text
      											ico : '', //按钮的图标
      											fun : '', 
      										}]
      					}
            	*/
              // <div class="btn-group">
              //   <button type="button" class="btn btn-default">Left</button>
              //   <button type="button" class="btn btn-default">Middle</button>
              //   <button type="button" class="btn btn-default">Right</button>
              // </div>
              	var html ='<div class="btn-group">'
              	for(var i in json.buttonGroup)	{
              		if (json.buttonGroup[i].ico != '' && json.buttonGroup[i].ico != undefined) {
              			html +='<button id="'+json.buttonGroup[i].id+'" disabled class="btn btn-white" onclick="'+json.buttonGroup[i].fun+'" type="button"><span class="'+json.buttonGroup[i].ico+'"> </span>&nbsp'+json.buttonGroup[i].name+'</button>'
              		}else{
              		  html +='<button id="'+json.buttonGroup[i].id+'"  class="btn btn-white" onclick="'+json.buttonGroup[i].fun+'" type="button">&nbsp'+json.buttonGroup[i].name+'</button>'
                  }
              	}
                html += '</div>'
                this.append(html)
              },
            /*tab选项卡*/
            createTab : function(json){
            	/*
            		var navData = { 'tabNav':['第一个tab','第二个tab'] ,
						        	'navData' : [{'content' : 'text1!!!!!!!!!!!!!!!!'},
						                         {'content' : 'text2!!!!!!!!!!!!!!!!'}]
						          }
            	*/
            	var html =''
            	var tabhead = '';
            	var tabbody = '';
            	for(var i in json.tabNav ){
            		if (i==0) {
            			tabhead += '<li class="active"><a data-toggle="tab" href="#tab-'+i+'" aria-expanded="true">'+json.tabNav[i]+'</a></li>'
            		}else{
            			tabhead += '<li class=""><a data-toggle="tab" href="#tab-'+i+'" aria-expanded="false">'+json.tabNav[i]+'</a></li>'
            		}	//
            	}
            	for(var i in json.navData ){
            		if (i==0) {
            			tabbody += '<div id="tab-'+i+'" class="tab-pane active"><div class="panel-body"><p>'+json.navData[i].content+'</p></div></div>'  
            		}else{
            			tabbody += '<div id="tab-'+i+'" class="tab-pane"><div class="panel-body"><p>'+json.navData[i].content+'</p></div></div>'  
            		}	 
            	}
            	html += '<ul class="nav nav-tabs">'+tabhead+'</ul><div class="tab-content">'+tabbody+'</div>';
            	this.append(html)
            },
            /*下拉框*/
            createDropdown : function(json){
      			/*
    				json = {
    				          'id' : 'select'
    				          'data': [{'content':'菜单1'},{'content':'菜单2'},{'content':'菜单3'},{'content':'菜单4'},]
    				        }
      			*/  
        			var innerHtml = ''    	  			
      				for (var i in json.data) {
      					innerHtml += '<option>'+json.data[i].content+'</option>'
      				}
      				var html = '<select class="form-control" id="'+json.id+'">'+innerHtml+'</select>';
      				this.append(html)
            },
            createTableList :function(json){  
            /*
                  type:表格的格式(raido:单选,checkbox：复选,空或者缺省:显示序号)
                  thead:表头
                  data：服务器返回的JSON数据
                  拟定的json数据结构:
                  var json ={ 
                              'state' : ['冻结','success']
                              'type' : 'radio'(radio:单选/checkbox:复选)
                              'thead':['#','姓名','性别','年龄'],
                              'id' : 'table'
                              'data': [{'name':'张三','sex':'男','age':'23'},{'name':'李四','sex':'男','age':'44'},{'name':'王五','sex':'男','age':'55'}]
                              }
            */
                       var html =  '<table class="table  table-hover dataTable"><thead style="display:none"><tr></tr></thead><tbody></tbody></table>'
                       this.append(html)
                       var theadHTML = ''
                       for (var i in json.thead) {
                           theadHTML += '<th>'+json.thead[i]+'</th>'
                       }
                       this.children('table').children('thead').children('tr').append(theadHTML)
                       
                      // this.append(html)
                       var tbodyHTML = ''
                       var obj = {}
                      // alert(JSON.stringify(json))
                       for (var i in json.data) {
                          tbodyHTML +='<tr id="'+json.id+i+'">'
                          if (json.type == "checkbox") {
                            tbodyHTML +='<td class="project-status"><input data-id="tr-'+json.data[i].id+'" type="checkbox" name="tableCheck" /></td>'
                          } else {
                            if (json.state != 'undefined'&&json.state != undefined && json.state != [] ) {
                              tbodyHTML +='<td class="project-status"><span class="label label-'+json.state[1]+'">'+json.state[0]+'</span></td>'
                            } else {
                              tbodyHTML +='<td class="project-status"><span class="label label-primary">房源审核</span></td>'
                            }
                          }
                          
                          tbodyHTML +='<td class="project-title "><a class="J_menuItem house_info">江岸区融科天城三期2-2303</a><br/><small>创建于 2014.08.15</small></td>'
                          tbodyHTML +='<td class="project-completion"><small>当前指派人： <span>张三</span></small></td>'
                          tbodyHTML +='<td class="project-people"><span>业主 xxx</span><br/><span class="">联系电话: 13322158578</span></td>'
                          tbodyHTML +='<td class="project-actions">'
                          tbodyHTML +='<div class="btn-group">'
                          tbodyHTML +='<button type="button" class="btn btn-white dropdown-toggle" data-toggle="dropdown">'
                          tbodyHTML +='  操作 <span class="caret"></span>'
                          tbodyHTML +='</button>'
                          tbodyHTML +='<ul class="dropdown-menu" role="menu">'
                          tbodyHTML +='<li class="create-div"><span>编辑</span></li>'
                          tbodyHTML +='<li class=""><span>转派</span></li>'
                          tbodyHTML +='<li class=""><span>暂停</span></li>'
                          tbodyHTML +='<li class="flow-chart"><span>查看流程</span></li>'
                          tbodyHTML +='<li><span>终止</span></li>'
                          tbodyHTML +='</ul>'
                          tbodyHTML +='</div>'
                          tbodyHTML +='</td>'
                          tbodyHTML +='</tr>'
                        }
                          
                       
                       this.children('table').children('tbody').append(tbodyHTML) ;
                       $('.dataTable').dataTable();
          
                       //表格样式调整
                       $('.dataTables_info').css({'height':'70px','line-height':'70px'})//
                       $('.paging_simple_numbers').css({'float':'right'})
                       $('.dataTables_filter label').css({'float':'right'})
                       
                    }
});
/*
 *基础服务类
*/
function FunctionTool (){
  var _self = this
  
  //初始化相关函数
  _self.init = function(){
    alert(1)
  };
	//通用ajax 服务
	_self.getData =function(data){
		var fun = eval(data.fun);
		delete data.fun;
		// $.post( fun.url, data,
  //       function(dat) {
  //         fun(dat, args)
  //       }, "json")
    //application/json; charset=UTF-8
    $.ajax({
             type: "POST",
             url: projectUrl+fun.url,
             contentType :'application/json; charset=UTF-8',
             data: data,
             dataType: "json",
             success: function(dat) {
                              fun(dat, args)
                            }
         });

	},
	_self.test = function(){
		alert('success');
	}
	/*继续新增*/
}

//基础服务类实例化
var FunTool = new FunctionTool();
