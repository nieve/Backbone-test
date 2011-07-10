<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="indexTitle" ContentPlaceHolderID="TitleContent" runat="server">
    Home Page
</asp:Content>
<asp:Content ID="js" ContentPlaceHolderID="JsContent" runat="server">
    <script src="../../Scripts/jquery.tmpl.min.js" type="text/javascript"></script>
    <script src="../../Scripts/Index.bkbn.js" type="text/javascript"></script>
</asp:Content>

<asp:Content ID="indexContent" ContentPlaceHolderID="MainContent" runat="server">
	
    <h2><%= Html.Encode(ViewData["Message"]) %></h2>
    <form action="/login" id="login-form">
      Search for values: <input type="text" id="input" />
      <ul id="results"> </ul>
    </form>
    <script id="resultsDisplay" type="text/x-jquery-tmpl">
        <li>
            Key: ${key} / value: <input type="text" value="${value}" />
        </li>
    </script>
</asp:Content>
