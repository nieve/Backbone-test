<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="indexTitle" ContentPlaceHolderID="TitleContent" runat="server">
    Home Page
</asp:Content>
<asp:Content ID="js" ContentPlaceHolderID="JsContent" runat="server">
    <link href="../../Content/tipsy.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/lib/jquery.js" type="text/javascript"></script>
    <script src="../../Scripts/lib/jquery.tmpl.min.js" type="text/javascript"></script>
    <script src="../../Scripts/lib/underscore.js" type="text/javascript"></script>
    <script src="../../Scripts/lib/backbone.js" type="text/javascript"></script>
    <script src="../../Scripts/lib/jquery.tipsy.js" type="text/javascript"></script>
    <script src="../../Scripts/app/namespace.js" type="text/javascript"></script>
    <script src="../../Scripts/translation/models.js" type="text/javascript"></script>
    <script src="../../Scripts/translation/translationView.js" type="text/javascript"></script>
    <script src="../../Scripts/translation/sessionView.js" type="text/javascript"></script>
    <script src="../../Scripts/translation/translationManagerView.js" type="text/javascript"></script>
</asp:Content>

<asp:Content ID="indexContent" ContentPlaceHolderID="MainContent" runat="server">
	
    <h2><%= Html.Encode(ViewData["Message"]) %></h2>
    <form id="login-form" >
    <div class="rightSide">
        <div class="searchWindow">
          Search for values: <input type="text" class="searchInput" />
        </div>
        <div class="clear"></div>
        <div>
            <ul id="results" class="bareList"> </ul>
        </div>
    </div>
    <div id="translationsSessionForm" class="sessionWindow">
        <div class="sessionStatusText">No translations are currently flagged for saving.</div>
        <a id="saveAll" class="button midButton_disabled save">Save All</a>
    </div>
    </form>
    <script type="text/javascript">
        $(function () {
            var vents = _.extend({}, Backbone.Events);
            var sessionView = new TranslationManager.SessionView({ vents: vents });
            var someView = new TranslationManager.TranslationManagerView({ vents: vents });
        });
    </script>
    <% Html.RenderAction("Index", "Templates", new {name="Result"}); %>
</asp:Content>
