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
          Search for values: <input type="text" id="input" />
        </div>
        <div class="clear"></div>
        <div>
            <ul id="results"> </ul>
        </div>
    </div>
    <div id="translationsSessionForm" class="sessionWindow">
        No translations are currently flagged for saving.
    </div>
    </form>
    <script type="text/javascript">
        $(function () {
            var vents = _.extend({}, Backbone.Events);
            var sessionView = new this.TranslationManager.SessionView({ vents: vents });
            var someView = new this.TranslationManager.TranslationManagerView({ vents: vents });
        });
    </script>
    <script id="resultsDisplay" type="text/x-jquery-tmpl">
        <p class="translationValue">
            Key: ${Key} <br/>
            value: <input class="valueInput" type="text" value="${Value}" /> <a class="button save">save</a>
        </p>
    </script>
</asp:Content>
