import React, { useEffect } from 'react';

export const TwitterEmbedded = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <blockquote className="twitter-tweet">
      <p lang="en" dir="ltr">
        Hi <a href="https://twitter.com/overleaf?ref_src=twsrc%5Etfw">@overleaf</a>
        <br /><br />
        I used overleaf for 4 years, in the past, I wrote papers, and now, I made my Resume.
        <br /><br />
        Recently, I made an open source project for generating LaTeX source code with WYSIWYG editor, just try it!
        <a href="https://t.co/MZpvsE2rkz">https://t.co/MZpvsE2rkz</a>
      </p>
      &mdash; Riku (@Tom61319231) <a href="https://twitter.com/Tom61319231/status/1483957123516182530?ref_src=twsrc%5Etfw">January 20, 2022</a>
    </blockquote>)
}
