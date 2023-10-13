function generatePreview() {
    const urlInput = document.getElementById('urlInput').value;
    const sitePreview = document.getElementById('sitePreview');
    const previewContainer = document.getElementById('previewContainer');

    // Utilisation de l'API PageSpeed Insights pour générer un aperçu
    fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${urlInput}&screenshot=true`)
        .then(response => response.json())
        .then(data => {
            const screenshotData = data.lighthouseResult.audits['final-screenshot'].details;
            const imageData = screenshotData.data;
            const imageType = screenshotData.type;
            const imageUrl = `data:${imageType};base64,${imageData}`;
            
            sitePreview.src = imageUrl;
            previewContainer.style.display = 'block';
        })
        .catch(error => {
            console.error(error);
            alert('Impossible de générer l\'aperçu.');
        });
}
