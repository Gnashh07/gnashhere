import { useEffect, useState } from "react";

interface Repo {
  name: string;
  html_url: string;
  readme: string;
  stars: number;
  forks: number;
  default_branch: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const username = "Gnashh07"; // Replace with your GitHub username

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData: Repo[] = await response.json();

      const reposWithReadme = await Promise.all(
        reposData.map(async (repo) => {
          const readmeText = await fetchReadme(username, repo.name, repo.default_branch);
          return {
            ...repo,
            readme: readmeText,
          };
        })
      );

      setRepos(reposWithReadme);
    }

    fetchRepos();
  }, []);

  return (
    <>
      <header>
        <h1>My Projects</h1>
      </header>

      <main className="container">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <div key={repo.name} className="project">
              <h2>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h2>
              <p>{repo.readme.substring(0, 300)}...</p>
              <div className="repo-meta">
                ⭐ {repo.stars} Stars | 🍴 {repo.forks} Forks
              </div>
            </div>
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </main>
    </>
  );
}

async function fetchReadme(username: string, repoName: string, branch: string) {
  const readmeResponse = await fetch(
    `https://raw.githubusercontent.com/${username}/${repoName}/${branch}/README.md`
  );
  return readmeResponse.ok ? await readmeResponse.text() : "No README found.";
}
