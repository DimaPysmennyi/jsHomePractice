window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    return "Вийти з сайту?";
})