import React, { useEffect } from 'react';


/**
 * Embeds a twitter post
 * 
 * @param {React.ReactNode} children - the blockquote of the tweet
 * click `Embed Twitter` on the tweet and it will be generated from here: https://publish.twitter.com/
 */
export const TwitterEmbedded = ({ children }) => {
  useEffect(() => {
    let script = document.getElementById('twitter-wjs');

    if (!script) {
      script = document.createElement('script');

      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      script.id = "twitter-wjs";

      document.body.appendChild(script);
    }

    return () => {
      if (script) {
        document.body.removeChild(script);
      }
    }
  }, []);

  return children;
}
