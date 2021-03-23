import jsPDF from "jspdf";
import "jspdf-autotable";
export default class ImportJSPDF {
  public static returnPDF(): any {
    return jsPDF;
  }
}
