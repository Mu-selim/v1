const acm = () => {
    const companyLink = "https://www.acm.org";
    return `
    <h3>
        <span class="jobTitle">Chairman</span>
        <span class="company">
            @
            <a class="placeName" href="${companyLink}" target="_blank" rel="">ACM Mansoura</a>
        </span>
    </h3>
    <p class="range">May 2022 - October 2022</p>
    <ul class="jobDecription">
        <li class="jobDecriptionItem">Held "Game Of Coders 3.0" contest, it is a competitive programming contest, and 26 teams participated in it.</li>
        <li class="jobDecriptionItem">Made the plan of the "Team Operations" sub-committee, which is responsible for developing the chapter and evaluating its progress.</li>
        <li class="jobDecriptionItem">Spearheaded more than 35 teams from Mansoura to ECPC qualification, 7 teams to ECPC and 2 teams to ACPC.</li>
        <li class="jobDecriptionItem">Trained +190 students on competitive programming using C++.</li>
    </ul>`;
}