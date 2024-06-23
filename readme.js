document.addEventListener('DOMContentLoaded', async () => {
    async function loadReadme() {
        const readmeContainer = document.getElementById('readmeContainer');
        const readmeURL = readmeContainer.getAttribute('data-src');
        readmeContainer.classList.add('markdown-body');

        try {
            const response = await fetch(readmeURL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const markdown = await response.text();
            const html = marked(markdown);

            readmeContainer.innerHTML = html;
        } catch (error) {
            console.error('Error loading README.md:', error);
        }
    }

    await loadReadme();
});