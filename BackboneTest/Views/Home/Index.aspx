<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="indexTitle" ContentPlaceHolderID="TitleContent" runat="server">
    Home Page
</asp:Content>
<asp:Content ID="js" ContentPlaceHolderID="JsContent" runat="server">
    <script src="../../Scripts/lib/jquery-1.6.1.min.js" type="text/javascript"></script>
    <script src="../../Scripts/lib/jquery.tmpl.min.js" type="text/javascript"></script>
    <script src="../../Scripts/lib/underscore-min.js" type="text/javascript"></script>
    <script src="../../Scripts/lib/backbone.js" type="text/javascript"></script>
    <script src="../../Scripts/app/namespace.js" type="text/javascript"></script>
    <script src="../../Scripts/translation/Index.bkbn.js" type="text/javascript"></script>
</asp:Content>

<asp:Content ID="indexContent" ContentPlaceHolderID="MainContent" runat="server">
	
    <h2><%= Html.Encode(ViewData["Message"]) %></h2>
    <form action="/login" id="login-form">
      Search for values: <input type="text" id="input" />
      <ul id="results"> </ul>
    </form>
    <script id="resultsDisplay" type="text/x-jquery-tmpl">
        <li>
            Key: ${Key} <br/>
            value: <input type="text" value="${Value}" />
        </li>
    </script>
</asp:Content>
