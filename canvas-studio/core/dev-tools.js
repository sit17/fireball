var BrowserWindow = require('browser-window');

module.exports = {
    highlightHeaderLater: function (browserWindow) {
        browserWindow.once('devtools-opened', function () {
            //var dwc = browserWindow.devToolsWebContents;
            //dwc.once('dom-ready', function () {
            function changeHeaderColor () {
                var i = document.getElementById('inspector-app-iframe');
                var d = i.contentDocument;
                var s = d.querySelector('.inspector-view-tabbed-pane.tabbed-pane');
                var h = s.shadowRoot.querySelector('.tabbed-pane-header');
                // h.style.cssText = 'background-image: linear-gradient(#fff9ea, #fff9ea) !important;';
                h.style.cssText = 'background-image: linear-gradient(#fc0, #fc0) !important;';
            }
            setTimeout(function () {
                var dwc = browserWindow.devToolsWebContents;
                dwc.executeJavaScript('(' + changeHeaderColor + ')();');

                // var css = '.inspector-view-tabbed-pane.tabbed-pane::shadow .tabbed-pane-header { background: #000 !important; }';
                // dwc.insertCSS(css);

                // HACK: browserWindow.executeJavaScriptInDevTools('(' + changeHeaderColor + ')();');
            }, 200);
            //});
        });
    }
};
