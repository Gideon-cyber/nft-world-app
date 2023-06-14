// import { useEffect, useState } from "react";
// import { SvgXml } from "react-native-svg";
// import { readFile } from "react-native-fs";
// import RNFS from "react-native-fs";

// function MySvgComponent({ path }) {
//   const [svgData, setSvgData] = useState("");

//   useEffect(() => {
//     async function loadFile() {
//       try {
//         const filePath = `${RNFS.DocumentDirectoryPath}/my-file.txt`;
//         const fileExists = await RNFS.exists(filePath);

//         if (fileExists) {
//           const fileType = await RNFS.stat(filePath).then((result) =>
//             result.isFile() ? "File" : "Directory"
//           );
//           console.log(`The file exists and is a ${fileType}.`);
//         } else {
//           console.log("The file does not exist.");
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     loadFile();
//     async function loadSvgData() {
//       const svgFileContents = await readFile(
//         path, // The path to your SVG file
//         "utf8" // The encoding of your SVG file
//       );
//       setSvgData(svgFileContents);
//     }

//     loadSvgData();
//   }, []);

//   return <SvgXml xml={svgData} width="100%" height="100%" />;
// }

// export default MySvgComponent;
