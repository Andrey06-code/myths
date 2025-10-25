 // Получаем данные из URL параметров
const urlParams = new URLSearchParams(window.location.search);
const nameClNA = urlParams.get('name');
const GUO = urlParams.get('GUO');
        
        

    

  const date = new Date().toLocaleDateString();

  const count = sessionStorage.getItem('counter') || 0;
  



    document.getElementById("adress").textContent = GUO;

  document.getElementById("Name").textContent = nameClNA;

  document.getElementById("date").textContent = date;

  document.getElementById("counter").textContent = "Результат: " + count + " из 120 баллов";

  // ===== Генерация PDF =====
  const { jsPDF } = window.jspdf;

  document.getElementById("btnGenerate").addEventListener("click", () => {
    const certificate = document.getElementById("certificate");

    html2canvas(certificate, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");

      // Портретная ориентация
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("certificate_"+nameClNA+".pdf");
    });
  });