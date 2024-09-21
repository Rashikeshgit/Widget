(function () {
  function loadWidget() {
    // Get the current script tag
    var scriptTag = document.currentScript;

    // Get the data attributes (URL and dimensions)
    var targetURL = scriptTag.getAttribute('data-url') || 'https://example.com'; // Default URL if not specified
    var iframeWidth = scriptTag.getAttribute('data-width') || '600px'; // Default width
    var iframeHeight = scriptTag.getAttribute('data-height') || '400px'; // Default height

    // Create an iframe element
    var iframe = document.createElement('iframe');
    iframe.src = targetURL;
    iframe.width = iframeWidth;
    iframe.height = iframeHeight;
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';

    // Create a container for the iframe
    var widgetContainer = document.createElement('div');
    widgetContainer.id = 'iframe-widget-container';
    widgetContainer.style.textAlign = 'center';
    widgetContainer.appendChild(iframe);

    // Append the container to the body of the page
    document.body.appendChild(widgetContainer);
  }

  // Ensure the widget runs only after the page is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadWidget);
  } else {
    loadWidget();
  }
})();
