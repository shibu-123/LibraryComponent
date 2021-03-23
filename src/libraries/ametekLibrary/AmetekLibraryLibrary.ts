import * as jQuery from "jquery";
import * as popper from "popper.js";
import * as bootstrap from "bootstrap";

import "react-bootstrap-typeahead/css/Typeahead.css";
import "./styles/AmetekStyle.scss";
require("../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../../../node_modules/react-dropzone-component/styles/filepicker.css");
require("../../../node_modules/dropzone/dist/dropzone.css");
require("../../../node_modules/suneditor/dist/css/suneditor.min.css");

export class AmetekLibraryLibrary {
  public async loadPNPJS(): Promise<any> {
    const importedPNPJS = await import("./importPNPJS");
    return importedPNPJS.default.returnPNPJS();
  }

  public async loadGraph(): Promise<any> {
    const importedGraph = await import("./importGraph");
    return importedGraph.default.returnGraph();
  }

  public async loadJSPDF(): Promise<any> {
    const importedJSPDF = await import("./importJSPDF");
    return importedJSPDF.default.returnPDF();
  }
  public async loadAxios(): Promise<any> {
    const importedAxios = await import("./importAxios");
    return importedAxios.default.returnAxios();
  }
  public importMoment() {
    const mjs = require("moment");
    return mjs;
  }
  public importAxios() {
    const axios = require("axios");
    return axios;
  }
}
