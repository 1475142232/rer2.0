var windowOnload = false
var btn1 = '<a href="javascript:;" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal1">详情/编辑</a>';
var json ={
            'id' : 'table',
            'thead':[' ','物业名称','发布时间','业主','身份证号','联系电话','操作'],
            'data':[{'address':'安华西里1号','data':'2016-5-10','name':'张三','nameId':'13215965874898','phone':'1111111111','btn':btn1},
                    {'address':'安华西里1号','data':'2016-5-10','name':'张三','nameId':'13215965874898','phone':'1111111111','btn':btn1},
                    {'address':'安华西里1号','data':'2016-5-10','name':'张三','nameId':'13215965874898','phone':'1111111111','btn':btn1},
                    {'address':'安华西里1号','data':'2016-5-10','name':'张三','nameId':'13215965874898','phone':'1111111111','btn':btn1},
                    {'address':'安华西里1号','data':'2016-5-10','name':'张三','nameId':'13215965874898','phone':'1111111111','btn':btn1},
                    {'address':'安华西里1号','data':'2016-5-10','name':'张三','nameId':'13215965874898','phone':'1111111111','btn':btn1},
                    {'address':'安华西里1号','data':'2016-5-10','name':'张三','nameId':'13215965874898','phone':'1111111111','btn':btn1},
                    {'address':'安华西里1号','data':'2016-5-10','name':'张三','nameId':'13215965874898','phone':'1111111111','btn':btn1},
                    {'address':'安华西里2号','data':'2016-5-10','name':'张三','nameId':'13215965874898','phone':'1111111111','btn':btn1}
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



