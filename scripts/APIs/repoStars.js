const repoStarsForks = async () => {
    await fetch('https://api.github.com/repos/Mu-selim/v1')
    .then(res => res.json())
    .then(res => {
        const {stargazers_count: stars, forks_count: forks} = res;
        document.querySelector('.starCount').textContent = stars;
        document.querySelector('.forkCount').textContent = forks;
    });
}
repoStarsForks();