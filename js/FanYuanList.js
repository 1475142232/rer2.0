var fangYuan = {
    init : function(loginId){
/*登录成功*/
    $('#mytab').bootstrapTable({
        url: "data/fangYuanList.json",//数据源
        dataField: "rows",//服务端返回数据键值 就是说记录放的键值是rows，分页时使用总记录数的键值为total
        height: 'auto',//高度调整
        search: false,//是否搜索
        pagination: true,//是否分页
        pageSize: 5,//单页记录数
        //pageList: [5, 10],//分页步进值
        sidePagination: "client",//客户端分页
        contentType: "application/x-www-form-urlencoded",//请求数据内容格式 默认是 application/json 自己根据格式自行服务端处理
        dataType: "json",//期待返回数据类型
        method: "post",//请求方式
        //searchAlign: "left",//查询框对齐方式
        //queryParamsType: "limit",//查询参数组织方式
        queryParams: function getParams(params) {
            //params obj
            params.loginId = 1;
            return params;
        },
        searchOnEnterKey: false,//回车搜索
        showRefresh: false,//刷新按钮
        showColumns: false,//列选择按钮
        buttonsAlign: "left",//按钮对齐方式
        //toolbar: "#toolbar",//指定工具栏
        //toolbarAlign: "right",//工具栏对齐方式
        columns: [
            {
                title: "序号",//标题
                field: "id",//键名
                align: "center",//水平
                order: "desc",//默认排序方式
                width: "5%"
            },{
                title: "物业名称",//标题
                field: "propertyName",//键名
                align: "center",//水平
                order: "desc",//默认排序方式
                width: "15%"
            },{
                title: "发布时间",//标题
                field: "date",//键名
                align: "center",//水平
                order: "desc",//默认排序方式
                width: "20%"
            },{
                title: "业主",
                field: "propertyId",
                align: "center",//水平
                sortable: false,
                width: "10%"
            },{
                title: "身份证号",
                field: "propertyType",
                align: "center",//水平
                sortable: false,
                width: "20%"
            },{
                title: "联系电话",
                field: "phone",
                align: "center",//水平
                sortable: false,
                width:"20%"
            },{
                title: "操作",
                field: "id",
                align: "center",//水平
                sortable: false,//水平
                width: "10%",
                formatter: function(id){
                    return '<a href="javascript:;" id='+id+' class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal1">详情/编辑</a>'
                }
            }
        ],
        locale: "zh-CN",//中文支持,
        detailView: false //是否显示详情折叠
    });
  }
}
$(function(){
  fangYuan.init();
})
