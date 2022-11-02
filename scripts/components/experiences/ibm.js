const ibm = () => {
    const companyLink = "https://www.ibm.com/eg-en";
    return `
    <h3>
        <span class="jobTitle">Software Intern</span>
        <span class="company">
            @
            <a class="placeName" href="${companyLink}" target="_blank" rel="">IBM eg</a>
        </span>
    </h3>
    <p class="range">February 2022 - March 2022</p>
    <ul class="jobDecription">
        <li class="jobDecriptionItem">Developed and maintained code for a landing page using HTML, CSS, and JavaScript.</li>
        <li class="jobDecriptionItem">Tested sites in several browsers and mobile devices to ensure cross-browser compatibility and responsiveness.</li>
        <li class="jobDecriptionItem">Added some unit tests using Jest framework.</li>
    </ul>`;
}