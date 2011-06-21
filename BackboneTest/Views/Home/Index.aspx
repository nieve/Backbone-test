<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="indexTitle" ContentPlaceHolderID="TitleContent" runat="server">
    Home Page
</asp:Content>
<asp:Content ID="js" ContentPlaceHolderID="JsContent" runat="server">
    <script src="../../Scripts/Index.bkbn.js" type="text/javascript"></script>
</asp:Content>

<asp:Content ID="indexContent" ContentPlaceHolderID="MainContent" runat="server">
	
    <h2><%= Html.Encode(ViewData["Message"]) %></h2>
    <form action="/login" id="login-form">
      Add content item: <input type="text" id="input" />
    </form>
	
	<%--<script type="text/javascript"> 
		$(function(){

  var SomeModel = Backbone.Model.extend({
    raiseIt: function(data){
      this.set({data: data});
      this.trigger("someEvent");
    }
  });

  var SomeView = Backbone.View.extend({
    el: "#input",

    events: { "change #input": "showIt" },

    initialize: function(){
      _.bindAll(this, "showIt");
      this.model.bind("someEvent", this.showIt);
      $("#input").change(this.showIt);
    },

    showIt: function(){
      if (this.model)
        alert(this.model.get('data'));
      else
        alert("there is no model attribute!");
    }
  });

  var someModel = new SomeModel();
  var someView = new SomeView({model: someModel});

  // what do you expect the alert boxes to show for these two lines?
  // what do you expect it to show when you change the text input field?
//  someModel.raiseIt("foo");
//  someView.showIt();

});	
	</script>--%>
</asp:Content>
