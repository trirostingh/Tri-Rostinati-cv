document.getElementById('download-cv').addEventListener('click', function() {
    // Memilih elemen yang akan diubah menjadi PDF
    const cvElement = document.querySelector('.container');
    const headerElement = document.querySelector('.header');

    // Menggabungkan konten header dan main
    const fullContent = document.createElement('div');
    fullContent.appendChild(headerElement.cloneNode(true)); // Mengkloning header
    fullContent.appendChild(cvElement.cloneNode(true)); // Mengkloning container

    // Menggunakan html2pdf library
    html2pdf(fullContent, {
        margin: 10,
        filename: 'CV_Profesional_[Nama Anda].pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
});