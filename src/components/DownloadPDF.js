import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const DownloadPDF = ({ tableId }) => {
   
    const downloadPdf = () => {
        const input = document.getElementById(tableId);
        const saveName=prompt("Enter the file Name to save")
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p','mm','a4');
                const imgWidth = 150;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save(saveName);
            });
    };

    return (
        <button className='px-3 py-1 bt' onClick={downloadPdf}>Download PDF</button>
    );
};

export default DownloadPDF;
