export default {
    async fetch(request) {
      const url = new URL(request.url);
      const gonePages = [
        '/blog/first-post',
        '/blog/site-migration-seo'
      ];
  
      // Check if the requested path is in the gonePages list
      if (gonePages.includes(url.pathname)) {
        return new Response('This page is permanently gone.', {
          status: 410,
          statusText: 'Gone'
        });
      }
  
      // Pass through to static files if not in the list
      return fetch(request);
    },
  };