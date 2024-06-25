document.addEventListener('DOMContentLoaded', async () => {
    async function loadReadme() {
        const readmeContainer = document.getElementById('readmeContainer');
        const repo = 'witzakr/3JS'; // Replace with your repository

        try {
            const response = await fetch(`https://api.github.com/repos/${repo}/readme`, {
                headers: {
                    'Accept': 'application/vnd.github.v3.html+json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const html = await response.text();
            readmeContainer.innerHTML = html;
        } catch (error) {
            console.error('Error loading README.md:', error);
        }
    }

    await loadReadme();
});