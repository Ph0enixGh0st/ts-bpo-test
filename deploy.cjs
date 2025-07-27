// deploy.js
const ghpages = require("gh-pages");

ghpages.publish("dist", {
  dotfiles: true,
}, function (err) {
  if (err) {
    console.error("🚨 Deployment failed:", err);
  } else {
    console.log("✅ Deployed to GitHub Pages!");
  }
});