const uncss = require("uncss");
const cleancss = require("clean-css");
const glob = require("glob");
const fs = require("fs");

const stylesheetLocation = "./node_modules/@newjersey/njwds/dist/css/";
const stylesheetSourceLocation = "assets/njwds/css/";
const stylesheetName = "styles.css";
const stylesheetMinName = "styles.min.css";

const jekyllUncss = function () {
  const css = fs.readFileSync(stylesheetLocation + stylesheetName, "utf8");

  glob("_site/**/*.html", function (err, files) {
    if (err) {
      console.log(err);
    }

    uncss(
      files,
      {
        raw: css,
        ignore: [/no-touch/],
        ignoreSheets: [/\/css\//],
      },
      function (err, output) {
        if (err) {
          console.log(err);
        }

        new cleancss().minify(output, function (err, minified) {
          if (err) {
            console.log(err);
          }

          fs.writeFileSync(
            stylesheetSourceLocation + stylesheetMinName,
            minified.styles
          );
        });
      }
    );
  });
};

jekyllUncss();
