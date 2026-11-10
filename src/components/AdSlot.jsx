import { useEffect } from "react";

/* AdSense for React. <amp-ad> only works on AMP pages, so use <ins class="adsbygoogle">.
   Add this once in index.html <head>:
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3319651342208212" crossorigin="anonymous"></script> */
export default function AdSlot() {
  useEffect(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch { /* already filled */ }
  }, []);
  return (
    <div className="container ad-wrap">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3319651342208212"
        data-ad-slot="7229519609"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
