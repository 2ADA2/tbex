import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export async function downloadPDF() {
    const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
    });

    const element = document.getElementById("cv");

    const canvas = await html2canvas(element, {
        scale: 2
    });

    const imgData = canvas.toDataURL("image/png");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save("cv.pdf");
}