var windowOnload = false
var json ={ 
            'id' : 'table',
            'thead':[' ','业务类型','申请人','联系方式','房源编号','时间','操作'],
            'data':[{'name':'按揭贷款','sex':'张三','age':'15000000000','content':'11111111111','school':'2016-10-10',
            			'xiangqing':'<button class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal1">详情</button>'},
            		{'name':'按揭贷款','sex':'小王','age':'15099999999','content':'333333333','school':'2016-10-10',
                   		'xiangqing':'<button class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal1">详情</button>'},
                    {'name':'按揭贷款','sex':'李四','age':'15888888888','content':'2222222222','school':'2016-10-10',
                   		'xiangqing':'<button class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal1">详情</button>'},
                   
                 ]
        }

var btnJson = {
				'buttonGroup':[{
									'id' : 'id1',
									'name' :'按钮1',
									'ico' : '',
									'fun' : ''
								},{
                  'id' : 'id2',
                  'name' :'按钮2',
                  'ico' : '',
                  'fun' : ''
                },{
                  'id' : 'id3',
                  'name' :'按钮3',
                  'ico' : '',
                  'fun' : ''
                }
				]
			}
var navData = {
        'tabNav':['第一个tab','第二个tab'] ,
        'navData' : [{'content' : 'text1!!!!!!!!!!!!!!!!'},
                     {'content' : 'text2'}]
          }
var dropDown = {
          'id' : 'select',
          'data': [{'content':'菜单1'},{'content':'菜单2'},{'content':'菜单3'},{'content':'菜单4'}]
        }
$(document).ready(function(){
    $(".ibox-content").createTable(json,'');
    $(".table-control").createButton(btnJson);
    $('#cancel').click(function(){
    	$('input:checked').each(function(o){
	     	alert($(this).attr('data-data'))
      });
    });
    $(".tabs-container").createTab(navData);

    $('.drop-down').createDropdown(dropDown)


    //
    $('#submit').click(function(){
      var idRadio = $("input[name='tableCheck']:checked").attr('data-id')
      $("input[name='tableCheck']:checked").each(function(){
        $(this).parent().parent().remove();
      })
      $('#'+idRadio).remove();
    })

});



