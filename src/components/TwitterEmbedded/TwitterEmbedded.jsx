import React, { useEffect } from 'react';
import useThemeContext from "@theme/hooks/useThemeContext";

/**
 * Embeds a twitter post
 * 
 * @param {React.ReactNode} children - the blockquote of the tweet
 * click `Embed Twitter` on the tweet and it will be generated from here: https://publish.twitter.com/
 */
export const TwitterEmbedded = ({ children }) => {
  const { isDarkTheme } = useThemeContext();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <blockquote
      className="twitter-tweet"
      data-theme={isDarkTheme ? "dark" : "light"}
      // TODO: Remount the DOM when color changes
      // key={isDarkTheme}
    >
      {children}
    </blockquote>
  );
}
